const express = require('express')

const app = express()
app.use((req, res, next) => {
  console.log('req recu')
  next()
})

app.use((req, res, next) => {
  res.status(201)
  next()
})

app.use((req, res, next) => {
  res.json({ message: 'requete ok' })
  next()
})

app.use((req, res) => {
  console.log('réponse envoyer avec succes')
})
module.exports = app
