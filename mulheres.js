const express = require("express") //iniciando o espress
const router = express.Router() //configurando a primeira parte da rota
const cors = require('cors') //traz pacote cors que permite consumir essa api no front-end
const conectaBancoDeDados = require('./bancoDeDados.js') //ligando ao arquivo bancoDeDados
conectaBancoDeDados () //chama a função que conecta o banco de dados

const Mulher = require('./mulherModel.js')

const app = express() //iniciando o app 
app.use(express.json())
app.use(cors())
const porta = 3333 //criando a porta

//GET
async function mostraMulheres (request, response) {
    try {
        const mulherresVindasDoBancoDeDados = await Mulher.find()

        response.json(mulherresVindasDoBancoDeDados)
    }catch (erro) {
        console.log(erro)
    }
}

//POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome:  request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })
   try {
       const mulherCriada = await novaMulher.save()
       response.status(201).json(mulherCriada)
   }catch (erro) {
    console.log(erro)
   }
}

//PATCH
async function corrigeMulher(request, response) {
    try{
        const mulherEncontrada = await Mulher.findById(request.params.id)
        
    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
     }
     
     if (request.body.minibio) {
 
         mulherEncontrada.minibio = request.body.minibio
     }
      
     if (request.body.imagem) {
 
         mulherEncontrada.imagem = request.body.imagem
     }
      if (request.body.citacao) {
        mulherEncontrada = request.body.citacao
      }

      const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()

      response.json(mulherAtualizadaNoBancoDeDados)
 
    } catch (erro){
        console.log(erro)
    }


    
}

// DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: 'Mulher deletada com sucesso!'})

    } catch (erro) {
        console.log(erro)
    }
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