var animationBox = document.querySelector(".animation-box");
animationBox.addEventListener("mouseover", function() {
    animationBox.style.animation = "move 2s infinite reverse";
});
animationBox.addEventListener("mouseout", function() {
    animationBox.style.animation = "move 2s infinite";
});
