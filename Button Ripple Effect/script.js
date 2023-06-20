const button = document.querySelector("button");
button.addEventListener("click", e => {
    console.log("check");
    const x = e.clientX;
    const y = e.clientY;
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    const circle = document.createElement("span");
    circle.classList.add ("circle");
    document.append("circle");
    setTimeout(() => circle.remove(), 500);




});