const produtosDAO = (connection) => {
    this.lista = (callback) => connection.query('select * from livros', callback)
    this.salva = (produto, callback) =>
        connection.query('insert into livros set ? ',produto,callback);
    return this;
}

module.exports = () => produtosDAO
