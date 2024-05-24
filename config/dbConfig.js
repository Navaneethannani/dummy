const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('customers' , 'root', 'root',{
    host: 'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('db connected')
}).catch((err)=>{
    console.log('error acquried')
})


module.exports = sequelize