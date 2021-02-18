alert('This webpage is for desktop');

// To add carousel
var slides = document.getElementsByClassName('slide');
var button = document.getElementsByClassName('btn');
var currentIndex = 0;
var len = slides.length;

showSlide(currentIndex);

button[0].addEventListener('click', function() {
  removeSlide(currentIndex);
  currentIndex = 0;
  showSlide(0);
});

button[1].addEventListener('click', function() {
  removeSlide(currentIndex);
  currentIndex = 1;
  showSlide(1);
});

button[2].addEventListener('click', function() {
  removeSlide(currentIndex);
  currentIndex = 2;
  showSlide(2);
});

button[3].addEventListener('click', function() {
  removeSlide(currentIndex);
  currentIndex = 3;
  showSlide(3);
});

document.getElementsByClassName('next')[0].addEventListener('click', function() {
  display(1);
  // console.log(currentIndex);
});

document.getElementsByClassName('prev')[0].addEventListener('click', function() {
  display(-1);
  // console.log(currentIndex);
});

function showSlide(slideIndex) {
  if (slideIndex > len) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = len - 1;
  }
  slides[slideIndex].style.display = 'block';
  button[currentIndex].classList.add('btn-class');
}

function removeSlide(removeIndex) {
  slides[removeIndex].style.display = 'none';
  button[removeIndex].classList.remove('btn-class')
}

function rangeIndex(n) {
  if (currentIndex >= len - 1 && n == 1) {
    currentIndex = 0;
  } else if (currentIndex <= 0 && n == -1) {
    currentIndex = len - 1;
  } else {
    currentIndex = currentIndex + n;
  }
}

function display(m) {
  removeSlide(currentIndex);
  rangeIndex(m);
  showSlide(currentIndex);
}

function addEvent(ele) {
  ele.addEventListener('click', function() {});
}

//Add controllers to video
var volButton = document.getElementsByClassName('vol');
var toggleButton = document.getElementsByClassName('tog');
var video = document.getElementsByClassName('video1');

toggleButton[0].addEventListener('click', function() {
  if (toggleButton[0].style.display == 'none') {
    toggleButton[0].style.display = 'block';
    video[0].pause();
  } else {
    toggleButton[0].style.display = 'none';
    toggleButton[1].style.display = 'block';
    video[0].play();
  }
});

toggleButton[1].addEventListener('click', function() {
  if (toggleButton[1].style.display == 'none') {
    toggleButton[1].style.display = 'block';
    video[0].play();
  } else {
    toggleButton[1].style.display = 'none';
    toggleButton[0].style.display = 'block';
    video[0].pause();
  }
});

volButton[0].addEventListener('click', function() {
  if (volButton[0].style.display == 'none') {
    volButton[0].style.display = 'block';
    video[0].muted = true;
  } else {
    volButton[0].style.display = 'none';
    volButton[1].style.display = 'block';
    video[0].muted = false;
  }
});

volButton[1].addEventListener('click', function() {
  if (volButton[1].style.display == 'none') {
    volButton[1].style.display = 'block';
    video[0].muted = false;
  } else {
    volButton[1].style.display = 'none';
    volButton[0].style.display = 'block';
    video[0].muted = true;
  }
});
