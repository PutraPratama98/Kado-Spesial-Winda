/* script.js */
document.getElementById("openGiftButton").addEventListener("click", function() {
    this.style.display = "none";
    document.getElementById("giftImage").style.display = "none";
    document.getElementById("giftContent").style.display = "block";
    document.getElementById("viewJourneyButton").style.display = "block";
    typeMessage("typingEffect", "🌸 Selamat Ulang Tahun, Winda Yani Hutasoit! 🌸", 50);
 typeMessage("typingEffect", "Cintaku, di hari istimewa ini, aku ingin mengungkapkan betapa berharganya dirimu dalam hidupku. ", 50);
 typeMessage("typingEffect", "Kamu adalah anugerah terindah yang pernah Tuhan berikan kepadaku. Setiap tawa, setiap cerita, setiap perjuangan yang kita lalui bersama semakin meyakinkanku bahwa kamu adalah seseorang yang pantas aku perjuangkan, apapun yang terjadi.", 50);
 typeMessage("typingEffect", "Aku bersyukur atas setiap momen yang telah kita lewati, dari pertama kali kita bertemu hingga kini. Bersamamu, aku belajar arti ketulusan, kesabaran, dan cinta yang sesungguhnya. Kamu bukan hanya cinta dalam hidupku, tapi juga sahabat terbaikku, pendengar setiaku, dan tempatku kembali saat lelah melanda.", 50);
 typeMessage("typingEffect", "Di hari ulang tahunmu ini, aku berdoa agar setiap langkahmu selalu diberkati, setiap impianmu bisa terwujud, dan kebahagiaan selalu menyertaimu. Jangan pernah ragu akan cintaku, karena aku akan selalu ada di sampingmu, mendukungmu, mencintaimu, dan memastikan bahwa kamu selalu tersenyum bahagia.", 50);
 typeMessage("typingEffect", "Selamat ulang tahun, sayangku! 🎂🎉💖", 50);
 typeMessage("typingEffect", "Semoga kebahagiaan selalu bersamamu, seperti kamu yang selalu membawa kebahagiaan dalam hidupku. Aku mencintaimu, hari ini, esok, dan selamanya. 💞", 50);
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
