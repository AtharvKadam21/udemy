import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const d = new Date();
    const day = d.getDay();
    
    if (day == 6 || day == 0){
        res.render("index.ejs",{
            dayType: "a weekend",
            advice: "enjoy",
        })
        }
    else{
        res.render("index.ejs",{
            dayType: "a weekday",
            advice: "time to work",
        })
    }
    }
)


app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
