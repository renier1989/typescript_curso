import express from 'express'
// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(401).json({
    error:'algo',
    msg: 'no tengo un respuesta valida'
  })

  // res.json({
  //   id: 1,
  //   status : 200,
  //   nombre: 'Renier Vargas',
  // })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})