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

    nextButtons.forEach(button => {
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
});


const checkboxes = document.querySelectorAll('.checkbox-option');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});

const textarea = document.getElementById('loss');
    const charCount = document.getElementById('counter');

    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;
        charCount.textContent = `${currentLength}/130 characters`;

        if (currentLength > 130) {
            textarea.value = textarea.value.slice(0, 130);
        }
    });