const express = require('express');

const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/', (req, res) => {


  // res.json({ requestBody: req.body })
  res.write(`
  
  <!DOCTYPE html>
<html>

<head>

</head>

<body>
  ${res.json({ requestBody: req.body })}
</body>

<script>
  ChillPay.postMessage("ChillPay");
</script>

</html>
  
  `)
  res.end()
  console.log("call back")

})

app.listen(process.env.PORT || 3000, () => {
  console.log('Start server at port 3000.')
})
