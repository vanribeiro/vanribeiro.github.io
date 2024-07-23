const aluraProgressCourseTemplate = (courseName, courseProgress, courseSlug) =>{

    return `
        <header class="course-in-progress__item-header">
            <a href="https://cursos.alura.com.br/course/${courseSlug}" title="Informações sobre o curso" rel="noreferrer noopener" target="_blank">
                <h4 class="courses-in-progress__item-title subtitle-cards">
                    ${courseName}
                </h4>
            </a>
        </header>
        <div class="progress-bar__container">
            <div class="progress-bar__background">
                <div class="progress-bar" data-bar-value="${courseProgress}" style="width:0%"></div>
            </div>
            <span class="progress-bar__percentual">${courseProgress}%</span>
        </div>
    `;

}

export default aluraProgressCourseTemplate;