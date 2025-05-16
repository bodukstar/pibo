const giftImg = document.getElementById('gift');

// Налаштування
const animationGif = 'img/3xq4.gif';
const finalImage = 'img/1933184bbe0c445bab9cfc73cd7febd1FZmDjp2YX0WnKrUt-0.png';
const gifDuration = 3500; // в мілісекундах (3.5 сек)
const redirectDelay = 3500; // 2 секунди
const redirectUrl = 'step.html'; // Вкажи сюди URL сторінки для редіректу

let clicked = false;

giftImg.addEventListener('click', () => {
    if (clicked) return; // щоб не натискалось ще раз
    clicked = true;

    // Змінюємо на гіф
    giftImg.src = animationGif;

    // Коли гіф завершиться — ставимо фінальне зображення
    setTimeout(() => {
        giftImg.src = finalImage;
    }, gifDuration);

    // Перенаправлення через 2 секунди після кліку
    setTimeout(() => {
        window.location.href = redirectUrl;
    }, redirectDelay);
});
