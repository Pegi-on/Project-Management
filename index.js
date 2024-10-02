const express = require("express"); //nhúng express
const app = express();
const port = 3000;
const routeClient = require("./routers/client/index.route");

app.set("views", "./views");
app.set("view engine", "pug"); //template engine sử dụng: pug

routeClient.routeClient(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
