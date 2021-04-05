document.addEventListener("DOMContentLoaded", function () {
    // TABS
    const tabsItems = document.querySelectorAll('.tabs__item')

    if (tabsItems) {
        tabsItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.tabs__item').forEach((child) => child.classList.remove('tabs__item--active'))
                document.querySelectorAll('.tabs__content').forEach((child) => child.classList.remove('tabs__content--active'))
    
                item.classList.add('tabs__item--active')
                document.querySelectorAll('.tabs__content')[i].classList.add('tabs__content--active')
            })
        })
    }

    // SWIPER
    let mySwiperMain = new Swiper('.promotions__slider .swiper-container', {
        slidesPerView: 'auto',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    })

    // MISCALCULATION SETTINGS
    const settingsIcon = document.querySelectorAll('.miscalculation__settings')

    if (settingsIcon) {
        settingsIcon.forEach((item) => {
            item.addEventListener('click', () => {
                item.classList.toggle('miscalculation__settings--active')
            })
        })
    }

    // MISCALCULATION ROLL UP
    const miscalculationRollUp = document.querySelectorAll('.miscalculation__roll-up')

    if (miscalculationRollUp) {
        miscalculationRollUp.forEach((item) => {
            item.addEventListener('click', () => {
                item.parentNode.classList.toggle('miscalculation__wrapper--hidden')
            })
        })
    }

    // MISCALCULATION TABS
    const miscalculationTabsItems = document.querySelectorAll('.miscalculation-tabs__item .miscalculation-tabs__button')

    if (miscalculationTabsItems) {
        miscalculationTabsItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                const parentList = item.parentNode.parentNode
                const parentContent = item.parentNode.parentNode.parentNode

                for (const child of parentList.children) {
                    child.classList.remove('miscalculation-tabs__item--active')
                }
                for (const child of parentContent.children) {
                    child.classList.remove('miscalculation-tabs__content--active')
                }

                item.parentNode.classList.add('miscalculation-tabs__item--active')
                document.querySelectorAll('.miscalculation-tabs__content')[i].classList.add('miscalculation-tabs__content--active')
            })
        })
    }

    // GROUP TABS
    const groupTabsItems = document.querySelectorAll('.group-tabs__item .group-tabs__button')

    if (groupTabsItems) {
        groupTabsItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.group-tabs__item').forEach((child) => child.classList.remove('group-tabs__item--active'))
                document.querySelectorAll('.group-tabs__content').forEach((child) => child.classList.remove('group-tabs__content--active'))
    
                item.parentNode.classList.add('group-tabs__item--active')
                document.querySelectorAll('.group-tabs__content')[i].classList.add('group-tabs__content--active')
            })
        })
    }

    // MISCALCULATION TRIGGER
    const miscalculationTrigger = document.querySelectorAll('.miscalculation-tabs__trigger')

    if (miscalculationTrigger) {
        miscalculationTrigger.forEach((item) => {
            item.addEventListener('click', () => {
                item.classList.toggle('miscalculation-tabs__trigger--active')
            })
        })
    }

    // DATA TRIGGER
    const dataItemTrigger = document.querySelectorAll('.data__inner--trigger')

    if (dataItemTrigger) {
        dataItemTrigger.forEach((item) => {
            item.addEventListener('click', () => {
                item.classList.toggle('data__inner--active')
            })
        })
    }

    // MODAL
    const modalBtn = document.querySelectorAll('.create-an-application'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close'),
        modalOverlay = document.querySelector('.modal-overlay');
    
    if (modalBtn) {
        modalBtn.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
    
                document.body.classList.add('scroll-disabled');
                modal.classList.add('modal--active');
                modalOverlay.classList.add('modal-overlay--active');
            });
        });
    }

    document.body.addEventListener('keyup', (event) => {
        let key = event.keyCode;

        if (modal) {
            if (key == 27) {
                document.body.classList.remove('scroll-disabled');
                document.querySelector('.modal.modal--active').classList.remove('modal--active');
                document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
            };
        }
    }, false);


    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => {
            document.body.classList.remove('scroll-disabled');
            document.querySelector('.modal.modal--active').classList.remove('modal--active');
            document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            document.body.classList.remove('scroll-disabled');
            document.querySelector('.modal.modal--active').classList.remove('modal--active');
            modalOverlay.classList.remove('modal-overlay--active');
        });
    }
});