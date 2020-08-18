<<<<<<< HEAD
const express = require('express')
const app = express()
const showdata = require('./showdata')

app.use(express.static('public'))
=======

const showdata = require('./showdata')
const { app } = require('./common-app')
>>>>>>> b8cb52e0a2320042f0488674bb5a3e9beb7e3db3

app.set('view engine', 'pug')

app.get('/', (request, response) => {
<<<<<<< HEAD
  return response.render('index', { showdata })
})

app.get('./season/id', (request, response) => {
  const season = showdata.seasons.find(season => season.number === parseInt(request.params.id))

  return response.render('season', { season, title: showdata.title })
})



app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337...')
})
=======
    return response.render('index', { showdata })
})

app.get('/season/:number', (request, response) =>{
    const seasons = showdata.seasons.find((season) => season.number === parseInt(request.params.number))

    return response.render('season', { seasons })
})

app.all('*', (request, response) => {
    return response.sendStatus(404)
}) 

app.listen(1337, () => {
    console.log('Listening on http://localhost:1337')
})
>>>>>>> b8cb52e0a2320042f0488674bb5a3e9beb7e3db3
