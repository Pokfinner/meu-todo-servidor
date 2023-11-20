const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
    res.send('Servidor do Diogo!');
});

app.get('/todos', (req, res) => {

    const todos = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        }
    ]

    res.json(todos)

})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});