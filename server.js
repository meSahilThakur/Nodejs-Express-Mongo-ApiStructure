require("dotenv").config();

const app = require("./app")

const port = 3300;

app.listen(port, ()=>{
    console.log(`Application listening on port ${port}`)
})