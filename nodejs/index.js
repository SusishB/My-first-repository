const http= require("http")

const server = http.createServer((req, res)=>{
    console.log("request");
res.end("hello,World")
})
server.listen(8080, () => console.log("started"));
