const scrollable = document.getElementById('scrollbar');

scrollable.addEventListener('wheel', (event) => {
    event.preventDefault(); // Отключаем стандартное поведение прокрутки
    scrollable.scrollBy({
        top: event.deltaY, // Прокрутка по вертикали
        behavior: 'smooth' // Плавная прокрутка
    });
});
