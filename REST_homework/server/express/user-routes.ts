import express from 'express';
import { User, userStorage } from '../bd/users';


const userRouter = express.Router();

userRouter.get('/users/:id', (req: express.Request, res: express.Response) => {
    let foundUser: User | undefined = userStorage.findUserById(+req.params.id);
    foundUser !== undefined ? res.send(foundUser) : res.status(404).send("Not found");
});

userRouter.post('/users', (req: express.Request, res: express.Response) => {
    userStorage.addUser(req.body.username);
    let userId = userStorage.getLast()!.id;
    res.send(JSON.stringify(userId));
});

userRouter.put('/users/:id', (req: express.Request, res: express.Response) => {
    let foundUser: User | undefined = userStorage.findUserById(+req.params.id);
    if (foundUser === undefined) {
        res.send("Not found");
    }
    else {
        userStorage.updateUser(foundUser, req.body.username);
        res.send(foundUser);
    }
});

userRouter.delete('/users/:id', (req: express.Request, res: express.Response) => {
    userStorage.deleteUserById(+req.params.id);
    res.send("done");
});

export { userRouter };