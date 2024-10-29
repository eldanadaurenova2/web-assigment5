
function playSound() {
    const audio = new Audio('sound3/sound.mp3'); // Замените 'sound.mp3' на путь к вашему звуковому файлу
    audio.play();
}


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', playSound);
    });
});
