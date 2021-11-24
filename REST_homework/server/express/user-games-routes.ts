import express from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { userGamesStorage } from '../bd/userGames';

const userGamesRouter = express.Router();

userGamesRouter.get('/users/:id/games', (req: express.Request, res: express.Response) => {
    let allUserGames = userGamesStorage.getAllUserGames(+req.params.id);
    res.send({games: allUserGames});
});

userGamesRouter.post('/users/:id/games', (req: express.Request, res: express.Response) => {
    userGamesStorage.addUserGameByIds(+req.params.id, +req.body.id);
    res.send("done");
});

userGamesRouter.post('/users/:id/games/:gameid', (req: express.Request, res: express.Response) => {
    let userId: number = +req.params.id;
    let gameId: number = +req.params.gameid;

    let foundRecord = userGamesStorage.findRecordByUserIdAndGameId(userId, gameId);
    if (foundRecord !== undefined) {
        userGamesStorage.updatePlayTime(foundRecord, req.body.playTime);
        res.send(foundRecord);
    }
    else{
        res.send('No such record');
    }
});

userGamesRouter.delete('/users/:id/games/:gameid', (req: express.Request, res: express.Response) => {
    userGamesStorage.deleteRecordByUserIdAndGameId(+req.params.id, +req.params.gameid);
    res.send("done");
});

userGamesRouter.get('/static/text/:file', (req: express.Request, res: express.Response) => {
    createReadStream(join(__dirname, req.params.file)).pipe(res);
});

export { userGamesRouter };