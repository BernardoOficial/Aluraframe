
function getElement(element) {
    return document.querySelector(element);
}

const camposForm = [
    getElement("#data"),
    getElement("#quantidade"),
    getElement("#valor")
];

const form = document.querySelector(".form");
const tbody = document.querySelector('.table tbody');

form.addEventListener("submit", (evento) => {

    evento.preventDefault();

    let tr = document.createElement('tr');

    camposForm.forEach(campo => {

        const td = document.createElement('td');
        td.textContent = campo.value;

        tr.appendChild(td);
    })

    const tdVolume = document.createElement('td');
    tdVolume.textContent = camposForm[1].value * camposForm[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    camposForm[0].value = "";
    camposForm[1].value = 1;
    camposForm[2].value = 0;

    camposForm[0].focus();

});