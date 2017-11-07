export default function (sequelize, Sequelize) {
  return sequelize.define('role', {
    id : {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    agent: {
      type: Sequelize.STRING,
      unique: 'agent_role_subject'
    },
    agent_id: {
      type: Sequelize.INTEGER,
      unique: 'agent_role_subject'
    },
    subject: {
      type: Sequelize.STRING,
      unique: 'agent_role_subject'
    },
    subject_id: {
      type: Sequelize.INTEGER,
      unique: 'agent_srole_subject',
      references: null
    },
    role: {
      type: Sequelize.STRING,
      unique: 'agent_role_subject'
    },
    contract_id: {
      type: Sequelize.INTEGER,
      unique: 'agent_srole_subject',
      references: null
    }
  });
}
