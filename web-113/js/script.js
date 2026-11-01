const itensMenu = document.querySelectorAll('.pasta');
const paginaSobre = document.getElementById('sobre');
const paginaConh = document.getElementById('conh');
const paginaCtt = document.getElementById('contato');

function paginacao(pag){
    switch (pag) {
        case 1:
            paginaConh.classList.add('oculto');
            paginaCtt.classList.add('oculto');
            paginaSobre.classList.remove('oculto');
            break;
        case 2:
            paginaSobre.classList.add('oculto');
            paginaCtt.classList.add('oculto');
            paginaConh.classList.remove('oculto');
            break;
        case 3:
            paginaSobre.classList.add('oculto');
            paginaConh.classList.add('oculto');
            paginaCtt.classList.remove('oculto');
            break;
    }
}

// nav
itensMenu.forEach(item => {
    item.addEventListener('click', (e) => {
        itensMenu.forEach(i => i.classList.remove('ativo'));
        item.classList.add('ativo');
    });
});