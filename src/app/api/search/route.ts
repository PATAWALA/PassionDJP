export async function GET(request: Request) {
  // Logique de recherche à implémenter plus tard
  return new Response(JSON.stringify({ results: [] }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}