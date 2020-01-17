module.exports = (app) => {
    app.get('/meusdados',(req,res) =>{
        res.render("meusdados/meusdados");
    })
}