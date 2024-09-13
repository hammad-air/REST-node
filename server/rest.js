const express = require('express');
const users = require('./MOCK_DATA.json')
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/users',(req, res) =>{
    const html = `<ul>${users.map((users) => `<li>${users.email}</li>`
    ).join('')}</ul>`;
    res.send(html)
})

app.get('/api/users',(req, res) =>{
    return res.json(users)
})

app.get('/api/users/:id',(req, res) =>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user)
})



// Start the server
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
