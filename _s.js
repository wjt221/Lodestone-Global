const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport: { width: 390, height: 844 } });
  await p.goto('http://localhost:3000/', { waitUntil: 'networkidle', timeout: 30000 });
  await p.waitForLoadState('networkidle');
  await p.waitForTimeout(1200); // allow hydration
  await p.locator('button[aria-controls="mobile-nav"]').click();
  await p.waitForSelector('#mobile-nav', { state: 'visible' });
  await p.waitForTimeout(400);
  await p.screenshot({ path: `${process.env.SS}/mobile-menu3.png` });
  console.log('shot done');
  await b.close();
})().catch(e=>{console.error('ERR', e.message);process.exit(1)});
