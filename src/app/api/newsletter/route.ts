export async function POST(request: Request) {
  // Logique d'abonnement à implémenter plus tard
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}