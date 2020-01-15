const calc = new Calculator();

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    calc.inOne = form.elements.input_1.value;
    calc.operation = form.elements.operation.value;
    calc.inTwo = form.elements.input_2.value;

    const answer = calc.calculate();

    const result = document.getElementById('result')
    result.innerText = answer;

    clearForm();
});

function clearForm() {
    for (let i = 0; i < form.elements.length - 1; i++) {
        form.elements[i].value = ''
    }
}
