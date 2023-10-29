function checkbox(image) {
    if (image.getAttribute('src') === "/images/square-check-regular") {
        image.src = "/images/square-check-solid";
    } else {
        image.src = "/images/square-check-regular";
    }
}

