const express = require('express');

const DogController = require('./controllers/dog');
const BreederController = require('./controllers/breeder');
const AdminController = require('./controllers/admin');

module.exports = function (app) {
  const apiRoutes = express.Router();
  const dogRoutes = express.Router();
  const breederRoutes = express.Router();
  const adminRoutes = express.Router();

  /*------------------------------------------------------------------------------
    PRODUCT ROUTE
  ------------------------------------------------------------------------------*/

  apiRoutes.use('/admin', adminRoutes);
  adminRoutes.get('/', AdminController.allDataGet);

  apiRoutes.use('/dog', dogRoutes);
  dogRoutes.get('/', DogController.allDogGet);
  dogRoutes.get('/:id', DogController.oneDogGet);
  dogRoutes.post('/', DogController.saveDog);

  apiRoutes.use('/breeder', breederRoutes);
  breederRoutes.get('/', BreederController.allBreederGet);
  breederRoutes.get('/:id', BreederController.oneBreederGet);
  breederRoutes.post('/', BreederController.saveBreeder);

  app.use('/api', apiRoutes);
};
