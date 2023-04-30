const title = document.getElementById("title");
const key = "pearda";
const pearda = localStorage.getItem(key);

if (pearda) {
    title.textContent = pearda;
} else {
    const pearda = prompt("Nee inda nona vilakum?")
    localStorage.setItem(key, pearda);
    title.textContent = pearda;
}

const mata = document.getElementById("mata");

mata.onclick = () => {
    localStorage.clear();
};