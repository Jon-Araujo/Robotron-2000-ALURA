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
            display[i].value = parseInt(display[i].value) +  parseInt(1);
        }
    })
};


