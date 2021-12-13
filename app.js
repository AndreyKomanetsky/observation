const express = require('express')
config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({extended:true}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;

async function start(){
    try {
        await mongoose.connect(process.env.MONGODB_URI || config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(port, () => console.log(`App has been started on port ${port} ...`))
    } catch (e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()