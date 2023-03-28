import { DataTypes } from 'sequelize';
import database from '@/database';

const User = database.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: DataTypes.STRING,
});

export default User;
