function menuSelect() {

  const musicButton = document.querySelector("#button-music")
  const videoButton = document.querySelector("#button-video")
  const picsButton = document.querySelector("#button-pics")
  const showsButton = document.querySelector("#button-shows")

  const contentBox = document.querySelectorAll(".js-content-box")

  contentBox[1].style.display = 'grid'

  musicButton.addEventListener("click", function () {
    contentBox[1].style.display = 'none'
    contentBox[0].style.display = 'grid'
  })

  videoButton.addEventListener("click", function () {
    contentBox[0].style.display = 'none'
    contentBox[1].style.display = 'grid'
  })

}

menuSelect()


function musicSlider() {

  let musicCards = document.querySelectorAll(".js-music-card")
  const leftArrow = document.querySelector("#arrowleft-music")
  const rightArrow = document.querySelector("#arrowright-music")

  let i = 0;
  musicCards[i].style.display = 'flex'


  leftArrow.addEventListener("click", function () {
    if (i >= 1) {
      musicCards[i].style.display = 'none';
      i--;
      musicCards[i].style.display = 'flex';
    }
    else {
      musicCards[i].style.display = 'none';
      i += (musicCards.length - 1);
      musicCards[i].style.display = 'flex';
    }
  })

  rightArrow.addEventListener("click", function () {
    if (i < (musicCards.length - 1)) {
      musicCards[i].style.display = 'none';
      i++;
      musicCards[i].style.display = 'flex';
    }
    else {
      musicCards[i].style.display = 'none';
      i -= (musicCards.length - 1);
      musicCards[i].style.display = 'flex';
    }
  })

}

musicSlider()

function videoSlider() {

  let videoCards = document.querySelectorAll(".js-video-card")
  const leftArrow = document.querySelector("#arrowleft-video")
  const rightArrow = document.querySelector("#arrowright-video")

  let i = 0;
  videoCards[i].style.display = 'flex'


  leftArrow.addEventListener("click", function () {
    if (i >= 1) {
      videoCards[i].style.display = 'none';
      i--;
      videoCards[i].style.display = 'initial';
    }
    else {
      videoCards[i].style.display = 'none';
      i += (videoCards.length - 1);
      videoCards[i].style.display = 'initial';
    }
  })

  rightArrow.addEventListener("click", function () {
    if (i < (videoCards.length - 1)) {
      videoCards[i].style.display = 'none';
      i++;
      videoCards[i].style.display = 'initial';
    }
    else {
      videoCards[i].style.display = 'none';
      i -= (musicCards.length - 1);
      videoCards[i].style.display = 'initial';
    }
  })

}

videoSlider()



