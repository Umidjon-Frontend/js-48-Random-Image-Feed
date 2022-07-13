document.addEventListener("DOMContentLoaded", () => {
    const imgWrapper = document.querySelector(".img-wrapper");
    const urlImg = `https://source.unsplash.com/random/`;

    let count = 10;

    for (let i = 0; i < count * 3; i++) {
        const img = document.createElement("img");
        img.src = `${urlImg}${getRandomUrl()}`;

        imgWrapper.appendChild(img);
    }

    function getRandomUrl() {
        return `${getRandomNumber()}x${getRandomNumber()}`;
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * 10) + 300;
    }
});
