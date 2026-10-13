function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const parts = cookies[i].split("=");
        if (parts[0] === name) {
            return parts[1];
        }
    }
    return null;
}
function setCookie(name, value, days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}
const firstBox = document.querySelector("footer div");
const link = firstBox.querySelector("a");

function showCookieBox() {
    // Masquer la 1re boite
    firstBox.style.display = "none";
    // Créer la 2e boite
    const secondBox = document.createElement("div");
    secondBox.id = "cookie-box";

    const button = document.createElement("button");
    button.textContent = "Delete the cookie";

    button.addEventListener("click", function () {
        deleteCookie("acceptsCookies");
        secondBox.remove();
        firstBox.style.display = "block";
    });

    secondBox.appendChild(button);

    // Inserer la 2e boite apres la 1re
    firstBox.parentNode.appendChild(secondBox);
}

if (getCookie("acceptsCookies") === "true") {
    showCookieBox();
}
// --- Au clic sur le lien ---
link.addEventListener("click", function (event) {
    event.preventDefault();
    setCookie("acceptsCookies", "true", 1);
    showCookieBox();
});