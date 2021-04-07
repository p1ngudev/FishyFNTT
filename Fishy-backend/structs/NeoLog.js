module.exports = {
  Log(data) {
    console.log(`[\x1b[35;1mFishyFNv2\x1b[0m]: ${data}\x1b[0m`)
  },
  Error(data) {
    console.log(`[\x1b[31mFishyError\x1b[0m]: ${data}\x1b[0m`)
  }
}