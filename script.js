const btn = document.getElementById("btn");
const title = document.getElementById("title");

function hello () {
    console.log("Hello");
    title.innerText = "jeycob haz estructuras";
}
btn.addEventListener("click", hello);