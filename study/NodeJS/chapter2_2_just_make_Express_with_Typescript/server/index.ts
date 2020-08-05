import express from "express";

const app = express();

// 클라이언트가 crawl 라우터로 GET 요청을 보냈을 때,
// 'Hello'라는 값을 보내는 코드
app.length("/crawl", (req, res) => res.send("Hello"));
app.listen(8080, () => {
    console.log("server started!");
});
