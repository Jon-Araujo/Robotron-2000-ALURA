//Controle dos inputs:

const ajuste = document.querySelectorAll('.controle-ajuste');
const valorDisplay = document.querySelectorAll('.display');
const botoes = [];
const display = [];

for (let i = 0; i < ajuste.length; i++) {
    botoes.push(ajuste[i])
};

for (let i = 0; i < valorDisplay.length; i++) {
    display.push(valorDisplay[i]);
    display.push(valorDisplay[i]);
};

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", () => {
        if (i % 2 === 0) {
            display[i].value = parseInt(display[i].value) - parseInt(1);
        }
        else {
            display[i].value = parseInt(display[i].value) + parseInt(1);
        }
    })
};

//Ajuste nas estatísticas:

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

const botaoProducao = document.getElementById('producao');
const estatisticas = document.querySelectorAll('.estatistica-numero')

botaoProducao.addEventListener('click', () => {
    const valorEstatisticas = [];
    for (let i = 0; i < estatisticas.length; i++) {
        valorEstatisticas.push(parseInt(estatisticas[i].outerText));
    };

    const totalValor = [];

    totalValor.push(valorEstatisticas[0] + parseInt(pecas.bracos.forca)
        + parseInt(pecas.blindagem.forca) + parseInt(pecas.nucleos.forca)
        + parseInt(pecas.pernas.forca) + parseInt(pecas.foguetes.forca))


    totalValor.push(valorEstatisticas[1] + parseInt(pecas.bracos.poder)
        + parseInt(pecas.blindagem.poder) + parseInt(pecas.nucleos.poder)
        + parseInt(pecas.pernas.poder) + parseInt(pecas.foguetes.poder))


    totalValor.push(valorEstatisticas[2] + parseInt(pecas.bracos.energia)
        + parseInt(pecas.blindagem.energia) + parseInt(pecas.nucleos.energia)
        + parseInt(pecas.pernas.energia) + parseInt(pecas.foguetes.energia))


    totalValor.push(valorEstatisticas[3] + parseInt(pecas.bracos.velocidade)
        + parseInt(pecas.blindagem.velocidade) + parseInt(pecas.nucleos.velocidade)
        + parseInt(pecas.pernas.velocidade) + parseInt(pecas.foguetes.velocidade))

    for (let i = 0; i < estatisticas.length; i++) {
        estatisticas[i].innerText = totalValor[i].toString()
    }

})
