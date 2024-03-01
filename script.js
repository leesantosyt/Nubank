var nome = document.getElementById('nome');
var valor = document.getElementById('valor');
const bt_user = document.getElementById('entrar');
const form = document.getElementById('formulario');

nome.focus();

nomeText = '';

bt_user.onclick = function() {
    localStorage.setItem('nome', nome.value);
    localStorage.setItem('valor', valor.value);
    localStorage.setItem('valor_caixinha', 0);
}

