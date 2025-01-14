import { Hono } from "hono";

const Route = new Hono();

Route.post("signup",async (c) => {

})
Route.post("signin", (c) => {
    return c.text("hello")
})

Route.get("/blog/:id", (c) => {
    const id = c.req.param('id')
    console.log(id);
})

Route.put("blog", (c) => {
    console.log("hello")
})

Route.post("blog", (c) => {

})