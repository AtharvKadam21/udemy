import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("ello");
});

app.get("/contact", (req, res) => {
    console.log(req.rawHeaders);
    res.send("contace");
});
app.get("/about", (req, res) => {
    console.log(req.rawHeaders);
    res.send("about");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});