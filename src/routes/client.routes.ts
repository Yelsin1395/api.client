import { Router } from 'express';

export default function ({ ClientController }: any) {
  const router = Router();

  router.get('/list', ClientController.getAllClients);
  router.get('/averageAge', ClientController.getAverageAge);
  router.post('/create', ClientController.createClient);

  return router;
}
