window.addEventListener('scroll', () => {
  let circleOne = document.getElementById('circleOne');
  let rect1 = circleOne.getBoundingClientRect();
  let winH = window.innerHeight;
  let y1 = rect1.top;
  let circle1 = document.getElementById('circle1');
  if (y1 <= 9 * winH / 10) {
    circle1.classList.add('animate1');
    let number = document.getElementById("number");
    let counter = 0;
    setInterval(() => {
        if (counter == 55) {
          clearInterval();
        } else {
          counter += 1;
          number.innerHTML = counter + "%";
        }
      },
      25);
  } else {
    circle1.classList.remove('animate1');
  };
});

window.addEventListener('scroll', () => {
  let circleTwo = document.getElementById('circleTwo');
  let rect2 = circleTwo.getBoundingClientRect();
  let winH = window.innerHeight;
  let y2 = rect2.top;
  let circle2 = document.getElementById('circle2');
  if (y2 <= 9 * winH / 10) {
    circle2.classList.add('animate2');
    let number1 = document.getElementById("number1");
    let counter1 = 0;
    setInterval(() => {
        if (counter1 == 33) {
          clearInterval();
        } else {
          counter1 += 1;
          number1.innerHTML = counter1 + "%";
        }
      },
      25);
  } else {
    circle2.classList.remove('animate2');
  };
});

window.addEventListener('scroll', () => {
  let circleThree = document.getElementById('circleThree');
  let rect3 = circleThree.getBoundingClientRect();
  let winH = window.innerHeight;
  let y3 = rect3.top;
  let circle3 = document.getElementById('circle3');
  if (y3 <= 9 * winH / 10) {
    circle3.classList.add('animate3');
    let number2 = document.getElementById("number2");
    let counter2 = 0;
    setInterval(() => {
        if (counter2 == 11) {
          clearInterval();
        } else {
          counter2 += 1;
          number2.innerHTML = counter2 + "%";
        }
      },
      25);
  } else {
    circle3.classList.remove('animate3');
  };
});
audio.play();
let audioBtn = document.getElementById('audioBtn');
let audio = document.getElementById('sonata');
audioBtn.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    audioBtn.style.border = "1px solid darkorchid";
  } else {
    audio.muted = true;
    audioBtn.style.border = "none";
  };
});