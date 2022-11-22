const dotenv = require('dotenv');
const  connection  = require("./Config/database");
const app = require("./app");

dotenv.config({ path: "./Config/.env" });
connection();

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
})