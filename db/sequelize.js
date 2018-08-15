const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'|'sqlite'|'postgres'|'mssql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

// INSERT INTO anims (category, feClass, dispName, URL, dlName, weapons, srcName) VALUES (

const Anims = sequelize.define('anim', {
  category: Sequelize.STRING,
  feClass: Sequelize.STRING,
  dispName: Sequelize.STRING,
  URL: Sequelize.STRING,
  dlName: Sequelize.STRING,
  weapons: {
      type: Sequelize.JSON,
      defaultValue: ""
  },
  srcName: Sequelize.STRING
});

function addAnim(category, feClass, dispName, URL, dlName, srcName) {
    sequelize.sync()
        .then(() => Anims.create({
            category: category,
            feClass: feClass,
            dispName: dispName,
            URL: URL,
            dlName: dlName,
            srcName: srcName
        }));
};

// INSERT INTO weapons (weaponsAvail) VALUES ('["sword"]')

const Weapons = sequelize.define('weapons', {
    weaponsAvail: sequelize.JSON
});

function addWep(weaponArr) {
    sequelize.sync()
    .then(() => Weapons.create({
        weaponsAvail: weaponArr
    }));
};

//call for each anim to be added.
addAnim();

addWep('["sword"]');

sequelize.sync()
  .then(() => Anims.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });