import container from './startup/container';
const app = container.resolve('server');

async function appStart() {
  try {
    console.log(JSON.stringify(container.registrations));

    await app.start();
  } catch (error) {
    console.error(error);
    return error;
  }
}

appStart();
