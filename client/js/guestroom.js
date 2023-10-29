function checkbox(image) {
    if (image.getAttribute('src') === "images/square-check-regular.svg") {
        image.src = "images/square-check-solid.svg";
    } else {
        image.src = "images/square-check-regular.svg";
    }
}