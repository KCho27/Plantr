const Sequelize = require('Sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr')

const Gardener = db.define('Gardeners' , {
    name : {
        type: Sequelize.STRING,
        allowNull : false,    
    },
    age : Sequelize.INTEGER
})

const Plot = db.define('plots', {
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN
})

const Vegetable = db.define('vegetable', {
    name : Sequelize.STRING,
    color : Sequelize.STRING,
    planted_on : Sequelize.DATE
})

Plot.belongsTo(Gardener, {as: 'Gardener'})
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})
Vegetable.belongsToMany(Plot, {through: 'PlotVegetables'})
Plot.belongsToMany(Vegetable, {through: 'PlotVegetables'})


module.exports = db