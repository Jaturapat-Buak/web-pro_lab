function changeimg() {
    for (let i = 1; i <= 6; i++) {
        const randomNum = Math.floor(Math.random() * 10);
        const img = document.getElementById("img" + i);

        img.src = `http://webdev.it.kmitl.ac.th/labdocs/lab3/images/${randomNum}.png`;
    }
}
