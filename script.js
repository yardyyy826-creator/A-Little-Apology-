function showMessage() {
    document.getElementById("message").style.display = "block";
}
function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("floating-heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 500);
function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}
function createSparkle() {
    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = "25px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "1000";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

function showSurprise() {
    document.getElementById("surprise").style.display = "block";

    for (let i = 0; i < 20; i++) {
        setTimeout(createSparkle, i * 100);
    }
}