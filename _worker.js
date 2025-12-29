export default {
  fetch() {
    return new Response("<h1>Hello from Worker!</h1>", {
      headers: { "content-type": "text/html;charset=UTF-8" }
    });
  }
}
