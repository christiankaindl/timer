let intervalId
let clockElem = document.getElementById('clock')
let currentTime = 0

function startTimer (event) {
  resetClock()

  intervalId = window.setInterval(updateClock, 1000)
}

function updateClock () {
  let time = currentTime
  currentTime--

  if (time === 0) {
    window.clearInterval(intervalId)
  }

  let newTime = toMMSS(time)
  clockElem.textContent = newTime
}

function resetClock () {
  if (intervalId) {
    window.clearInterval(intervalId)
    intervalId = null
  }
  currentTime = 120
  updateClock()
}

let countdownButton = document.getElementById('countdown-button')
let countdownReset = document.getElementById('countdown-reset')
countdownButton.addEventListener('click', startTimer)
countdownReset.addEventListener('click', resetClock)

function toMMSS (seconds) {
  var sec_num = seconds
  var hours = Math.floor(sec_num / 3600)
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60)
  var seconds = sec_num - (hours * 3600) - (minutes * 60)

  if (hours < 10) { hours = '0' + hours }
  if (minutes < 10) { minutes = '0' + minutes }
  if (seconds < 10) { seconds = '0' + seconds }
  return minutes + ':' + seconds
}
