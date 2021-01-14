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


<!-- <button onclick="sendEvent()">FeedViewed.postMessage</button>
<button onclick="sendEventFeedClicked()">FeedClicked.postMessage</button>
<button onclick="sendEventFeedSearch()">FeedSearch.postMessage</button>
<button onclick="sendEventScreenTime()">ScreenTime.postMessage</button>
<button onclick="sendEventSearched()">Searched.postMessage</button>
<button onclick="sendEventLeagueViewed()">LeagueViewed.postMessage</button> -->


</body>

<script>
  ChillPay.postMessage("ChillPay");
    // function sendEvent(){
    //     FeedViewed.postMessage("FeedViewed");
    // }

    // function sendEventFeedClicked(){
    //   FeedClicked.postMessage("FeedClicked");
    // }

    // function sendEventFeedSearch(){
    //   console.log("sendEventFeedSearch2222")
    //   FeedSearch.postMessage("");
    // }

    // function sendEventScreenTime(){
    //   ScreenTime.postMessage("ScreenTime");
    // }

    // function sendEventSearched(){
    //   Searched.postMessage("Searched");
    // }

    // function sendEventLeagueViewed(){
    //   LeagueViewed.postMessage("LeagueViewed");
    // }

</script>

</html>
  
  `)
  console.log("call back")

})

app.listen(process.env.PORT || 3000, () => {
  console.log('Start server at port 3000.')
})
