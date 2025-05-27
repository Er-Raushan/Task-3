let score = 0;
const answered = {};

function checkAnswer(qNum, correct, btn) {
    if (answered[qNum]) return;

    const result = document.getElementById("result" + qNum);
    const buttons = btn.parentElement.querySelectorAll("button");

    buttons.forEach(b => b.disabled = true);

    if (btn.textContent.trim().toLowerCase().includes(correct.toLowerCase())) {
        result.textContent = "✅ Correct!";
        result.style.color = "green";
        score++;
    } else {
        result.textContent = "❌ Incorrect!";
        result.style.color = "red";
    }

    answered[qNum] = true;
    document.getElementById("score").textContent = score;
}

function getJoke() {
    const jokeContainer = document.getElementById("joke");
    jokeContainer.innerHTML = "<span class='loader'>Loading joke...</span>";

    fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
    })
        .then(res => res.json())
        .then(data => {
            jokeContainer.textContent = `"${data.joke}"`;
        })
        .catch(() => {
            jokeContainer.textContent = "Failed to fetch a joke. Try again!";
        });
}