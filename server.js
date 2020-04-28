// Configurando o servidor
const express = require("express")
const server = express()


// Configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'))


// Habilitar body do formulário
server.use(express.urlencoded({ extended: true }))


// Configurando a Template Engine (Nunjucks)
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true
})


// Configurar a apresentação da página
server.get("/", function(req,res){
    return res.render("index.html")
})


// Pegar dados do formulário
server.post("/", function(req, res){
    const user = req.body.user
    const password = req.body.password

    
    // Se USUÁRIO ou SENHA for igual a vazio
    if(user == "" || password == ""){
        return res.redirect("/error.html")
    }

    setTimeout(() => {
        return res.redirect("/welcome.html")
    }, 2000)

    
})


// Ligar o servidor permitindo o acesso a porta 3000
server.listen(3000, function(){
    console.log("Servidor rodando...")
})

