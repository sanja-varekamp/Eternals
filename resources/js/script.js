const timer = document.getElementById('timer');
const start_btn = document.getElementById('btn');

start_btn.addEventListener('click', countdown);

const totalMinutes = 5;
let time = totalMinutes * 60;

function countdown() {

    start = setInterval(countBack, 1000);

    function countBack() {

        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        timer.innerHTML = `${minutes}:${seconds}`;
        time--;

        if (time < 0) {
            clearInterval(start);
            timer.innerHTML = `Well done.`;
        }

        start_btn.style.display = "none";
    }

}

