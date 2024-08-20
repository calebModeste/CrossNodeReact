
const express = require("express");
const db = require('./database/dbConfig')
const cors = require('cors')
const bodyParse = require('body-parser')
const produitRoute = require('./router/ProduitRoute')
const userRoute = require('./router/userRoute')


const app = express();
// console.log(process.env)

app.use(cors())
app.use(bodyParse.json())

// app.use('/api/User', userRoute)
app.use('/api/Produit',produitRoute)






// //===USERS CRUD==//

// /**==========
//  *  GET ALL Users
//  ============*/
// app.get("/user/users", async (req, res) => {
//   let connect;
//   try {
//     connect = await pool.getConnection();
//     const rows = await connect.query("SELECT * FROM USERS");
//     res.status(200).json(rows);
//   } catch (error) {
//     console.log("some issue", error);
//   }
// });


// /**=====================
//  *  GET ONE USER By ID
//  =======================*/

//  app.get("/user/:id", async(req, res)=>{
//   let connect;                
//   let id = parseInt(req.params.id)
//   try {
//     connect = await pool.getConnection();
//     const row = await connect.query(`SELECT * FROM USERS WHERE id = ${id}`)
//     res.status(200).json(row)
//   } catch (error) {
//         console.log("some issue", error);

//   }
//  })


//  /**==================
//  *  DELETE  Produit By Id
//  =====================*/
// app.delete("/user/delete/:id", async (req, res) => {
//   let connect;
//   let id = parseInt(req.params.id);
//   try {
//     connect = await pool.getConnection();s
//     const rows = await connect.query(`DELETE FROM USERS WHERE id = ${id}`);
//     res.status(200).json(rows);
//   } catch (error) {
//     console.log("some issue", error);
//   }
// });

// //===PRODUITS CRUD==//


// /**==================
//  *  GET ALL Produits
//  =====================*/
// app.get("/produit/produits", async (req, res) => {
//   let connect;
//   try {
//     connect = await pool.getConnection();
//     const rows = await connect.query("SELECT * FROM PRODUITS");
//     res.status(200).json(rows);
//   } catch (error) {
//     console.log("some issue", error);
//   }
// });


// /**==================
//  *  GET  Produit By Id
//  =====================*/
// app.get("/produit/:id", async (req, res) => {
//   let connect;
//   let id = parseInt(req.params.id);
//   try {
//     connect = await pool.getConnection();
//     const rows = await connect.query(`SELECT * FROM PRODUITS WHERE id = ${id}`);
//     res.status(200).json(rows);
//   } catch (error) {
//     console.log("some issue", error);
//   }
// });


// /**==================
//  *  DELETE  Produit By Id
//  =====================*/
// app.delete("/produit/delete/:id", async (req, res) => {
//   let connect;
//   let id = parseInt(req.params.id);
//   try {
//     connect = await pool.getConnection();
//     const rows = await connect.query(`DELETE FROM PRODUITS WHERE id = ${id}`);
//     res.status(200).json(rows);
//   } catch (error) {
//     console.log("some issue", error);
//   }
// });



app.listen(3000,()=>{
  console.log('running')
  // console.log(pool.getConnection())
});