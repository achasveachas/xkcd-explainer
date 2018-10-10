const explainURL = "https://www.explainxkcd.com" + window.location.pathname
const newButton = document.createElement("li")
buttonContent = document.createElement("a")
buttonContent.href = explainURL
buttonContent.innerHTML = "Huh?"
newButton.appendChild(buttonContent)

// The desktop version has 2 navbars with class .comicNav and the mobile version has one navbar with the id #navButtons
let navbars = document.getElementsByClassName("comicNav");
if (navbars.length === 0) {
    navbars = [document.getElementById("navButtons")];
}

for (let i = 0; i < navbars.length; i++) {
    const navButtons = Array.from(navbars[i].children);
    const randomButton = navButtons.find((li => li.firstChild.textContent === "Random" || li.firstChild.textContent === "?"))
    navbars[i].insertBefore(newButton.cloneNode(true), randomButton.nextElementSibling);
}