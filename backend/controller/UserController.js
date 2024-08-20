const db = require('../database/dbConfig')

exports.getAllUser = async (req, res) => {
  try {
    console.log("query running....");
    const rows = await db.pool.query("SELECT * FROM Users");
    res.status(200).json(rows);
  } catch (error) {
    console.log("erreur", error);
  }
};
