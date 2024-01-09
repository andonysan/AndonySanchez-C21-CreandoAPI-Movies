const db = require('../database/models')

const getAllGenres = async () => {
    try{
        const genres = await db.Genre.findAll({
            
        })
        // console.log('>>>>>>>>>>>>>>>>', count.length);
        return genres
        
    } catch(error){
        console.log(error)
        throw{
            status: 500,
            message: error.message
        }
    }
}

module.exports = {
    getAllGenres
}