const message = document.getElementById("hi");
message.style.display = "none";
message.style.opacity = 0;
message.style.transition = "opacity 1.5s ease";

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        message.style.display = "flex";
        setTimeout(() => {
            message.style.opacity = 1;
        }, 10);
    }, 8500);
});