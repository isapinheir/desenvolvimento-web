const itensMenu = document.querySelectorAll('.pasta');
const paginaSobre = document.getElementById('sobre');
const paginaConh = document.getElementById('conh');
const paginaCtt = document.getElementById('contato');

const temaBtn = document.getElementById('tema');

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

// modo claro/escuro
function verificarTema(){
    if(window.getComputedStyle(temaBtn).color === "rgb(0, 0, 0)"){
        temaBtn.classList.remove('claro');
        temaBtn.classList.add('escuro');
    }
    else{
        temaBtn.classList.add('claro');
        temaBtn.classList.remove('escuro');
    }
}

function alterarTemaClaro(){
    document.documentElement.style.setProperty('--azul1', '#88c0f9');
    document.documentElement.style.setProperty('--azul2', '#51ade6');
    document.documentElement.style.setProperty('--azul-escuro', '486bca#');
    document.documentElement.style.setProperty('--accent-glow', 'rgba(136, 168, 249, 0.6)');
    document.documentElement.style.setProperty('--texto1', '#172652');
    document.documentElement.style.setProperty('--texto2', '#465c8c');
    document.documentElement.style.setProperty('--glass-bg', 'rgba(216, 241, 251, 0.233)');
    document.documentElement.style.setProperty('--card-bg', ' rgba(255, 255, 255, 0.7)');
    document.documentElement.style.setProperty('--pilula-bg', 'linear-gradient(to bottom, #eef6ff, #c0e8ff)');
    document.documentElement.style.setProperty('--form-bg', '#f0f8ff');
    document.documentElement.style.setProperty('--gradiente1', 'linear-gradient(135deg, #c0d1ff, #5194e6)');
    document.documentElement.style.setProperty('--gradiente2', 'linear-gradient(135deg, #d0ddff, #a0c0ff)');
    document.documentElement.style.setProperty('--highlight', 'rgba(136, 177, 249, 0.25)');
    document.documentElement.style.setProperty('--borda', '#fff');
    document.documentElement.style.setProperty('--boxshadow', '0 1px 3px rgba(121, 179, 250, 0.8)');
}

function alterarTemaEscuro(){
    document.documentElement.style.setProperty('--azul1', '#88c0f9');
    document.documentElement.style.setProperty('--azul2', '#063e78');
    document.documentElement.style.setProperty('--azul-escuro', '#c9ddf7');
    document.documentElement.style.setProperty('--accent-glow', 'rgba(136, 168, 249, 0.6)');
    document.documentElement.style.setProperty('--texto1', '#a6c3e6');
    document.documentElement.style.setProperty('--texto2', '#b0c7e2');
    document.documentElement.style.setProperty('--glass-bg', ' rgba(0, 0, 0, 0.3)');
    document.documentElement.style.setProperty('--card-bg', ' rgba(37, 37, 70, 0.7)');
    document.documentElement.style.setProperty('--pilula-bg', 'linear-gradient(to bottom, #274250, #18415d)');
    document.documentElement.style.setProperty('--form-bg', '#080f35');
    document.documentElement.style.setProperty('--gradiente1', 'linear-gradient(135deg, #2b6b90, #272081)');
    document.documentElement.style.setProperty('--gradiente2', 'linear-gradient(135deg, #193e54, #17134c)');
    document.documentElement.style.setProperty('--highlight', ' rgba(136, 177, 249, 0.25)');
    document.documentElement.style.setProperty('--borda', '#2b6095');
    document.documentElement.style.setProperty('--boxshadow', '0 0 5px rgba(101, 171, 246, 0.5)');
}

// nav
itensMenu.forEach(item => {
    item.addEventListener('click', (e) => {
        itensMenu.forEach(i => i.classList.remove('ativo'));
        item.classList.add('ativo');
    });
});

// tema
temaBtn.addEventListener('click', () => {
    const isDark = temaBtn.classList.contains('escuro');
    if (isDark) {
        temaBtn.classList.remove('escuro');
        temaBtn.classList.add('claro');
        temaBtn.setAttribute('aria-checked', 'false');
        alterarTemaClaro();
    }
    else {
        temaBtn.classList.remove('claro');
        temaBtn.classList.add('escuro');
        temaBtn.setAttribute('aria-checked', 'true');
        alterarTemaEscuro()
    }
});

window.onload = verificarTema();