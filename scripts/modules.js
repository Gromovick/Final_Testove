document.querySelectorAll('.modules__card').forEach(card => {
    card.addEventListener('click', () => {
        const style = window.getComputedStyle(card)
        const isOpen = style.getPropertyValue('--open') === '1'
        if (isOpen) {
            card.classList.toggle('modules__card--active');
        }
    });
});


