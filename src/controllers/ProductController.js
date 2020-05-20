const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
  //Faz a listagem de todos os produtos.
  async index(req, res) {
    const {page = 1} = req.query
    const products = await Product.paginate({}, {page, limit: 10})
    return res.json(products)
  },

  //Mostra um único produto.
  async show(req, res) {
    const product = await Product.findById(req.params.id)
    return res.json(product)
  },

  //Cria um novo produto.
  async create(req, res) {
    const product = await Product.create(req.body)
    return res.json(product)
  },

  //Atualiza os dados de um produto.
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
    return res.json(product)
  },

  //Deleta um produto.
  async destroy(req, res) {
   await Product.findByIdAndRemove(req.params.id)
    return res.json()
  }
}