import { Request, Response } from 'express';

let _clientService: any = null;

export default class ClientController {
  constructor({ ClientService }: any) {
    _clientService = ClientService;
  }

  public async getAllClients(req: Request, res: Response): Promise<Response> {
    const data = await _clientService.getAllClients();
    return res.status(data.status).send(data);
  }

  public async getAverageAge(req: Request, res: Response): Promise<Response> {
    const data = await _clientService.getAverageAge();
    return res.status(data.status).send(data);
  }

  public async createClient(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const data = await _clientService.createClient(body);
    return res.status(data.status).send(data);
  }
}
