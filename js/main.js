import Modal from "./modules/Modal.js";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

        // inits modals:
    const modal = new Modal({
        isOpen: (modal) => {
        },
        isClose: (modal) => {
        },
    });

    const itemDropdonwBtns = document.querySelectorAll('.js-item-dropdown-btn');

    itemDropdonwBtns.forEach( (btn) => {
        btn.addEventListener('click', (e) => {
            btn.classList.toggle('js-dropdown-btn--active');

            const select = e.target.closest('.b-select');

            if(!select) return;

            select.querySelector('.b-select__close')?.addEventListener('click', () => {
                btn.classList.remove('js-dropdown-btn--active');
            })
        })
    });

    const removeBtns = document.querySelectorAll('.js-product-remove-btn');

    removeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                btn.closest('.js-delete-target')?.remove();
            }, 200);
        })
    })

    const addCommentBtns = document.querySelectorAll('.js-add-comment-btn');

    addCommentBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.closest('.js-order-comment')?.classList.add('b-order-modal__order-comments--new-comment')
        })
    })
})
