/* script.js */
document.getElementById("openGiftButton").addEventListener("click", function() {
    this.style.display = "none";
    document.getElementById("giftImage").style.display = "none";
    document.getElementById("giftContent").style.display = "block";
    document.getElementById("viewJourneyButton").style.display = "block";
    typeMessage("typingEffect", "Selamat ulang tahun, Winda! Ini adalah cerita perjalanan cinta kita. Semoga selalu bahagia!", 50);
});

document.getElementById("viewJourneyButton").addEventListener("click", function() {
    document.getElementById("timeline").style.display = "block";
    document.getElementById("gallery").style.display = "block";
});

document.getElementById("replyButton").addEventListener("click", function() {
    window.location.href = "https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=Halo%20Dimas!";
});

function typeMessage(elementId, message, speed) {
    let i = 0;
    function typing() {
        if (i < message.length) {
            document.getElementById(elementId).innerHTML += message.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animation = "fall 3s linear";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}
setInterval(createHeart, 500);

window.addEventListener("click", function() {
    document.getElementById("backgroundMusic").play();
});
