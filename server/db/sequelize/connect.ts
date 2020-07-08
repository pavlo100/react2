import { sequelize } from './models';

export default () => {
  sequelize
    .sync()
    .then(() => {
      console.log('Successfully connected to sequelize database');
    }, (err: Error) => {
      console.log('Unable to connect to the sequelize database: ', err);
    });
};
