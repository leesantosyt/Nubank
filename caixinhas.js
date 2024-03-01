const sair_caixinha = document.getElementById('sair-caixinha');
const money_disponivel = document.getElementById('money-disponivel');
const bt_guardar = document.getElementById('bt-guardar');
const window_guardar = document.querySelector('.window-guardar');
const sair_guardar = document.getElementById('sair-guardar');
const entrada_guardar = document.getElementById('entrada-caixinha');
const action_guardar = document.getElementById('action-guardar');
const money_caixinha = document.getElementById('money-caixinha');
var money = parseFloat(localStorage.getItem('valor'));
let valor_caixinha = parseFloat(localStorage.getItem('valor_caixinha'));

sair_caixinha.onclick = function() {
    window.location.replace('https://leesantosyt.github.io/Nubank/principal.html');
}
money_disponivel.innerHTML = money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
money_caixinha.innerHTML = valor_caixinha.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

bt_guardar.onclick = function() {
    window_guardar.classList.remove('guardar-hide');
}
sair_guardar.onclick = function() {
    window_guardar.classList.add('guardar-hide');
}
action_guardar.onclick = function() {
    if (entrada_guardar.value <= money) {
        money = money - entrada_guardar.value;
        localStorage.setItem('valor', money);
        localStorage.setItem('valor_caixinha', entrada_guardar.value);
        valor_caixinha += parseFloat(localStorage.getItem('valor_caixinha'));
        localStorage.setItem('valor_caixinha', valor_caixinha);
        money_caixinha.innerHTML = valor_caixinha.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        window_guardar.classList.add('guardar-hide');
    }
}
