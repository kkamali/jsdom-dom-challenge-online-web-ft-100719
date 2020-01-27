document.addEventListener("DOMContentLoaded", function () {
  let counter = document.getElementById('counter')
  let paused = false
  let seconds = setInterval(function () { counter.innerHTML = parseInt(counter.innerHTML) + 1; }, 1000);

  let likes = document.getElementsByClassName('likes')[0]

  const minusButton = document.getElementById('minus')
  const plusButton = document.getElementById('plus')
  const heartButton = document.getElementById('heart')
  const pauseButton = document.getElementById('pause')
  const commentForm = document.getElementById('comment-form')
  const comments = document.getElementById('list')

  minusButton.addEventListener("click", function () {
    counter.innerHTML = parseInt(counter.innerHTML) - 1
  })

  plusButton.addEventListener("click", function () {
    counter.innerHTML = parseInt(counter.innerHTML) + 1
  })

  heartButton.addEventListener("click", function () {
    const number = counter.innerHTML
    if (document.getElementById(number)) {
      like = document.getElementById(number)
      num_likes = parseInt(like.getAttribute("likes")) + 1
      like.setAttribute("likes", num_likes)
      like.innerHTML = `${number} has ${num_likes} likes`
    } else {
      const newLike = document.createElement('li')
      newLike.setAttribute("id", number)
      newLike.setAttribute("likes", 1)
      newLike.innerHTML = `${number} has 1 like`
      likes.appendChild(newLike)
    }
  })

  pauseButton.addEventListener("click", function () {
    paused = !paused
    let buttons = document.getElementsByTagName('button')
    if (paused) {
      clearInterval(seconds)
      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id != "pause") {
          buttons[i].disabled = true
        }
      }
    } else {
      seconds = setInterval(function () { counter.innerHTML = parseInt(counter.innerHTML) + 1; }, 1000);
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false
      }
    }
  })

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let newComment = document.createElement('p')
    newComment.innerHTML = document.getElementById('comment-input').value
    e.target.reset()
    comments.appendChild(newComment)
  })
})
