let interfaceContainer = document.querySelector(".interface-container")
let interface = document.querySelector(".interface")

let slideUp = (target, duration = 500) => {

  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    //alert("!");
  }, duration);

  interfaceContainer.style.display = 'flex';
  interfaceContainer.style.margin = '0 auto';
  interface.style.margin = 'auto';
  interface.style.marginTop = '100px';

}

let slideDown = (target, duration = 500) => {

  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none')
    display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.width = '100%';
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);

  interfaceContainer.style.display = 'block';
  interfaceContainer.style.margin = '0 auto';
  interface.style.margin = 'auto';
  interface.style.marginTop = '100px';

}
var slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
}

document.getElementById("button-music").addEventListener('click', function () {
  slideToggle(document.getElementById("mobile-music-box"), 200);
});
document.getElementById("button-video").addEventListener('click', function () {
  slideToggle(document.getElementById("mobile-video-box"), 200);
});
document.getElementById("button-pics").addEventListener('click', function () {
  slideToggle(document.getElementById("mobile-pics-box"), 200);
});
document.getElementById("button-shows").addEventListener('click', function () {
  slideToggle(document.getElementById("mobile-shows-box"), 200);
});

function musicMobileSlider() {

  let musicCards = document.querySelectorAll(".js-music-card-mobile")
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

musicMobileSlider()


function picsMobileSlider() {

  let pics = document.querySelectorAll(".js-pics-mobile")
  const leftArrow = document.querySelector("#arrowleft-pics")
  const rightArrow = document.querySelector("#arrowright-pics")

  let i = 0;
  pics[i].style.display = 'flex'


  leftArrow.addEventListener("click", function () {
    if (i >= 1) {
      pics[i].style.display = 'none';
      i--;
      pics[i].style.display = 'flex';
    }
    else {
      pics[i].style.display = 'none';
      i += (pics.length - 1);
      pics[i].style.display = 'flex';
    }
  })

  rightArrow.addEventListener("click", function () {
    if (i < (pics.length - 1)) {
      pics[i].style.display = 'none';
      i++;
      pics[i].style.display = 'flex';
    }
    else {
      pics[i].style.display = 'none';
      i -= (pics.length - 1);
      pics[i].style.display = 'flex';
    }
  })

}


function picsTouchSlider() {


  let pics = document.querySelectorAll(".js-pics-mobile")

  let i = 0;
  pics[i].style.display = 'flex'


  let touchstartX = 0
  let touchendX = 0

  const slider = document.querySelector('.js-pics-mobile-container')

  function handleGesture() {
    if (touchendX < touchstartX) {
      if (i >= 1) {
        pics[i].style.display = 'none';
        i--;
        pics[i].style.display = 'flex';
      }
      else {
        pics[i].style.display = 'none';
        i += (pics.length - 1);
        pics[i].style.display = 'flex';
      }
    }

    if (touchendX > touchstartX) {
      if (i < (pics.length - 1)) {
        pics[i].style.display = 'none';
        i++;
        pics[i].style.display = 'flex';
      }
      else {
        pics[i].style.display = 'none';
        i -= (pics.length - 1);
        pics[i].style.display = 'flex';
      }
    }
  }

  slider.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
  })

  slider.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    handleGesture()
  })

}

picsTouchSlider();