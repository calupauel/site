document.querySelectorAll('.tem-dropdown').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.dropdown').style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
        item.querySelector('.dropdown').style.display = 'none';
    });
});