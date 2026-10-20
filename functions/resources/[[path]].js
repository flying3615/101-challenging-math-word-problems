export async function onRequest(context) {
  const path = context.params.path;
  const resourcePath = Array.isArray(path) ? path.join("/") : path;
  const key = resourcePath.startsWith("resources/") ? resourcePath : `resources/${resourcePath}`;
  let object;

  try {
    object = await context.env.BOOK_RESOURCES.get(key);
  } catch (error) {
    console.error(`R2 lookup failed for ${key}`, error);
    return context.next();
  }

  if (object === null) {
    return context.next();
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("cache-control", "public, max-age=0, must-revalidate");

  return new Response(context.request.method === "HEAD" ? null : object.body, { headers });
}
