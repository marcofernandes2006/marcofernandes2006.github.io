
const hoverText = document.getElementById('hoverText');
hoverText.addEventListener('mouseover', () => {
    hoverText.textContent = 'EU DISSE PARA NÃO PASSARES!!';
});
hoverText.addEventListener('mouseout', () => {
    hoverText.textContent = 'Não passes o mouse por aqui';
});

function mudarCor(cor) {
    document.getElementById('pintaTexto').style.color = cor;
}

const input = document.getElementById('campoTexto');
const section = document.querySelector('.escreveEMuda');

const cores = ['#ffe5e5', '#e5ffe5', '#e5f0ff', '#fffbe5', '#f5e5ff', '#e5fff9'];
let indice = 0;

input.addEventListener('input', () => {
  if (input.value.length > 0) {
    section.style.backgroundColor = cores[indice % cores.length];
    indice++;
  } else {
    section.style.backgroundColor = 'white';
  }
});

function submeterCor() {
    const cor = document.getElementById('corInput').value.toLowerCase();
    document.body.style.backgroundColor = cor;
}

let saldo = 0;
function contar() {
    btnImagem.style.transform = 'scale(0.9)';
    setTimeout(() => {
        btnImagem.style.transform = 'scale(1)';
    }, 100);
    saldo++;
    document.getElementById('contador').textContent = saldo;
}

function enviar() {
  const nome = document.getElementById("nome").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (nome && idade) {
    mensagem.textContent = `Olá, o ${nome} tem ${idade}!`;
  } else {
    mensagem.textContent = "";
  }
}

let autoContador = 0;
setInterval(() => {
  autoContador++;
  document.getElementById("autoContador").textContent = autoContador;
}, 1000);









// com ajuda do ChatGPT

const precos = {
    hoverConteudo: 25,
    mudaCorConteudo: 50,
    escreveEMudaConteudo: 100,
    mudaFundoConteudo: 200
};

function desbloquear(nomeConteudo) {
    const conteudo = document.querySelector(`.${nomeConteudo}`);
    const preco = precos[nomeConteudo];

    if (!conteudo) {
        console.error(`Conteúdo "${nomeConteudo}" não encontrado.`);
        return;
    }

    if (!conteudo.classList.contains("bloqueado")) {
    alert("Já está desbloqueado!");
    return;
  }

  if (saldo >= preco) {
    saldo -= preco;

    const lock = conteudo.parentElement.querySelector(".lock");
    if (lock) lock.style.display = "none";
    document.getElementById('contador').textContent = saldo;

    conteudo.classList.remove("bloqueado");
    conteudo.style.display = "block";
  } else {
    alert(`Precisas de ${preco - saldo} Bitcoins a mais para desbloquear isto.`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mudaCorConteudo, .escreveEMudaConteudo, .mudaFundoConteudo, .hoverConteudo").forEach(div => {
    div.classList.add("bloqueado");
    div.style.display = "none";
  });
});