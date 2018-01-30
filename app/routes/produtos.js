module.exports = (app) => {
    app.get('/produtos', (req, res) => {
        const con = app.infra.connectionFactory()
        const produtosDAO = app.infra.produtosDAO(con);
        produtosDAO.lista((err, results) => {
            res.render('produtos/lista', {lista: results});
        })
        con.end();
    });


    app.get('/produtos/remove', () => {
        const produtosDAO = app.infra.produtosBanco(con);
        const produto = produtosBanco.carrega(id , callback)
        if(produto){
            produtosBanco.remove(produto, callback);
        }
    });
}

