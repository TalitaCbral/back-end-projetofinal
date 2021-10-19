// importar o mongoose
const mongoose = require('mongoose');
// url de conexao = mongodb://servidor:porta/banco
const Conn = (url, user, pass, data) => {
  mongoose.connect(`${url}/${data}`, {
    user: user,
    pass: pass,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.log('Erro no mongo', err))
}

module.exports = Conn;