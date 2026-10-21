import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
    
app.get('/about', (req, res) => {
  res.send('Hello about !')
})


const users = [ 

    
  {
    "id": 1,
    "name": "Abir Hossain",
    "email": "abir@example.com",
    "age": 20,
    "phone": "01700000001",
    "address": "Dhaka, Bangladesh",
    "role": "Developer"
  },
  {
    "id": 2,
    "name": "Rahim Ahmed",
    "email": "rahim@example.com",
    "age": 22,
    "phone": "01700000002",
    "address": "Sylhet, Bangladesh",
    "role": "Designer"
  },
  {
    "id": 3,
    "name": "Sadia Islam",
    "email": "sadia@example.com",
    "age": 21,
    "phone": "01700000003",
    "address": "Khulna, Bangladesh",
    "role": "Student"
  },
  {
    "id": 4,
    "name": "Tanvir Hasan",
    "email": "tanvir@example.com",
    "age": 24,
    "phone": "01700000004",
    "address": "Rajshahi, Bangladesh",
    "role": "Engineer"
  },
  {
    "id": 5,
    "name": "Nusrat Jahan",
    "email": "nusrat@example.com",
    "age": 23,
    "phone": "01700000005",
    "address": "Chattogram, Bangladesh",
    "role": "Teacher"
  }

]


app.get('/users', (req, res) => {
  res.send(users)
})


app.get('/contact', (req, res) => {
  res.send('Hello contact !')
})



app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})
