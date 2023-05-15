const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []


itens.forEach((elemento) => {
    criaElemento(elemento)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault() // com o preventDefault estou previnindo o comportamento padrão do forms
    // evento é o parametro do que esta acontecendo nessa função 
    //console.log(evento.target[0].value) 
    //console.log(evento.target.elements['nome'].value) // esse é o valor que eu procuro usando o elements, procurando direto pelo o nome
    //console.log(evento.target.elements['quantidade'].value)

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual) // toda vez que esse formulario é submetido eu preciso que essa função seja acionada

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value=""
    quantidade.value=""
})

function criaElemento(item) {

    const novoItem = document.createElement('li') //createelement para criar um novo elemento no documento html
    novoItem.classList.add("item") //usando classlist para adicioar uma classe

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;

    novoItem.appendChild(numeroItem) // appendChild para colocar um elemento dentro do outro
    novoItem.innerHTML += item.nome; // incrementando o nome ao novo item 

    lista.appendChild(novoItem)
}