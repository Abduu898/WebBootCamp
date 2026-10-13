const box = document.querySelector("footer div");

box.addEventListener("click", function () {
    let name = "";

    while (name === "" || name === null) {
        name = prompt("What's your name ?");
    }

    const ok = confirm("Are you sure that " + name + " is your name ?");

    if (ok) {
        alert("Hello " + name + " !");
        box.textContent = "Hello " + name + " !";
    }
});