// JavaScript for hover effects
document.querySelectorAll('.zoom-effect').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.2)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});
