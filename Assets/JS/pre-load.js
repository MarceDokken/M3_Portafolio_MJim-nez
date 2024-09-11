// Función de animación pre-load

window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('progress-bar');

    if (preloader && progressBar) {
        
        const totalDuration = 4000;
        const pauseDuration = 1000;

        const pauseTime = 3000;
        const progressToPause = 60;

        // Inicializa la barra de progreso en 0%
        progressBar.style.width = '0%';
        progressBar.setAttribute('aria-valuenow', '0');

        
        setTimeout(() => {            
            progressBar.style.width = `${progressToPause}%`;
            progressBar.setAttribute('aria-valuenow', progressToPause);
            
            setTimeout(() => {
                progressBar.style.width = '100%';
                progressBar.setAttribute('aria-valuenow', '100');
                },  
                pauseDuration);
        }, 0);
        
        setTimeout(() => {
            preloader.style.transition = 'opacity 1s';
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 1000);
        }, totalDuration);
    }
});
