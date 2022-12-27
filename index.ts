import fastify from "fastify";
import fetch from "node-fetch";

const app = fastify({ logger: true, caseSensitive: false });

// Declare a route
app.get("/", async (_, reply) => {
  reply.header("Content-Type", "image/svg+xml");

  const response = await fetch(
    "https://img.shields.io/badge/swc-111111?style=for-the-badge&logo=swc&logoColor=F5D140"
  );
  const textResponse = await response.text();

  reply.send(textResponse);
});

app.get("/swc", async (_, reply) => {
  reply.header("Content-Type", "image/svg+xml");

  const response = await fetch(
    "https://img.shields.io/badge/swc-111111?style=for-the-badge&logo=swc&logoColor=F5D140"
  );
  const textResponse = await response.text();

  reply.send(textResponse);
});

// Run the server!
app.listen({ port: 3000 }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
