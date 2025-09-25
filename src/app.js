import express from 'express'

// Creation de l'application Express
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Salut Aquisitions!')

})

export default app