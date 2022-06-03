const app = require('./src/app') // importa a api em express

const PORT = 8000 // define 1 porta p/ o nosso servidor escutar

/* 
1° parametro listen = escutar, deixa a nossa API exposta no nosso servidor.
2° parametro callback = vai ter um callback q eu imprimo uma msg dizendo q a minha API rodou.
*/
app.listen(PORT, () => console.log('Baby?!, on na porta 8000!'))

