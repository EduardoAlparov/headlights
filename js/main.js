import Modal from "./modules/Modal.js";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

        // inits modals:
    const modal = new Modal({
        isOpen: (modal) => {},
        isClose: (modal) => {},
    });

    const itemDropdonwBtns = document.querySelectorAll('.js-item-dropdown-btn');

    itemDropdonwBtns.forEach( (btn) => {
        btn.addEventListener('click', (e) => {
            btn.classList.toggle('js-dropdown-btn--active');

            window.addEventListener('click', (event) => {
                if((!btn.parentElement.contains(event.target))) {
                    if(btn.classList.contains('js-dropdown-btn--active')) {
                        btn.classList.remove('js-dropdown-btn--active');
                    }
                }

                if(window.matchMedia("(max-width: 1200px)").matches && event.target.closest('.b-select__link')) {
                    btn.classList.remove('js-dropdown-btn--active');
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

    const choicesMasters = [
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
        }
    ];

    const choicesMasters2 = [
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
        }
    ];

    const expensesType = [
        {
            value: 'ФОТ',
            label: 'ФОТ',
            selected: true,
            disabled: false,
        },
        {
            value: 'Расход 1',
            label: 'Расход 1',
            selected: false,
            disabled: false,
        },
        {
            value: 'Расход 2',
            label: 'Расход 2',
            selected: false,
            disabled: false,
        },
        {
            value: 'Расход 3',
            label: 'Расход 3',
            selected: false,
            disabled: false,
        },
        {
            value: 'Расход 4',
            label: 'Расход 4',
            selected: false,
            disabled: false,
        },
        {
            value: 'Расход 5',
            label: 'Расход 5',
            selected: false,
            disabled: false,
        }
    ];

    const dataSets = { choicesMasters, choicesMasters2, expensesType };

    choicesEls.forEach((select) => {
        const dataList = select.dataset.choices;

        const choice = new Choices(select, {
            items: [],
            choices: dataList ?  dataSets[dataList] : [],
            itemSelectText: false,
            searchEnabled: false,
        });

        select.addEventListener(
            'choice',
            function(event) {
                setTimeout(() => {
                    const input = select.closest('.js-choice-wrapper').querySelector('[name="select-active"]');
                input.focus();
                }, 200);
            },
            false,
        );
    });

    const catlogNavItems = document.querySelectorAll('.js-nav-item-dropdown.b-nav-item--dropdown');

    catlogNavItems.forEach( (catItem) => {
        catItem.addEventListener('click', () => {
            catItem.classList.toggle('b-nav-item--opened');
        })
    });

    function DragMenu(options) {
      const self    = this;
      self.menu     = options.el;
      self.hasTouch = 'ontouchstart' in window;
      self.isMoving = false;
      self.isOpen   = false;

      const compStyles = window.getComputedStyle(self.menu);

      self.position = {
        min: parseInt(compStyles.bottom),
        max: 0,
        current: 0
      };

      self.position.snapBorder = 150;

      self.btn = options.toggleButton;

      self.btn && self.btn.addEventListener('click', function() {
        self.setOpen(!self.isOpen);
      });

      if (self.hasTouch) {
        self.eventStart  = 'touchstart';
        self.eventMove = 'touchmove';
        self.eventEnd  = 'touchend';
      } else {
        return;
      }

      self.menu.addEventListener(self.eventStart, e => {
        e.stopPropagation();

        if(e.target.closest('.b-catalog__grabber')) {
          var evt = e.type === 'touchstart' ? e.changedTouches[0] : e;
          self.position.current = Math.abs((self.menu.offsetTop + self.menu.offsetHeight) - evt.clientY);
        } else {
          return;
        }
      }, {passive: true});

      self.menu.addEventListener(self.eventMove, e => {
        self.menu.classList.add('is-moving');
        e.stopPropagation();

        if(e.target.closest('.b-catalog__grabber')) {
          var evt = e.type === 'touchmove' ? e.changedTouches[0] : e;
          var move = (window.innerHeight - (evt.clientY)) - self.position.current;

          if ((move) < self.position.max && (move) >= self.position.min && !self.menu.classList.contains('open')) {
            self.setOpen(false);
            self.menu.style.bottom = `${move}px`;
        } else if ((move) < self.position.max && (move) < self.position.min && self.menu.classList.contains('open')) {
            self.menu.style.bottom = `${move}px`;
          }
        }
      }, {passive: true});

      self.menu.addEventListener(self.eventEnd, e => {
        self.menu.classList.remove('is-moving');

        e.stopPropagation();

        if(e.target.closest('.b-catalog__grabber')) {
          var evt = e.type === 'touchend' ? e.changedTouches[0] : e;
          var l = parseInt(self.menu.style.bottom);

          if( Math.abs(l) > self.position.snapBorder && !self.menu.classList.contains('open')) {
            self.setOpen(true);
          } else if( Math.abs(l) > self.position.snapBorder && self.menu.classList.contains('open')){
            self.menu.hidePopover();
            self.setOpen(false);
          }

          self.menu.style.bottom = null;
          self.menu.style.pointerEvents = 'initial';
        }

      }, {passive: true});

      self.setOpen = isOpen => {
        self.isOpen = isOpen;

        self.menu.classList[isOpen ? 'add' : 'remove']('open');

        setTimeout(() => {
            if(!isOpen) {
                self.menu.classList.add('open')
            }
        }, 500);
      }
    }

    if(window.matchMedia("(max-width: 744px)").matches) {
        const popups = document.querySelectorAll('.b-catalog');

        popups.forEach((element) => {
            new DragMenu({el: element, toggleButton: element.querySelector('.b-catalog__grabber')});
        });
    }

    const changedInputs = document.querySelectorAll('.js-change-info-input');
    const root = document.documentElement;

    changedInputs.forEach((box) => {
        box.addEventListener('click', (e) => {
            box.classList.remove('b-order-cell__input-wrapper--no-border');
            box.querySelector('input')?.removeAttribute('disabled');
            box.querySelector('input')?.focus();

            const grid = e.target.closest('.b-order-modal__main');
            const ht = e.target.closest('.b-order-modal__order-information').offsetHeight;

            grid.style.setProperty('--grid-row-value', `${ht}px`);
        })
    })
})
