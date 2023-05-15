const fs = require("fs")
const { sendTweet } = require("./lib/tweetApi2")

const init = async () => {
  try {
    const jsonString = fs.readFileSync("./data/questions.json")
    const { questions, index } = JSON.parse(jsonString)
    const tweet = questions[index]
    if (!tweet) {
      throw new Error("No more questions!")
    }
    await sendTweet(tweet)
    fs.writeFileSync(
      "./data/questions.json",
      JSON.stringify({ index: index + 1, questions })
    )
  } catch (e) {
    console.error("Current question index not found, defaulting to 0.")
  }
}

init()
