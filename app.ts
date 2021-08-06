import bcrypt from 'bcrypt';
import express from 'express';
import "reflect-metadata";
import { createConnection, getConnection } from "typeorm";
import { User } from "./src/entity/User";
import { StatusCodes } from 'http-status-codes';

const app = express();
createConnection();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        test: 5,
    });
});

const apiv1Router = express.Router();
const apiv1UserRouter = express.Router();
apiv1UserRouter.get('/read', async (req, res) => {
    const connection = getConnection();
    
    const users = await connection.manager.find(User);
    
    res.json({
        data: {
            users: users,
        },
    });
});
apiv1UserRouter.post('/login', async (req, res) => {
    const response = {
        success: false,
        data: {
            message: '',
        },
    };
    
    const { username, password } = req.body;
    
    if(!username || !password)
    {
        response.data.message = 'Invalid username or password';
        
        res
            .status(StatusCodes.BAD_REQUEST)
            .json(response)
        ;
        
        return;
    }
    
    const connection = getConnection();
    const userRepo = connection.getRepository(User);
    const user = await userRepo.findOne({ username: username, });
    
    if(!user)
    {
        response.data.message = `User ${username} does not exist`;
        
        // FIXME: Security hole
        res
            .status(StatusCodes.NOT_FOUND)
            .json(response)
        ;
        
        return;
    }
    
    if(!bcrypt.compareSync(password, user.password))
    {
        response.data.message = `Password for user ${username} incorrect`;
        
        res
            .status(StatusCodes.UNAUTHORIZED)
            .json(response)
        ;
        
        return;
    }
    
    response.success = true;
    
    res
        .status(StatusCodes.OK)
        .json(response)
    ;
});

app.use('/api/v1', apiv1Router);
apiv1Router.use('/user', apiv1UserRouter);

app.listen(3000);
