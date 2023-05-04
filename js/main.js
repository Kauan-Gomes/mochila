const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")


form.addEventListener("submit", (evento) => {
    evento.preventDefault() // com o preventDefault estou previnindo o comportamento padrão do forms
    console.log("FUNCIONOU")
    console.log(evento) // evento é o parametro do que esta acontecendo nessa função 
    //console.log(evento.target[0].value) 
    //console.log(evento.target.elements['nome'].value) // esse é o valor que eu procuro usando o elements, procurando direto pelo o nome
    //console.log(evento.target.elements['quantidade'].value)

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value) // toda vez que esse formulario é submetido eu preciso que essa função seja acionada

})

function criaElemento(nome, quantidade) {
    
    const novoItem = document.createElement('li') //createelement para criar um novo elemento no documento html
    novoItem.classList.add("item") //usando classlist para adicioar uma classe

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem) // appendChild para colocar um elemento dentro do outro
    novoItem.innerHTML += nome; // incrementando o nome ao novo item 

    lista.appendChild(novoItem)

    console.log(novoItem)
}