const bt_visible = document.getElementById('bt-visible');
const img_visible = document.getElementById('img-visible');
const saldo_conta = document.querySelectorAll('.saldo-account');
const caixinhas_principal = document.getElementById('caixinhas-principal');
const bt_caixinhas = document.getElementById('bt-caixinhas');
console.log(saldo_conta);

var username = document.getElementById('username');
let nomeText = localStorage.getItem('nome');
let money = parseFloat(localStorage.getItem('valor'));
let valorCaixinha = parseFloat(localStorage.getItem('valor_caixinha'));

username.innerHTML = `Olá, ${nomeText}!`;

let estado = true;
let visible = true;

saldo_conta[0].innerHTML = money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
saldo_conta[1].innerHTML = valorCaixinha.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

bt_visible.onclick = function() {
    if (estado == true) {
        if (visible == true && estado == true) {
            console.log('certooo');
            img_visible.src = "assets/invisible-icon.png";
            for (let num = 0; num < saldo_conta.length; num++) {
                saldo_conta[num].innerHTML = '&#8226;&#8226;&#8226;&#8226;';
            }
            visible = false;
            estado = false;
        }
        if (visible == false && estado == true) {
            img_visible.src = "assets/visible-icon.png";
            saldo_conta[0].innerHTML = money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            saldo_conta[1].innerHTML = valorCaixinha.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            visible = true;
            estado = false;
        }
        estado = true;
    }
}
bt_caixinhas.onclick = function() {
    window.location.assign('file:///D:/Leandro/Programas/Trabalhos/Site%20nubank/caixinhas.html');
}

var resultado = '';

function teste(nome) {
    resultado = nome;
    console.log(resultado);
}
teste('maria');
