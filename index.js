require("dotenv").config({ path: __dirname + "/.env" })
const { twitterClient } = require("./twitterClient.js")

const sendTweet = async () => {
  try {
    await twitterClient.v2.tweet("Hello world!")
  } catch (e) {
    console.log(e)
  }
}

sendTweet()
