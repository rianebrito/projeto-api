const mongoose = require('mongoose')

async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou')

    await mongoose.connect('mongodb+srv://rianeramaiane:xr8rjP2mlPRyeImD@cluster0.6zcmbdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    
    console.log('Conexão do banco de dados feita com sucesso')

    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados