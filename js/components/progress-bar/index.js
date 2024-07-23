const playOnProgressBarAnimation = () => {
    const allProgressBar = document.querySelectorAll('.progress-bar');
    if(allProgressBar){
        allProgressBar.forEach(progressBar => {
            const percentual = progressBar.dataset.barValue;
            progressBar.style.width = `${percentual}%`;
        });
    }
}

export default playOnProgressBarAnimation;