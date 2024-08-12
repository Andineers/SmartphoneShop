function changeColor(imgId, color) {
    const img = document.getElementById(imgId);
    img.src = `iphone-${color}.png`; // Make sure you have different images for each color
}
