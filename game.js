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
  if (listaElementos[0].textContent == listaElementos[1].textContent
  && listaElementos[0].textContent == listaElementos[2].textContent) {
    if (taVazio(listaElementos[1]))return;
    const ganhador = listaElementos[1].textContent;
    alert(`${ganhador} Ganhou`)
    document.getElementById('resultado').innerText = ganhador;
  }
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
  const l0c0 = lista[0].children[0]
  const l1c0 = lista[1].children[0]
  const l2c0 = lista[2].children[0]
  const coluna0 = [l0c0,l1c0,l2c0]
  const l0c1 = lista[0].children[1]
  const l1c1 = lista[1].children[1]
  const l2c1 = lista[2].children[1]
  const coluna1 = [l0c1,l1c1,l2c1]
  const l0c2 = lista[0].children[2]
  const l1c2 = lista[1].children[2]
  const l2c2 = lista[2].children[2]
  const coluna2 = [l0c2,l1c2,l2c2]
  verificarcoluna(coluna0)
  verificarcoluna(coluna1)
  verificarcoluna(coluna2)
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
