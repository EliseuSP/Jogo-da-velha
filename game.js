let ultimoClick = 'O';

function taVazio(element) {
    if (element.textContent.length == 0) {
        return true;
    } else {
        return false;
    }
}

function desenharX(id) {
  const element = document.getElementById(id);
  element.innerText = 'X';
}

function desenhar0(id) {
  const element = document.getElementById(id);
  element.innerText = '0';
}

function verificaLinha(linha) {
  const listaElementos = linha.children;
  if (listaElementos.item(0).textContent == listaElementos.item(1).textContent
  && listaElementos.item(1).textContent == listaElementos.item(2).textContent) {
    if (taVazio(listaElementos.item(1))) return;
    const ganhador = listaElementos.item(1).textContent;
    alert(`${ganhador} Ganhou`)
    document.getElementById('resultado').innerText = ganhador;
  }

}
function verificarcoluna(listaElementos){
  console.log(listaElementos)
}
function verificaTodasLinhas(lista) {
  verificaLinha(lista[0]);
  verificaLinha(lista[1]);
  verificaLinha(lista[2]);
}

function verificaGanhador() { 
  const jogo = document.getElementById('jogo');
 verificaTodasLinhas(jogo.children);
 verificartodascolunas(jogo.children); 
}
function verificartodascolunas(lista){
  verificarcoluna(lista[0])
  verificarcoluna(lista[2])
  verificarcoluna(lista[3])
}

function desenhe(e) {
  const element = e.target;
  const id = element.id;
  if (taVazio(element)) {
    if (ultimoClick === 'X') {
        desenhar0(id);
        verificaGanhador();
        ultimoClick = 'O'
    } else {
        desenharX(id);
        verificaGanhador();
        ultimoClick = 'X'
      }
    }
  }
document.addEventListener('click', desenhe);
