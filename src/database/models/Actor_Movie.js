module.exports = (sequelize,dataTypes) =>{
    const alias = 'ActorMovie';
    const cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        actor_id:{
            type:dataTypes.INTEGER
        },
        movie_id:{
            type:dataTypes.INTEGER
        }
    }
    const config = {
        tableName: "actor_movie",
        timestamps: false, // si no tiene marca de tiempo debe de ir en false
        underscored: true,
        tableName: 'actor_movie'
    }
    const ActorMovie = sequelize.define(alias,cols,config)
    return ActorMovie;
}