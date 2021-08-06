import express from 'express';
import "reflect-metadata";
import {createConnection, getConnection} from "typeorm";
import {User} from "./src/entity/User";
import bcrypt from 'bcrypt';

const app = express();
createConnection();

app.get('/', (req, res) => {
    res.json({
        test: 5,
    });
});

const apiv1Router = express.Router();
apiv1Router.get('/user/read', async (req, res) => {
    const connection = getConnection();
    
    const users = await connection.manager.find(User);
    
    res.json({
        data: {
            users: users,
        },
    });
});
// Testing password hashing
apiv1Router.get('/password', async (req, res) => {
    const connection = getConnection();
    
    const password = 'password123';
    const hash = bcrypt.hashSync(password, 10);
    
    res.json({
        data: {
            password: password,
            hash: hash,
            compareTrue: bcrypt.compareSync(password, hash),
            compareFalse: bcrypt.compareSync('not the password', hash),
        },
    });
});

app.use('/api/v1', apiv1Router);

app.listen(3000);
