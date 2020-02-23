const ball = document.querySelector(".ball");
const btn = document.querySelector(".btn-action");
const spring = document.querySelector(".spring");
const fill = document.querySelector(".fill");

console.log(ball, btn, spring, fill);

const stretchSpring = () => {
    console.log("naciągamy");
    fill.style.animationPlayState = "running";
    spring.syle.animationPlayState = "running";
    btn.textContent = "Puść sprężynę";
};

const releaseSpring = () => {
    console.log("puszczamy");
};

const resetAnimation = () => {
    console.log("reset animacji");
};

btn.addEventListener("mousedown", stretchSpring);
btn.addEventListener("mouseup", releaseSpring);
btn.addEventListener("touchstart", stretchSpring);
btn.addEventListener("touchend", releaseSpring);
