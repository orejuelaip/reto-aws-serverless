module.exports = {
    db:{
      DB_HOST: "retotecnico-db.c3u6mpp5jo4b.us-east-1.rds.amazonaws.com",
      DB_USER: "admin",
      DB_PASS: "phoijox2021",
      DB_NAME: "dbstarwars",
      dialect: "mysql",
      // pool is optional, it will be used for Sequelize connection pool configuration
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    },
    url: (id)=>{
      return `https://swapi.py4e.com/api/vehicles/${id}/`
    },
    options:{
      definition:{
        openapi:"3.0.0",
        info:{
            title:'Tasks API',
            version: '1.0.0',
            descripcion:'Api Prueba',
        },
        servers:[
            {
                url: 'http://localhost:3000'
            }
        ]
      },
      apis:['./src/routes/*.ts']
    }
  }
 
