const express = require("express") //iniciando o espress
const router = express.Router() //configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid');


const app = express() //iniciando o app
app.use(express.json())
const porta = 3333 //criando a porta

//criando lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome:   'Simara Conceição',
        imagem: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fforbes.com.br%2Fwp-content%2Fuploads%2F2023%2F10%2Fmulher-brasil-rio-de-janeiro-getty.jpg&tbnid=JoZ3Jfnh3Jl12M&vet=12ahUKEwi1pMa74eeEAxUOBbkGHQ5CCj0QMygAegQIARAx..i&imgrefurl=https%3A%2F%2Fforbes.com.br%2Fforbes-mulher%2F2023%2F10%2Fbrasil-e-feminino-mulheres-sao-maioria-em-todas-as-regioes-pela-primeira-vez%2F&docid=R5N4iawGilQYSM&w=1500&h=1000&q=mulher&ved=2ahUKEwi1pMa74eeEAxUOBbkGHQ5CCj0QMygAegQIARAx',
        minibio: 'sei lá',        
    },
    {
        id:'2',
        nome: 'Iana Chan',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UKC5zJ4ab4ltduQsB-U1tJXVTZIw1x_5Xe6MBvMHQf3fNGPVYo7w4QjT8dllWLMjLZE&usqp=CAU',
        minibio: 'fundadora programaria',
    },
    {
        id:'3',
        nome: 'nina da hora',
        imagem: 'https://www.fundacaotelefonicavivo.org.br/wp-content/webp-express/webp-images/uploads/2022/11/10-ninadahora1200x628desktop.png.webp?x30379',
        minibio: 'Hacker antiracista',
    }
]

//GET
function mostraMulheres (request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome:  request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio

    }
    mulheres.push(novaMulher)

    response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if (mulher.id === request.params.id){
            return mulher
        }

    }
    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome) {
       mulherEncontrada.nome = request.body.nome
    }
    
    if (request.body.minibio) {

        mulherEncontrada.minibio = request.body.minibio
    }
     
    if (request.body.imagem) {

        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

// DELETE
function deletaMulher(request, response) {
    function todasMenosELA( mulher) {
        if(mulher.id !== request.params.id) {
            return mulher

        }
    }
    const mulheresQueFicam = mulheres.filter( todasMenosELA)
    
    response.json(mulheresQueFicam)
}


app.use(router.get('/mulheres', mostraMulheres)) //configura rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) // configura rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher))  // configura rota patch /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) // configura rota delete/mulheres

//PORTA
function mostraPorta () {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.listen(porta, mostraPorta) // servidor ouvindo a rota