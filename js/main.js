document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    const itemDropdonwBtns = document.querySelectorAll('.js-item-dropdown-btn');

    itemDropdonwBtns.forEach( (btn) => {
        btn.addEventListener('click', (e) => {
            btn.classList.toggle('js-dropdown-btn--active');

            const select = e.target.closest('.b-select');

            if(!select) return;

            select.querySelector('.b-select__close').addEventListener('click', () => {
                btn.classList.remove('js-dropdown-btn--active');
            })
        })
    });

})
