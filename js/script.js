document.addEventListener("DOMContentLoaded", function() {
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        product.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.2)";
        });

        product.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
