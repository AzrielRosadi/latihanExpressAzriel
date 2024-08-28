const express = require('express')
const app = express()
const port = 3000;

app.use('/api/goals', require("./routes/goalRoutes"))

app.listen(port, () => console.log(`Server berjalan di port ${port}`))