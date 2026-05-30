import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotsDir = path.join(__dirname, 'temporary screenshots');

if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });

const url   = process.argv[2] || 'http://localhost:3002';
const label = process.argv[3] ? `-${process.argv[3]}` : '';

let n = 1;
while (fs.existsSync(path.join(screenshotsDir, `screenshot-${n}${label}.png`))) n++;
const outFile = path.join(screenshotsDir, `screenshot-${n}${label}.png`);

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
await new Promise(r => setTimeout(r, 1000));
await page.screenshot({ path: outFile, fullPage: true });

await browser.close();
console.log('Screenshot saved to:', outFile);
