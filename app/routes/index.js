var express = require("express");

function setup(app, handlers) {
// ########## Example Routes ##########
/*
  var examplesRouter = express.Router();  
  examplesRouter.get("/", handlers.examples.getList);
  app.use("/api/examples", examplesRouter);
*/
// ########## More Routes ##########
  var usersRouter = express.Router();  
  usersRouter.get("/", handlers.users.getList);
  usersRouter.post("/", handlers.users.add);
  app.use("/api/users", usersRouter);

  var productsRouter = express.Router();  
  productsRouter.get("/", handlers.products.getList);
  app.use("/api/products", productsRouter);
  
};

exports.setup = setup;