const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: "127.0.0.1",
    database: "juanstreet_db_staging",
    user: "root",
    password: "",
  },
})

exports.query = async (query) => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}