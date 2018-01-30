const produtosDAO = (connection) => {
    this.lista = (callback) => connection.query('select * from livros', callback)
    return this;
}

module.exports = () => produtosDAO
