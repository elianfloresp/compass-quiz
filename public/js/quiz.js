document.addEventListener("DOMContentLoaded", function () {
    let scene = 1;

    const showCurrentScene = (scene) => {
        const sceneElements = document.querySelectorAll(".scene");

        sceneElements.forEach(element => {
            element.classList.add("hide");
        });

        const currentScene = document.querySelector(`.scene-${scene}`);
        currentScene.classList.remove("hide");
    };

    const nextButtons = document.querySelectorAll(".js-btn-next");
    const previousButtons = document.querySelectorAll(".js-btn-previous");
    const skipButtons = document.querySelectorAll(".js-btn-skip");
    const submitButton = document.querySelector(".js-submit");
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');

    nextButtons.forEach(button => {
        button.addEventListener("click", function () {
            scene++;
            showCurrentScene(scene);
        });
    });

    
    skipButtons.forEach(button => {
        button.addEventListener("click", function () {
            scene++;
            showCurrentScene(scene);
        });
    });

    previousButtons.forEach(button => {
        button.addEventListener("click", function () {
            scene--;
            showCurrentScene(scene);
        });
    });

    const nextButton3 = document.querySelector('.scene-3 .js-btn-next');
    const radioOptions = document.querySelectorAll('.scene-3 .checkbox-option');

    nextButton3.addEventListener("click", function () {
        radioOptions.forEach(option => {
            option.checked = false;
        });

        nextButton3.classList.add("disabled")
    });

    radioOptions.forEach(option => {
        option.addEventListener('change', () => {
            const anySelected = Array.from(radioOptions).some(option => option.checked);

            if (anySelected) {
                nextButton3.classList.remove('disabled');
            } else {
                nextButton3.classList.add('disabled');
            }
        });
    });

    const nextButton4 = document.querySelector('.scene-4 .js-btn-next');
    const checkOptions = document.querySelectorAll('.scene-4 .checkbox-option');

    nextButton4.addEventListener("click", function () {
        checkOptions.forEach(option => {
            option.checked = false;
        });

        nextButton4.classList.add("disabled")
    });

    checkOptions.forEach(option => {
        option.addEventListener('change', () => {
            const anySelected = Array.from(checkOptions).some(option => option.checked);

            if (anySelected) {
                nextButton4.classList.remove('disabled');
            } else {
                nextButton4.classList.add('disabled');
            }
        });
    });

    const nextButton5 = document.querySelector('.scene-5 .js-btn-next');


    const textarea = document.getElementById('loss');
    const charCount = document.getElementById('counter');

    nextButton5.addEventListener("click", function () {
        textarea.value = '';
        nextButton5.classList.add("disabled")
    });

    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;
        
        if(currentLength > 0) {
            document.querySelector(".scene-5 .js-btn-next").classList.remove("disabled")
        } else {
            document.querySelector(".scene-5 .js-btn-next").classList.add("disabled")
        }
        charCount.textContent = `${currentLength}/130 characters`;

        if (currentLength > 130) {
            textarea.value = textarea.value.slice(0, 130);
        }
    });


    fullNameInput.addEventListener('input', function () {
        localStorage.setItem('fullName', fullNameInput.value);
        submitIsEnable();
    });

    emailInput.addEventListener('input', function () {
        localStorage.setItem('email', emailInput.value);
        submitIsEnable();
    });

    ageInput.addEventListener('input', function () {
        localStorage.setItem('age', ageInput.value);
        submitIsEnable();
    });

    function submitIsEnable() {
        const fullNameInput = document.getElementById('full-name');
        const emailInput = document.getElementById('email');
        const ageInput = document.getElementById('age');

        if(fullNameInput.value.length > 0 & emailInput.value.length > 0 & ageInput.value.length > 0) {
            document.querySelector(".scene-6 .js-submit").classList.remove("disabled");
        }
    }

    submitButton.addEventListener("click", function () {
        scene = 1;
        fullNameInput.value = '';
        emailInput.value = '';
        ageInput.value = '';
        textarea.value = '';

        checkOptions.forEach(option => {
            option.checked = false;
        });
        radioOptions.forEach(option => {
            option.checked = false;
        });

        nextButton5.classList.add("disabled")
        nextButton3.classList.add("disabled")
        nextButton4.classList.add("disabled")
        showCurrentScene(scene);
    });

});



