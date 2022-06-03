const livrosModel = require('../models/livrosModels.json')

// find = encontrar; all = todos; Ebooks = recurso.
const findAllEbooks = (req, res) => {

    const { title = null, page = null, autor = null } = req.query

    try {
        let = filterEbooks = livrosModel.slice()

        if (filterEbooks.lenght === 0) {
            return res.status(200).json({
                message: "Não há livros cadastrados na nossa biblioteca",
            })
        }

        if (autor) {
            filterEbooks = filterEbooks.filter(currentEbook => currentEbook.autor.toLocaleLowerCase()
                .includes(autor.toLocaleLowerCase))
        }

        if (title) {
            filterEbooks = filterEbooks.filter(currentEbook => currentEbook.titulo.toLocaleLowerCase()
                .includes(title.toLocaleLowerCase))
        }

        if (filterEbooks.lenght === 0) {
            throw new Error("Naõ foi encontrado nenhum resultado para essa busca")
        }

        res.status(200).json(filterEbooks)

    } catch (error) {
        console.error(error)
        console.log('query recebida: ', req.query)

        res.status(404).json({
            message: error.message,
            details: "Não encontrado um resultado para essa query"
        })
    }
}

// find = encontrar; By = meio ou por, Id = nosso identificador único. ex. CPF.
const findById = (req, res) => {

    const { id } = req.params

    try {
        const findEbook = livrosModel.find(ebook => ebook.id == id) // vai retornar null ou ebook

        /* 
        throw = subir, disparar, criar uma exception ou erro.
        new = palavra reservada do JS, que instancia um objeto a partir de uma classe.
        */
        if (!findEbook) throw new Error('desculpa, não foi possível encontrar o livro com o id') // caminho triste
        res.status(200).json(findEbook)  // caminho feliz

    } catch (error) {
        console.error(error)
        res.status(404).json({
            message: "Poxa! desculpa, ainda não possúimos esse livro no catálogo",
            details: error.message
        })
    }
}

const findOneEbookByTitle = (req, res) => {
    const { title } = req.query
    try {
        if (!title) throw new Error("Nenhum parametro inserido para realizar a busca")
        const findEbook = livrosModel.
            find(currentEbook => currentEbook.titulo.toLocaleLowerCase() == title.toLocaleLowerCase())

        if (!findEbook) throw new Error('desculpa, não foi possível encontrar o livro com o titulo')
        res.status(200).json(findEbook)

    } catch (error) {
        console.error(error)
        res.status(404).json({
            message: "Poxa! desculpa, ainda não possúimos livros com esse titulo",
            details: error.message
        })
    }
}



module.exports = {
    findAllEbooks, // o mesmo que findAllEbooks = findAllEbooks
    findById,
    findOneEbookByTitle
}


