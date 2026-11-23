// Link-share log (Greg 2026-11-23). When a chat or social app (WhatsApp, iMessage, Messenger, LinkedIn, Slack,
// Teams...) fetches a page to build a link preview, tell ops.dygarn so it can show "Link shared" and alert Greg.
// Preview fetchers never run the page tracker script, so this is the only place they can be seen.
// Every other request passes straight through; the page is always served as normal.

const SHARE =
  /facebookexternalhit|facebookcatalog|WhatsApp\/|LinkedInBot|Twitterbot|Slackbot|Slack-ImgProxy|MicrosoftPreview|SkypeUriPreview|Discordbot|TelegramBot|Snap URL Preview|redditbot/i;

export const config = {
  matcher: ["/((?!.*\\.(?:png|jpe?g|gif|svg|webp|ico|css|js|mjs|txt|xml|json|woff2?|pdf|mp4|webm)$).*)"],
};

export default async function middleware(request) {
  const ua = request.headers.get("user-agent") || "";
  if (!SHARE.test(ua)) return;
  try {
    const u = new URL(request.url);
    await fetch("https://ops.dygarn.com/api/track/share", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        host: u.hostname,
        path: u.pathname,
        url: u.href,
        ua,
        ip: (request.headers.get("x-forwarded-for") || "").split(",")[0].trim(),
        country: request.headers.get("x-vercel-ip-country"),
        region: request.headers.get("x-vercel-ip-country-region"),
        city: request.headers.get("x-vercel-ip-city"),
      }),
      signal: AbortSignal.timeout(2500),
    });
  } catch {
    // never block the page over the log
  }
}
