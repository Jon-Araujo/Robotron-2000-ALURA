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

    totalValor.push(valorEstatisticas[0] + (parseInt(valorDisplay[0].value * pecas.bracos.forca))
        + (parseInt(valorDisplay[1].value * pecas.blindagem.forca)) + (parseInt(valorDisplay[2].value * pecas.nucleos.forca))
        + (parseInt(valorDisplay[3].value * pecas.pernas.forca)) + (parseInt(valorDisplay[4].value * pecas.foguetes.forca)))


    totalValor.push(valorEstatisticas[1] + (parseInt(valorDisplay[0].value * pecas.bracos.poder))
        + (parseInt(valorDisplay[1].value * pecas.blindagem.poder)) + (parseInt(valorDisplay[2].value * pecas.nucleos.poder))
        + (parseInt(valorDisplay[3].value * pecas.pernas.poder)) + (parseInt(valorDisplay[4].value * pecas.foguetes.poder)))


    totalValor.push(valorEstatisticas[2] + (parseInt(valorDisplay[0].value * pecas.bracos.energia))
        + (parseInt(valorDisplay[1].value * pecas.blindagem.energia)) + (parseInt(valorDisplay[2].value * pecas.nucleos.energia))
        + (parseInt(valorDisplay[3].value * pecas.pernas.energia)) + (parseInt(valorDisplay[4].value * pecas.foguetes.energia)))


    totalValor.push(valorEstatisticas[3] + (parseInt(valorDisplay[0].value * pecas.bracos.velocidade))
        + (parseInt(valorDisplay[1].value * pecas.blindagem.velocidade)) + (parseInt(valorDisplay[2].value * pecas.nucleos.velocidade))
        + (parseInt(valorDisplay[3].value * pecas.pernas.velocidade)) + (parseInt(valorDisplay[4].value * pecas.foguetes.velocidade)))

    for (let i = 0; i < estatisticas.length; i++) {
        estatisticas[i].innerText = totalValor[i].toString()
    }

    for (let i = 0; i < valorDisplay.length; i++) {
        valorDisplay[i].value = "00";
    }

})
