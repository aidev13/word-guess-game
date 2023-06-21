// vars

// select dom elements
  var startButton = document.querySelector('.start-button') 
  var resetButton = document.querySelector(".reset-button") 
  var timerElement = document.querySelector(".timer") 
  var winsElement = document.querySelector(".win") 
  var lossElement = document.querySelector(".lose")

  var words = ["bacon", "dogs", "people", "hello world", "javascript"]
  var userGuesses = []
  var answer

  function startRound() {
    console.log("start round")
    // start timer
    // pick a random word
    // set word-blanks to have _'s
  }

  function onKeydown(event) {
    // check if letter pressed is in the answer string
      // if yes
        // reveal letter in word-blanks
  }

  function tick() {
    // check if userGuesses has all letters that are in answer string
      // if has guess all letters
        // end round
        // increment wins
        // display "you won!"
      // else
        // is our timer count at 0?
          // if yes
            // diplay "lost round"
            // increment losses
          // else
            // decrement timer count
  }

  // Event Listeners
    startButton.addEventListener("click", startRound)
    // reset
    // keydown - onKeydown