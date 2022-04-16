export default class ClientService {
  _clientRepository: any;

  constructor({ ClientRepository }: any) {
    this._clientRepository = ClientRepository;
  }

  public async getAllClients() {
    return await this._clientRepository.getAllClients();
  }

  public async getAverageAge() {
    return await this._clientRepository.getAverageAge();
  }

  public async createClient(entity: any) {
    return await this._clientRepository.createClient(entity);
  }
}
