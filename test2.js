const puppeteer = require('puppeteer');
const fakeUseragent = require('fake-useragent');

async function main() {
  // Set the base URL to visit
  const baseUrl = 'https://www.alumnisakura.com/';

  // Set the number of times to visit the URL
  const numVisits = 100;

  // Set the list of IP addresses to use for rotating
  const ipAddresses = ['1.2.3.4', '5.6.7.8', '9.10.11.12'];

  // Launch a headless browser
  const browser = await puppeteer.launch({ headless: true });

  // Create a new page
  const page = await browser.newPage();

  for (let i = 0; i < numVisits; i++) {
    // Choose a random IP address and user agent string
    const ipAddress = ipAddresses[Math.floor(Math.random() * ipAddresses.length)];
    const userAgent = fakeUseragent()
    console.log("🚀 ~ file: test2.js:32 ~ main ~ userAgent", i, userAgent)

    // Set the headers for the request
    const headers = { 'X-Forwarded-For': ipAddress };

    // Set the user agent string for the page
    await page.setUserAgent(userAgent);

    // Visit the URL
    await page.goto(baseUrl, { headers: headers });
  }

  // Close the browser
  await browser.close();
}

main();
