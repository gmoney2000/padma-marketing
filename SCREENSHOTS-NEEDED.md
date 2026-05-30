# Screenshots needed from DyGarn tenant

> Path 3 morning handoff. The dark-mode rebuild is live at `http://localhost:3002`. The device-frame mockups in the two deep-dive sections (Data Ingestion + Submittals) are styled fakes for now. The 18 module cards have hover lifts and "Preview ->" cues but no actual previews behind them yet. To get to full Flow parity, we need real product screenshots. Below is exactly what to capture and how. Knock these out in any order, drop them into `customers/padma/website/brand_assets/screenshots/`, and ping me when ready. I will then wire them into the page.

## Capture environment

- Sign into DyGarn tenant at `https://repfirm.dygarn.com` (will rename to `app.padmahq.com` later).
- Use a **1440x900** browser window for consistency. If you have a 4K display, set the browser zoom to whatever lands at 1440 wide for the content area.
- Use Chrome DevTools or any screenshot tool (Snipping Tool, ShareX, Cleanshot). Crop tight to the content, no browser chrome.
- If a screenshot needs cleaning up (real customer names, sensitive numbers), either redact in the tool or send raw and I will redact in CSS overlay.

## Priority A: Module hover-previews (8 critical)

These are the ones that, once added, make the 18 module cards explode in polish. Each card gets ONE preview image that appears on hover.

| Module | What to capture | Frame size hint |
|---|---|---|
| **CRM** | The pipeline kanban or contacts list view, with 4-6 cards/rows visible. Use demo data or DyGarn tenant data. | ~1200x720, landscape |
| **Quotes** | The new-quote builder showing the multi-distributor / multi-mfr line table. The engineer hint, the markup math, a couple of line items. | ~1200x720 |
| **Orders** | A PO or order detail page with distributor breakout visible. | ~1200x720 |
| **BOMs** | The BOM review page with cross-matched manufacturer rows (the "pills") visible. | ~1200x720 |
| **Submittals** | The submittal index page OR a generated submittal cover sheet preview. | ~1200x720 |
| **Commissions** | Any commission reconciliation view, breakouts table, or statement. | ~1200x720 |
| **Project Management** | Project tracker page with the project list/board. | ~1200x720 |
| **Smart Parsing** | The document upload screen, ideally mid-parse with extracted fields visible. | ~1200x720 |

If any are not visually ready in your tenant today, skip and I will keep the styled hover-cue arrow as placeholder.

## Priority B: Device-frame screenshots for deep-dive sections (4 hero shots)

These replace the styled mockups currently inside the two deep-dive sections. Higher visual quality matters here.

### For the "Data Ingestion" deep-dive section
1. **The actual upload page** in DyGarn tenant. Show the upload area, document-type cards, mfr-aware parsing options. Try to get a view that mirrors the styled fake currently in the page.
2. *Optional:* A second view showing a recently parsed document with extracted fields visible.

### For the "Submittals" deep-dive section
3. **A real branded submittal cover sheet** PDF preview (open the PDF in browser or use Adobe to capture). The NEXT or S&D one you already polished would be perfect. Square-ish crop showing the cover layout.
4. *Optional:* A cut-sheet page from the same submittal to show the branded band continuity.

## Priority C: Floating callout content (text only, no screenshots needed)

The floating callouts on the device frames currently say:
- "4,847 docs parsed this month"
- "Email auto-ingestion on for 6 mfrs"
- "12 manufacturer APIs live + 4 in pipeline"
- "Your brand on every page"
- "Generated in 8 seconds"
- "Cross-references resolved (G.1.c logic baked in)"

If any of these stretch too far past reality and you want them softened, tell me what numbers to use instead and I will edit. Or send me real numbers from your tenant and they become honest claims.

## Priority D (later): Real testimonials

Once a customer is live and willing to give a quote, that becomes the strongest proof block on the page. Two sentence quote + name + title + agency. We will iterate the proof section when those exist.

## How to send me the files

Drop them in: `customers/padma/website/brand_assets/screenshots/`

Use these exact filenames so I can wire them in without asking:
- `crm.png`, `quotes.png`, `orders.png`, `boms.png`, `submittals.png`, `commissions.png`, `projects.png`, `smart-parsing.png`
- `device-ingestion.png`, `device-ingestion-2.png` (optional)
- `device-submittal-cover.png`, `device-submittal-cuts.png` (optional)

Tell me when you have at least 3-4 of the Priority A screenshots in the folder and I will start wiring them up.

## What I'll do once screenshots are in

1. Add hover-preview panels to each module card with the corresponding screenshot
2. Swap the styled fake device-frame interiors for the real screenshots
3. Re-screenshot for QA
4. If approved, deploy to Vercel + flip `padmahq.com` and the `getpadma.com` redirect

Until then, the current Path 3 page is fully shippable as is. The hover-cue arrows look intentional ("Preview ->" hints there's more), and the deep-dive frames look polished. We can ship today and add screenshots as you generate them.
