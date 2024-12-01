let reviewCount = document.querySelector("#reviewCount");
let reviewActive = document.querySelectorAll(".reviewActive");

reviewCount.innerHTML = `${reviewActive.length}`;

for (let i = 0; i < 5; i++) {
    i += 3;
    reviewActive[i].style.marginRight = "0px";
}