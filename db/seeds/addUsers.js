const generate = require('../generate.js');


exports.seed = async (knex) => {
  console.log('Beginning users data seed...');
  console.time('seed users time');
  const data = generate.generateManyUsers();
  knex.truncate('users');
  await knex.batchInsert('users', data);
  await console.timeEnd('seed users time');
};
