(() => {
    const actions = {
        birdFlies() {
            document.querySelector(
                '[data-index="2"] .bird'
            ).style.transform = `translateX(${window.innerWidth}px)`;
        },
    };

    const imageElements = document.querySelectorAll(".graphic-item");
    const stepElements = document.querySelectorAll(".step");

    let currentItem = imageElements[0];
    let ioIndex;

    const io = new IntersectionObserver((entries, observer) => {
        ioIndex = entries[0].target.dataset.index * 1;
    });

    for (let i = 0; i < stepElements.length; i++) {
        io.observe(stepElements[i]);
        stepElements[i].dataset.index = i;
        imageElements[i].dataset.index = i;
    }

    function activate(action) {
        currentItem.classList.add("visible");
        if (action) {
            actions[action]();
        }
    }

    function inactivate() {
        currentItem.classList.remove("visible");
    }

    window.addEventListener("scroll", () => {
        let step;
        let boundingRect;

        for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
            step = stepElements[i];
            if (!step) continue;

            boundingRect = step.getBoundingClientRect();

            if (
                boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.8
            ) {
                inactivate();
                currentItem = imageElements[step.dataset.index];
                activate(currentItem.dataset.action);
            }
        }
    });

    activate();
})();
