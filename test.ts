import request from 'request';
// @ts-expect-error
import fakeUseragent from 'fake-useragent';

// Set the base URL to visit
const baseUrl: string = 'https://www.alumnisakura.com/';

// Set the number of times to visit the URL
const numVisits: number = 10;

// Create a UserAgent object for generating random user agent strings

for (let i: number = 0; i < numVisits; i++) {
  
  // Set the headers for the request
  const ua: fakeUseragent.UserAgent = fakeUseragent();
  const headers: request.Headers = { 'User-Agent': ua };

  console.log("🚀 ~ file: test.ts:24 ~ headers", headers)
  // Make the request
  // @ts-expect-error
  request.get(baseUrl, { headers: headers }, (error: request.RequestError, response: request.Response, body: any) => {
    // Print the response status code
    console.log(response.statusCode);
  });
}
