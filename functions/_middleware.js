// https://developers.cloudflare.com/pages/platform/functions/examples/cors-headers/

// Respond to OPTIONS method
export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Max-Age": "86400",
    },
  });
};

// Set CORS to all responses
export const onRequest = async (context) => {
  try {
    const response = await context.next();
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Max-Age", "86400");
    return response;
  } catch (err) {
    return new Response(`${err.message}\n${err.stack}`, { status: 500 });
  }
};
