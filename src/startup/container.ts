import { createContainer, asClass, asValue, asFunction } from 'awilix';

// Setting app
import configs from '../configs';
import server from '.';
import routes from '../routes';

// Repositories
import { ClientRepository } from '../repositories';

// Services
import { ClientService } from '../services';

// Controllers
import { ClientController } from '../controllers';

// Routes
import { ClientRoutes } from '../routes/index.routes';

const container = createContainer();

// Container injections
container
  .register({
    // Injections settings
    configs: asValue(configs),
    server: asClass(server).singleton(),
    routes: asFunction(routes).singleton(),
  })
  .register({
    // Injecctions repositories
    ClientRepository: asClass(ClientRepository).singleton(),
  })
  .register({
    // Injecctions services
    ClientService: asClass(ClientService).singleton(),
  })
  .register({
    // Injecctions controllers
    ClientController: asClass(ClientController.bind(ClientController)).singleton(),
  })
  .register({
    // Injections routes
    ClientRoutes: asFunction(ClientRoutes).singleton(),
  });

export default container;
