import puppeteer from 'puppeteer';

export default async (req, res) => {
  try {
    const url = req.query.url;

    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' });
    }

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    
    const response = await page.goto(url);
    console.log("Response status:", response.status());

    // Fetch headings
    const headings = await page.$$eval('h1, h2, h3, h4, h5, h6', elements => elements.map(item => item.innerText));

    await browser.close();
    
    // Return the headings in a structured JSON format
    return res.status(200).json({ headings: headings });
  } catch (error) {
    console.error("Error occurred while scraping:", error);
    return res.status(500).json({ error: "An error occurred while scraping." });
  }
};
