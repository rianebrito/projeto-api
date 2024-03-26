const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Riane Brito',
        imagem: 'https://media.licdn.com/dms/image/D4E03AQHUStQ0HFoEMw/profile-displayphoto-shrink_200_200/0/1690564107630?e=1715212800&v=beta&t=pf49RQn806xnfUNQeK1NAJrZMErECKvd54xuZ6cphfI',
        minibio: 'Desenvolvedora em formação'
    })
}

function mostraPorta () {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)