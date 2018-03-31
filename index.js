import express from 'express'
import engine from 'react-engine' 
import path from 'path' 

import config from "./config"

const app = express() 
app.use(express.static(path.join(__dirname, 'public')))

app.engine('.jsx', engine.server.create()) 

app.set('views', path.join(__dirname, 'src')) 

app.set('view engine', 'jsx') 

app.set('view', engine.expressView)
app.get('/', (req, res) => res.render('index', { title : 'View Engine React | JSX' }))
app.listen(config.port, () => console.log(`Server running in ${config.serverUrl}`))


