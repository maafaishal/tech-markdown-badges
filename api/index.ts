import fastify from "fastify";
import fetch from "node-fetch";

import badges from "./badges";

const app = fastify({ logger: true, caseSensitive: false });

// Declare a route
app.get("/", async (_, reply) => {
  reply.header('Cache-Control', 's-maxage=86400');
  reply.header("Content-Type", "image/svg+xml");

  const response = await fetch(
    "https://img.shields.io/badge/swc-111111?style=for-the-badge&logo=swc&logoColor=F5D140"
  );
  const textResponse = await response.text();

  reply.send(textResponse);
});

for (const badge of badges) {
  app.get(`/${badge.name}`, async (_, reply) => {
    reply.header('Cache-Control', 's-maxage=86400, max-age=86400, public');
    reply.header("Content-Type", "image/svg+xml");

    const response = await fetch(badge.url);
    const textResponse = await response.text();

    reply.send(textResponse);
  });
}

// Run the server!
app.listen({ port: 3000 }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});

export default async (req: any, res: any) => {
  await app.ready();
  app.server.emit('request', req, res);
}
