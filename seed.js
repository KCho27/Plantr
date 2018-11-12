// const db = require('./models')
const {db , Vegetable, Gardener, Plot} = require('./models')
db.sync({force: true})
  .then(() => {
    console.log('Database synced!')
    Vegetable.create({name : 'Carrot', color: 'Orange', planted_on: new Date(Date.now())})
    Vegetable.create({name : 'Lettuce', color: 'Green', planted_on: new Date(Date.now())})
    Vegetable.create({name : 'Broccoli', color: 'Green', planted_on: new Date(Date.now())})
    Vegetable.create({name : 'Cauliflower', color: 'White', planted_on: new Date(Date.now())})
    Vegetable.create({name : 'Corn', color: 'Yellow', planted_on: new Date(Date.now())})
    .then ((vegetable) => {
        return Gardener.create({name : 'Dingo', age : 39, favoriteVegetableId : vegetable.id})
    })
   
    // db.close() // only if using a version of node without `finally`
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
    // db.close() // only if using a version of node without `finally`
  })
//   .finally(() => { // only if using a version of node WITH `finally`
//     db.close()
//   })