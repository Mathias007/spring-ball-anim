const ball = document.querySelector(".ball");
const bar = document.querySelector(".bar");
const btn = document.querySelector(".btn-action");
const spring = document.querySelector(".spring");
const fill = document.querySelector(".fill");

const stretchSpring = () => {
    fill.style.animationName = "fill";
    fill.style.animationPlayState = "running";
    spring.style.animationPlayState = "running";
    btn.textContent = "Puść sprężynę";

    // zablokowanie kliknięcia
    btn.removeEventListener("mousedown", stretchSpring);
    btn.removeEventListener("touchstart", stretchSpring);
};

const releaseSpring = () => {
    const fillStyles = getComputedStyle(fill);
    const fillWidth = parseInt(fillStyles.width, 10);
    const barWidth = parseInt(getComputedStyle(bar).width, 10);
    const progressPercent = (fillWidth / barWidth).toFixed(2);

    btn.style.color = "black";
    btn.textContent = `Moc uderzenia to ${(progressPercent * 100).toFixed()}%`;

    fill.style.animationPlayState = "paused";

    document.documentElement.style.setProperty(
        "--power-x",
        `${30 + progressPercent * 50}%`
    );
    ball.style.animation =
        "fly-ball-x 1s 1 forwards 0.15s cubic-bezier(0.17, 0.67, 0.6, 1), fly-ball-y 1s 1 forwards 0.15s linear";

    document.documentElement.style.setProperty(
        "--spring-left",
        getComputedStyle(spring).left
    );
    spring.style.animation = "release-spring 0.2s 1 forwards linear";

    // zablokowanie kliknięcia
    btn.removeEventListener("mouseup", releaseSpring);
    btn.removeEventListener("touchend", releaseSpring);

    ball.addEventListener("animationend", resetAnimation);
};

const resetAnimation = () => {
    ball.removeEventListener("animationend", resetAnimation);

    setTimeout(() => {
        btn.addEventListener("mousedown", stretchSpring);
        btn.addEventListener("mouseup", releaseSpring);
        btn.addEventListener("touchstart", stretchSpring);
        btn.addEventListener("touchend", releaseSpring);

        btn.style.color = "white";
        btn.textContent = "Naciągnij sprężynę";

        spring.style.animation = "";
        ball.style.animation = "";
        fill.style.animationName = "none";
    }, 2000);
};

btn.addEventListener("mousedown", stretchSpring);
btn.addEventListener("mouseup", releaseSpring);
btn.addEventListener("touchstart", stretchSpring);
btn.addEventListener("touchend", releaseSpring);
