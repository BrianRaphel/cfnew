export default {
  async fetch(req) {
    const t0 = Date.now();
    // 假设你原来要 fetch 外部 API
    const res = await fetch("https://example.com");   // ← 换成你真实的后台
    const cost = Date.now() - t0;

    // 把耗时返回给浏览器
    return new Response(await res.text(), {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
        "X-Worker-Latency": cost + " ms"
      }
    });
  }
}
