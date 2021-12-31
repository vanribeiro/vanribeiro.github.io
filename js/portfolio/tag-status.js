const tagStatus = () => {
    let statusTag = document.querySelectorAll('.status');
    for(let i = 0; i < statusTag.length; i++){
        let status = '';
        status = statusTag[i].textContent;
        switch (status) {
            case 'concluído':
                    statusTag[i].style.backgroundColor = '#2f963b';
                    statusTag[i].style.color = '#ebebeb';
                break;
            case 'em progresso':
                    statusTag[i].style.backgroundColor = '#edac2a';
                    statusTag[i].style.color = '#404040';
                break;
            case 'a ser iniciado':
                statusTag[i].style.backgroundColor = '#5f8dd3';
                statusTag[i].style.color = '#ebebeb';
                break;
            case 'iniciado':
                    statusTag[i].style.backgroundColor = '#5fb2bb';
                    statusTag[i].style.color = '#404040';
                break;
            default:
                    statusTag[i].textContent = 'Ops! Status inválido...';
                    statusTag[i].style.backgroundColor = '#e74c4c';
                    statusTag[i].style.color = '#ebebeb';
                break;
        }
    }
    
}

export default tagStatus;
