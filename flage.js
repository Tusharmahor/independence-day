// =============================
// COUNTDOWN
// =============================

let targetDate = new Date("August 15, 2026 00:00:00").getTime();


let countdown = setInterval(function () {

    let now = new Date().getTime();

    let difference = targetDate - now;


    if (difference <= 0) {

        clearInterval(countdown);

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;
    }


    let days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    let hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    let minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    let seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}, 1000);



// =============================
// CONFETTI
// =============================

let button =
    document.getElementById("celebrateBtn");


button.addEventListener("click", function () {

    createConfetti();

    document.getElementById("message").innerText =
        "Jai Hind! Happy Independence Day to all indians,from Me. ";

});



function createConfetti() {

    let container =
        document.getElementById("confetti");


    // Purane confetti remove
    container.innerHTML = "";


    for (let i = 0; i < 120; i++) {

        let piece =
            document.createElement("div");


        piece.classList.add("confetti-piece");


        // Random position
        piece.style.left =
            Math.random() * 100 + "%";


        // Tricolor
        let colors = [
            "#ff9933",
            "#ffffff",
            "#138808"
        ];


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        // Random size
        piece.style.width =
            Math.random() * 8 + 6 + "px";


        piece.style.height =
            Math.random() * 12 + 10 + "px";


        // Random speed
        piece.style.animationDuration =
            Math.random() * 2 + 2 + "s";


        // Random delay
        piece.style.animationDelay =
            Math.random() * 0.8 + "s";


        container.appendChild(piece);

    }

}