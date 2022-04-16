import express from 'express';

export default class Server {
  _configs: any;
  _express: any;

  constructor({ configs, routes }: any) {
    this._configs = configs;
    this._express = express().use(routes);
  }

  async start() {
    try {
      const { PORT, APPLICATION_NAME } = this._configs;

      return await this._express.listen(PORT, () => {
        console.log(`${APPLICATION_NAME} running on port ${PORT}`);
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
