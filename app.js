const express = require('express')
const path = require('path')
const app = express()

const port = 3000
app.use(express.static(path.join(__dirname, '/')))

app.listen(port, (error) => {
  console.log(`Server has started successfully!`)
})


// This is one way to display image and text 
// app.get('/', (req, res) => {
//   res.send(`<!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>First Express App</title>
//       <style>
//         img {
//           width: 205px;
//           border-radius: 125px;
//         }
//       </style>
//     </head>
//     <body>
//       <img src="./git-profile-pic.jpg" alt="" />
//       <h3>
//         My name is AbdulHadi Bavani & I am currently pursuing B.E. in Computer
//         Engineering from RCOE
//       </h3>
//     </body>
//   </html>
// `)
//})

// Here is a much simpler way 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, `index.html`))
})

app.get('/skills', (req, res) => {
  res.sendFile(path.join(__dirname, `skills.html`))
})
