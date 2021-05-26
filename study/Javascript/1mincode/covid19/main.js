(() => {
    const actions = {
        birdFlies(key) {
            let birdPosition = -100;
            if (key) birdPosition = window.innerWidth + 300;
            document.querySelector(
                '[data-index="2"] .bird'
            ).style.transform = `translateX(${birdPosition}px)`;
        },
        birdFlies2(key) {
            let birdPosition = [-100, 0];
            if (key)
                birdPosition = [window.innerWidth, -window.innerHeight * 0.7];
            document.querySelector(
                '[data-index="5"] .bird'
            ).style.transform = `translate(${birdPosition[0]}px, ${birdPosition[1]}px)`;
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
            actions[action](true);
        }
    }

    function inactivate(action) {
        currentItem.classList.remove("visible");
        if (action) {
            actions[action](false);
        }
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
                inactivate(currentItem.dataset.action);
                currentItem = imageElements[step.dataset.index];
                activate(currentItem.dataset.action);
            }
        }
    });

    activate();
})();
