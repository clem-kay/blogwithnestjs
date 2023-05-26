import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../contants';
import { databaseConfig } from './database.config';
import { User } from 'src/modules/users/user.entity';
import { Post }  from '../../modules/posts/post.entity'

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development;
           break;
        case TEST:
           config = databaseConfig.test;
           break;
        case PRODUCTION:
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        //this is where we add our model
        sequelize.addModels([User,Post]);
        await sequelize.sync();
        return sequelize;
    },
}];