const { getAllGenres } = require("../services/genres.services")

module.exports ={
    getGenres: async(req,res) => {
        try {
            const genres =  await getAllGenres();
            return res.status(200).json({
                ok: true,
                data: genres
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                status: error.status || 500,
                error: error.message || 'ups, hubo un error. Sorry :<'
            })
        }
    }
}