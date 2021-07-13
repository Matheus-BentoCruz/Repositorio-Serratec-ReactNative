import * as SQlite from 'expo-sqlite';
import { BaseModel, types } from 'expo-sqlite-orm';

export default class Posts extends BaseModel {
    constructor(obj) {
        super(obj)
    }

    static get database() {
        return async () => SQlite.openDatabase('database.db')
    }

    static get tableName() {
        return 'posts'
    }

    static get columnMapping() {
        return {
            id: {type: types.INTEGER, primary_key: true},
            userId: {type: types.INTEGER},
            title: {type: types.TEXT},
            body: {type: types.TEXT},
        };

    }
}