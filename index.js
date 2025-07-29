const express = require("express");
const app = express();
const productRoutes = require("./routes/products");
const feedbackRoutes = require("./routes/feedbacks");
const cors = require('cors')

app.use(express.json());

app.use(cors({origin: '*'}))


app.use("/products", productRoutes);
app.use("/feedbacks", feedbackRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
