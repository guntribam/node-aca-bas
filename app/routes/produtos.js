module.exports = (app) => {
	app.get('/produtos', (req, res) => {
		const con = app.infra.connectionFactory()
		const produtosDAO = app.infra.produtosDAO(con);
		produtosDAO.lista((err, results) => {
			res.format({
				html: () => res.render('produtos/lista', {lista: results}),
				json: () => res.json(results)
			})
		})
		con.end();
	});
	app.get('/produtos/form', (req, res) => res.render("produtos/form"))

	app.post('/produtos', (req, res) => {
		const con = app.infra.connectionFactory()
		const produtosDAO = app.infra.produtosDAO(con);

		const validadorTitulo = req.assert('titulo', 'Título é obrigatório');
		validadorTitulo.notEmpty();

		const erros = req.validationErrors();
		if(erros){
			res.render('produtos/form');
			return;
		}

		const produto = req.body;
		console.log("produto",produto)
		produtosDAO.salva(produto, (erros, resultados) => {
			res.redirect('/produtos');
		})
	})

	app.get('/produtos/remove', () => {
		const produtosDAO = app.infra.produtosBanco(con);
		const produto = produtosBanco.carrega(id, callback)
		if (produto) {
			produtosBanco.remove(produto, callback);
		}
	});
}

