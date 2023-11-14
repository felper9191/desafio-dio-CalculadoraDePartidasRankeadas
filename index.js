let numeroVitorias = 122;
let numeroDerrotas = 22;
let saldoDeVitoriasJogador = 0;
let nivelDoHeroi = "";

function saldoDeVitorias (vitorias, derrotas) {
    saldoDeVitoriasJogador = vitorias - derrotas;

    return saldoDeVitoriasJogador;
}

function mostraMensagem (saldoDeVitorias, nivel) {
    console.log("O Herói tem de saldo de " + saldoDeVitorias + ", está no nível de " + nivel + ".");
}

function confereNivel () {
    if (saldoDeVitoriasJogador < 10) {       
        nivelDoHeroi = "Ferro";
    } else if (saldoDeVitoriasJogador >= 11 && saldoDeVitoriasJogador <= 20) {
        nivelDoHeroi = "Bronze";
    } else if (saldoDeVitoriasJogador >= 21 && saldoDeVitoriasJogador <= 50) {
        nivelDoHeroi = "Prata";
    } else if (saldoDeVitoriasJogador >= 51 && saldoDeVitoriasJogador <= 80) {
        nivelDoHeroi = "Ouro";
    } else if (saldoDeVitoriasJogador >= 81 && saldoDeVitoriasJogador <= 90) {
        nivelDoHeroi = "Diamante";
    } else if (saldoDeVitoriasJogador >= 91 && saldoDeVitoriasJogador <= 100) {
        nivelDoHeroi = "Lendário";
    } else {
        nivelDoHeroi = "Imortal";
    } 
}


saldoDeVitorias(numeroVitorias, numeroDerrotas);
confereNivel();
mostraMensagem(saldoDeVitoriasJogador, nivelDoHeroi);