const express = require('express');

const app = express()

app.post('/', (req, res) => {
  
    res.send("results")
  console.log("call back")

})

app.listen(process.env.PORT || 3000, () => {
  console.log('Start server at port 3000.')
})
