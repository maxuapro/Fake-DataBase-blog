const express = require('express')
const app = express()

const port = 3000

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

const db = [
    {
        
        title: "First blogpost",
        date: "2021-03-08",
        text: "This blog is built entirely on fake data base! Press Add new button to add a new blog post."
    }
]

app.get('/', (req, res) => {
    res.render('index.ejs', { blogposts: [ ...db ].reverse() })
})

app.get('/add', (req, res) => {
    res.render('add.ejs')
})

app.get('/new', (req, res) => {
    res.send('sdfsdfsdf')
})

app.post('/', (req, res) => {    
    db.push({
        title: req.body.title,
        date: new Date().toLocaleDateString(),
        text: req.body.text
    })
    res.redirect('/')
})

app.listen(port, () => console.log(`Listening on ${port}`))