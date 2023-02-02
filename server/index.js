const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "324471",
    database: "crudgames",
});


//  app.get('/', (req, res) => {
//     let SQL = "INSERT INTO games ( name, cost, category ) VALUES ( 'Far Cry 5', '120', 'Ação' ) ";

//     db.query(SQL, (err, result) => {
//         console.log(err);
//     })

//  });   

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log("Rodando serverno")
})