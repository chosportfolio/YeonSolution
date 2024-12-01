let width = 0;
let left = 0;
let slideCount = 0;
const slideBtn = document.querySelectorAll(".slideBtn");
const imgslide = document.querySelector("#imgslideWrap");
const slideGroup = document.querySelectorAll(".slideGroup");

if (matchMedia("screen and (max-width: 1920px)").matches) {
    width = 100;
} else {
    width = 1920;
}
window.onresize = function(){
    if (matchMedia("screen and (max-width: 1920px)").matches) {
        width = 100;
    } else {
        width = 1920;
    }
}

// 슬라이드 버튼 클릭했을 때 움직이는 함수
function moveSlide(way) {
    imgslide.style.transitionDuration = `0.4s`;
    if (way == 0) {
        slideCount += 1;
    } else {
        slideCount -= 1;
    }
    if (slideCount == 2) {
        slideCount = -4;
        imgslide.style.transitionDuration = `0s`;
    } else if (slideCount == -5) {
        slideCount = 1;
        imgslide.style.transitionDuration = `0s`;
    }
    left = (slideCount * width)-width;
    if (matchMedia("screen and (max-width: 1920px)").matches) {
        imgslide.style.left = `${left}vw`;
    } else {
        imgslide.style.left = `${left}px`;
    }
}

// 슬라이드 애니메이션
function slideAnimation() {
    imgslide.style.transitionDuration = `0.4s`;
    slideCount -= 1;
    if (slideCount == -5) {
        slideCount = 1;
        imgslide.style.transitionDuration = `0s`;
    }
    left = (slideCount * width)-width;
    if (matchMedia("screen and (max-width: 1920px)").matches) {
        imgslide.style.left = `${left}vw`;
    } else {
        imgslide.style.left = `${left}px`;
    }
}

let animation = setInterval(slideAnimation, 4000);

let lastClickTime = 0;
let direction = 0;
let aniRunning = false;

// 슬라이드 더블 클릭 방지 함수
function banDoubleClick() {
    // 현재 시간
    const currentTime = new Date().getTime();
    // 시간 차이
    const timeDiff = currentTime - lastClickTime;

    // 0.4초 후에 클릭한 경우
    if (timeDiff >= 400) {
        // 마지막 클릭 시간을 현재시간으로 변경
        lastClickTime = currentTime;
        moveSlide(direction);
        clearInterval(animation);
        if (!aniRunning) {
            aniRunning = true;
            setTimeout(() => {
                animation = setInterval(slideAnimation, 4000);
                aniRunning = false;
            }, 4000);
        }
    }
}

// 슬라이드 좌/우 이벤트 클릭
slideBtn[0].addEventListener("click", () => {
    direction = 0;
    banDoubleClick();
});
slideBtn[1].addEventListener("click", ()=> {
    direction = 1;
    banDoubleClick();
})

