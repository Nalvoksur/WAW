document.addEventListener('DOMContentLoaded', function() {
    const progress = document.getElementById('progress');
    const loadbox = document.getElementById('loadbox');

    progress.addEventListener('animationend', function() {
        loadbox.style.display = 'none';
    });
});