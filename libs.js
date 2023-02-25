fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => x(data));

const x = y => {
    console.log(y);
    document.getElementById("advice").innerText = `ADVICE # ${y.slip.id}`;
    document.getElementById("quote").innerText = y.slip.advice;
}