require("dotenv").config({ path: __dirname + "/.env" })
const { questions } = require("./data/questions.json")
const fs = require("fs")
const sendTweet = require("./lib/tweetApi2")

const init = async () => {
  let currentIndex = 0
  try {
    const data = fs.readFileSync("./data/cache.json")
    currentIndex = JSON.parse(data).index
  } catch (e) {
    console.error("Current question index not found, defaulting to 0.")
  }

  const nextQuestion = questions[currentIndex]
  await sendTweet(nextQuestion)

  // Cache index
  currentIndex = (currentIndex + 1) % questions.length
  fs.writeFileSync("./data/cache.json", JSON.stringify({ index: currentIndex }))
}

init()
