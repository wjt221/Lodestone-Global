const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport: { width: 1440, height: 1500 } });
  await p.goto('http://localhost:3240/', { waitUntil: 'networkidle', timeout: 60000 });
  await p.screenshot({ path: '/tmp/doors.png' });
  // verify the anchor actually resolves on the target page
  await p.goto('http://localhost:3240/governance-advisory#board-formation', { waitUntil: 'networkidle' });
  const found = await p.evaluate(() => !!document.getElementById('board-formation'));
  console.log('anchor #board-formation exists:', found);
  await b.close();
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
