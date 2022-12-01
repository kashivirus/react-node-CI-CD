const express = require("express")
const app = express()
var cors = require('cors')

let port = 5000




app.use(cors())

// app.get("/names", (req, res) => {
//     res.send("Samphio")
// })
app.get("/", (req, res) => {
    res.send("New World Order")
})



app.listen(5000, () => console.log(`server is listening to port ${port}`))