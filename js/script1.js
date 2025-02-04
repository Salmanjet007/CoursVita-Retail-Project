document.addEventListener("DOMContentLoaded", function() {
    let services = document.querySelectorAll(".service");

    services.forEach(service => {
        service.addEventListener("mouseover", function() {
            service.style.transform = "scale(1.1)";
            service.style.backgroundColor = "#ffcccc";
        });

        service.addEventListener("mouseout", function() {
            service.style.transform = "scale(1)";
            service.style.backgroundColor = "#fff";
        });
    });
});
