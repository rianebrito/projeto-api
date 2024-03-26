const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

const mulheres = [
    {
        nome:   'Simara Conceição',
        imagem: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fforbes.com.br%2Fwp-content%2Fuploads%2F2023%2F10%2Fmulher-brasil-rio-de-janeiro-getty.jpg&tbnid=JoZ3Jfnh3Jl12M&vet=12ahUKEwi1pMa74eeEAxUOBbkGHQ5CCj0QMygAegQIARAx..i&imgrefurl=https%3A%2F%2Fforbes.com.br%2Fforbes-mulher%2F2023%2F10%2Fbrasil-e-feminino-mulheres-sao-maioria-em-todas-as-regioes-pela-primeira-vez%2F&docid=R5N4iawGilQYSM&w=1500&h=1000&q=mulher&ved=2ahUKEwi1pMa74eeEAxUOBbkGHQ5CCj0QMygAegQIARAx',
        minibio: 'sei lá',        
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UKC5zJ4ab4ltduQsB-U1tJXVTZIw1x_5Xe6MBvMHQf3fNGPVYo7w4QjT8dllWLMjLZE&usqp=CAU',
        minibio: 'fundadora programaria',
    },
    {
        nome: 'nina da hora',
        imagem: 'https://www.fundacaotelefonicavivo.org.br/wp-content/webp-express/webp-images/uploads/2022/11/10-ninadahora1200x628desktop.png.webp?x30379',
        minibio: 'Hacker antiracista',
    }
]

function mostraMulheres (request, response) {
    response.json(mulheres)
}
function mostraPorta () {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)