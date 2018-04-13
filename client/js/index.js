var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];

var tbody = document.querySelector('table tbody');

document.querySelector(".form").addEventListener('submit',function(event){

    event.preventDefault();

    //após o clique do botão criar a tr
    var tr = document.createElement('tr');

    campos.forEach(function(campo){

        //criando uma td dinamicamente
        var td = document.createElement('td');
        td.textContent = campo.value;

        //adicionando o td ao tr
        tr.appendChild(td);

    });

var tdVolume = document.createElement('td');
tdVolume.textContent = campos[1].value * campos[2].value;

tr.appendChild(tdVolume);

tbody.appendChild(tr);

campos[0].value = '';
campos[1].value = '1';
campos[2].value = '0';

campos[0].focus();

});