import { v4 } from 'uuid';
import { setBuildSpec } from '../common/query.mapper';

interface IClient {
  image_url: string;
  name: string;
  surname: string;
  date_of_birth: string;
}

export default class ClientRepository {
  _db: any;
  constructor({ configs }: any) {
    this._db = configs.db;
  }

  public async getAllClients() {
    try {
      const queryString = 'SELECT * FROM dboClients ORDER BY name ASC';
      const data = await this._db.query(queryString);
      return {
        status: 200,
        data: data.rows,
      };
    } catch (error) {
      console.error(error);
      return {
        status: 400,
        data: error,
      };
    }
  }

  private _average(values: any[]): number {
    let ageSum = 0;
    let itemsSum = 0;

    for (const i in values) {
      const { age } = values[i];
      ageSum = ageSum + age;
      itemsSum = parseInt(i) + 1;
    }

    return parseInt(`${ageSum / itemsSum}`);
  }

  public async getAverageAge() {
    try {
      const queryString = 'SELECT * FROM dboClients ORDER BY id ASC';
      const data = await this._db.query(queryString);

      if (data.rows.length === 0) {
        throw new Error('Data is empty.');
      }

      const result = this._average(data.rows);

      return {
        status: 200,
        data: { averageAge: result },
      };
    } catch (error) {
      console.error(error);
      return {
        status: 400,
        data: error,
      };
    }
  }

  private _getAge(dateString: string): number {
    let today = new Date();
    let dateBirth = new Date(dateString);
    const age = today.getFullYear() - dateBirth.getFullYear();

    if (age < 0) {
      throw new Error('Insert a valid date.');
    }

    return parseInt(`${age}`);
  }

  public async createClient(entity: IClient) {
    try {
      const dateIso = new Date(entity.date_of_birth).toISOString();
      const ageClient = this._getAge(dateIso);

      const entityDb = {
        id: v4(),
        image_url: entity.image_url,
        name: entity.name,
        surname: entity.surname,
        age: ageClient,
        date_of_birth: dateIso,
      };

      const querySpec = 'INSERT INTO dboClients (<<items>>) VALUES (<<values>>)';
      const buildSpec = setBuildSpec(querySpec, entityDb);
      await this._db.query(buildSpec.queryString, buildSpec.values);
      return {
        status: 201,
        data: { newId: entityDb.id },
      };
    } catch (error) {
      console.error(error);
      return {
        status: 400,
        data: error,
      };
    }
  }
}
