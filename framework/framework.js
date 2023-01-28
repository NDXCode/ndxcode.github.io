window.onload = function() {
const elements = document.querySelectorAll("[class*='col-custom-']");
console.log(elements);
for (const element of elements) {
const classList = element.classList;
for (const className of classList) {
    if (className.startsWith("col-custom-")) {
        element.style.color = className.substring(11);
    }
}
}

const backgrounds = document.querySelectorAll("[class*='bg-custom-']");
console.log(backgrounds);
for (const elementBg of backgrounds) {
const classList = elementBg.classList;
for (const className of classList) {
    if (className.startsWith("bg-custom-")) {
        elementBg.style.background = className.substring(10);
    }
}
}
}