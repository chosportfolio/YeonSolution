let header = document.querySelector("header");
let mainNav = document.querySelector("#mainNav");
let tab = document.querySelector("#tab");
let nav = document.querySelector("nav");
let navClose = document.querySelector("#nav_Close");
let article = document.querySelector("article");
let mainNavList = document.querySelectorAll(".mainNavList");
let subNav = document.querySelectorAll(".subNav");
let clickCount = [0, 0, 0, 0];

window.addEventListener('resize', function() {
    if (window.innerWidth < 1240) {
        window.resizeTo(1240, window.innerHeight);
    }
});

// 초기 로딩 시에도 체크하여 크기 조정
if (window.innerWidth < 1240) {
    window.resizeTo(1240, window.innerHeight);
}


function scroll() {
    const scrollY = document.documentElement.scrollTop;
    if (scrollY > 1) {
        header.style.backgroundColor = "rgba(255, 255, 255, 1)";
    } else {
        header.style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
}
document.addEventListener("scroll", () => {
    scroll();
});

function handleResize() {
    const currentWidth = window.innerWidth;

    if (currentWidth <= 1240) {
        header.style.height = "60px";
        for (let j = 0; j < subNav.length; j++) {
            subNav[j].style.display="none";
        }
        nav.style.left = "100vw";
        tab.addEventListener("click", () => {
            nav.style.left = "0";
        });
        navClose.addEventListener("click", () => {
            nav.style.left = "100vw";
        });
        for (let i = 0; i < mainNavList.length; i++) {
            mainNavList[i].addEventListener("click", ()=> {
                clickCount[i] += 1;
                for (let j = 0; j < subNav.length; j++) {
                    subNav[j].style.display="none";
                }
                if (clickCount[i] % 2 == 0) {
                    subNav[i].style.display="none";
                } else {
                    subNav[i].style.display="block";
                }
            })
        }
    } else {
        header.style.height = "100px";
        for (let j = 0; j < subNav.length; j++) {
            subNav[j].style.display="block";
        }
        nav.style.left = "50%";
        mainNav.addEventListener("mouseover", () => {
            header.style.height = "420px";
            header.style.backgroundColor = "#fff";
        });
        mainNav.addEventListener("mouseout", () => {
            header.style.height = "100px";
            scroll();
        });
    }
}

handleResize();

window.addEventListener("resize", handleResize);
mainNav.addEventListener("mouseover", () => {
    const currentWidth = window.innerWidth;
    if (currentWidth <= 1240) {
        header.style.height = "60px";
    } else {
        header.style.height = "420px";
    }
    header.style.backgroundColor = "#fff";
});
mainNav.addEventListener("mouseout", () => {
    const currentWidth = window.innerWidth;
    if (currentWidth <= 1240) {
        header.style.height = "60px";
    } else {
        header.style.height = "100px";
    }
    scroll();
});

article.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
