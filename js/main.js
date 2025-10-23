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
            btn.classList.add('js-dropdown-btn--active');

            window.addEventListener('click', (event) => {
                if((!btn.parentElement.contains(event.target))) {
                    if(btn.classList.contains('js-dropdown-btn--active')) {
                        btn.classList.remove('js-dropdown-btn--active');
                    }
                }
            });

            const select = e.target.closest('.b-select');

            if(!select) return;

            select.querySelector('.b-select__close')?.addEventListener('click', () => {
                btn.classList.remove('js-dropdown-btn--active');
            })
        });
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

      const choicesEls = document.querySelectorAll('.js-choice');

      choicesEls.forEach((select) => {
          const choices = new Choices(select, {
            items: [],
            choices: [
                {
                    value: 'Сергей Филипов',
                    label: 'Сергей Филипов',
                    selected: true,
                    disabled: false,
                },
                {
                    value: 'Василий Петрович',
                    label: 'Василий Петрович',
                    selected: false,
                    disabled: false,
                },
                {
                    value: 'Генадий Алексеевич',
                    label: 'Генадий Алексеевич',
                    selected: false,
                    disabled: false,
                },
                {
                    value: 'Руслан Генадиевич',
                    label: 'Руслан Генадиевич',
                    selected: false,
                    disabled: false,
                },
                {
                    value: 'Тамара Ивановна',
                    label: 'Тамара Ивановна',
                    selected: false,
                    disabled: false,
                },
                {
                    value: 'Вячеслав Огурцов',
                    label: 'Вячеслав Огурцов',
                    selected: false,
                    disabled: false,
                },
                {
                    value: 'Иван Иванов',
                    label: 'Иван Иванов',
                    selected: false,
                    disabled: false,
                },
                {
                    value: 'Иван Петров',
                    label: 'Иван Петров',
                    selected: false,
                    disabled: false,
                },
            ],
            itemSelectText: false,
            searchEnabled: false,
          });
      });

})
