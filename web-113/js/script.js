/*let nome = 'isa';
nome = 2;

console.log(nome);

escolha = prompt('atualizar o título? s/n');
if(escolha === 's'){
    document.getElementById('titulo').innerHTML = 'atualizada';
}

escolha2 = prompt('atualizar a cor? s/n');
if(escolha === 's'){
    document.getElementById('titulo').style.color = '#fff';
}

escolha2 = prompt('vc vai esonder o contato????');
if(escolha === 's'){
    document.getElementById('contato').style.display = 'none';
}

function enviar(){
    alert('enviado eba')
}
*/

function revelar(){
    a = document.getElementById('alerta');
    const rev = a.classList.contains('hidden');
    if(!rev){
        a.classList.add('hidden');
    }
}

 const container = document.getElementById(container-grid);

// alert("Bem-vindo(a) ao meu portfólio!");

function apresentacao() {
    container.innerHTML='<div id="alerta"><p>Olá! Meu nome é Isabeli e sou estudante de Desenvolvimento Web.</p><button class="botao-alerta onclick="revelar""></button></div>'
}


/*
    --azul1: #88c0f9;
    --azul2: #51ade6;
    --azul-escuro: #2b51b8;
    --accent-glow: rgba(136, 168, 249, 0.6);

    --texto1: #172652;
    --texto2: #465c8c;
    
    --card-bg: rgba(255, 255, 255, 0.7);
    --card-header-bg: linear-gradient(to right, var(--azul2), var(--azul1));
    --pilula-bg: linear-gradient(to bottom, #eef6ff, #c0e8ff);

    --gradiente1: linear-gradient(135deg, #c0d1ff, #5194e6);
    --gradiente2: linear-gradient(135deg, #d0ddff, #a0c0ff);
    --highlight:  rgba(136, 177, 249, 0.25);

*/