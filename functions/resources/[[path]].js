export async function onRequest(context) {
  const path = context.params.path;
  const resourcePath = Array.isArray(path) ? path.join("/") : path;
  const key = resourcePath.startsWith("resources/") ? resourcePath : `resources/${resourcePath}`;
  const object = await context.env.BOOK_RESOURCES.get(key);

  if (object === null) {
    return context.next();
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("cache-control", "public, max-age=0, must-revalidate");

  return new Response(context.request.method === "HEAD" ? null : object.body, { headers });
}
