let tela = document.querySelector("#texto-tela");
let textoNaTela = '';

let op_adicionado = false;
let limite_atingido = false;

function alterarValor(){
    tela.textContent = textoNaTela;
};

function adicionarNumero(vlr){
    ajustarLimite();
    if (textoNaTela.length <= 30 && !limite_atingido){
        textoNaTela += vlr;
        alterarValor();
    }
};

function adicionarOperador(vlr){
    ajustarLimite();
    if (textoNaTela.length <= 30 && !limite_atingido){
        if (textoNaTela.length > 0){
            if (!op_adicionado){
                textoNaTela += ' ' + vlr + ' ';
                op_adicionado = true;
                alterarValor();
            }
        }
    }
};

function enter(){
    let texto = separarValoresStr(textoNaTela);
    let vlr1 = transformarStrEmInt(texto[0]);
    let vlr2 = transformarStrEmInt(texto[2]);
    let operador = texto[1];

    textoNaTela = '' + caucular(vlr1,operador,vlr2);
    op_adicionado = false;
    alterarValor();
};

function cancel(){
    textoNaTela = '';
    op_adicionado = false;
    alterarValor();
};

function ajustarLimite(){
    if (textoNaTela.length > 30 || limite_atingido){
        if (limite_atingido){
            limite_atingido = false;
            textoNaTela = '';
            alterarValor();
        }
        else{
            limite_atingido = true;
            op_adicionado = true;
            textoNaTela = 'Limite Atingido';
        }
            alterarValor();
    }
};



function transformarStrEmInt(vlr){
    let inteiro = 0;
    inteiro = parseInt(vlr,inteiro);
    return inteiro;
};

function separarValoresStr(vlr){
    let valores = ['','',''];
    let posi = 0;
    for (let i = 0; i < vlr.length; i++) {
        let char = vlr.substr(i,1);
        if (char != ' ' && char != '.'){
            valores[posi] += char;
        }
        else {
            posi++;
        }
    }
    return valores;
};



function caucular(vlr1 = 0,operador = '+',vlr2 = 0){
    if (operador === '-'){
        return (vlr1 - vlr2);
    }
    else if (operador === 'X'){
        return (vlr1 * vlr2);
    }
    else if (operador === '/'){
        return (vlr1 / vlr2);
    }
    if (operador === '+'){
        return (vlr1 + vlr2);
    }
};