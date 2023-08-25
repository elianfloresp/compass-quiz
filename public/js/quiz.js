document.addEventListener("DOMContentLoaded", function() {
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
        button.addEventListener("click", function() {
            scene++;
            showCurrentScene(scene);
        });
    });

    previousButtons.forEach(button => {
        button.addEventListener("click", function() {
            scene--;
            showCurrentScene(scene);
        });
    });
});