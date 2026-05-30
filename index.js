const colors = [
    "#0095f8",
    "#02ffab",
    "#ff55d1",
    "#ffb310"
];

function fireworkBurst() {

    const container = document.getElementById("confetti-container");

    for (let i = 0; i < 80; i++) {

        const particle = document.createElement("div");

        particle.classList.add("confetti");

        particle.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        particle.style.left = "50%";
        particle.style.top = "50%";

        const angle = Math.random() * 360;
        const distance = Math.random() * 400 + 100;

        particle.animate(
            [
                {
                    transform: "translate(0,0)"
                },
                {
                    transform:
                        `translate(${Math.cos(angle * Math.PI / 180) * distance}px,
                                   ${Math.sin(angle * Math.PI / 180) * distance}px)
                        rotate(720deg)`
                }
            ],
            {
                duration: 2500,
                easing: "ease-out"
            }
        );

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2500);
    }
}

// Launch every 2 seconds
setInterval(fireworkBurst, 2000);

// Initial burst
fireworkBurst();