import express from 'express';
import { Game, gameStorage } from '../bd/games';
import { userGamesStorage } from '../bd/userGames';

const gameRouter = express.Router();

gameRouter.get('/games/:id', (req: express.Request, res: express.Response) => {
    let foundGame: Game | undefined = gameStorage.findGameById(+req.params.id);
    foundGame !== undefined ? res.send(foundGame) : res.status(404).send("Not found");
});

gameRouter.get('/games', (req: express.Request, res: express.Response) => {
    res.send(gameStorage.getAll());
});

gameRouter.post('/games', (req: express.Request, res: express.Response) => {
    let newGameInfo = req.body.game;
    gameStorage.addGame(newGameInfo.title, newGameInfo.description, newGameInfo.ageRating, newGameInfo.images);
    let newGameId = gameStorage.getLast()!.id;
    res.send(JSON.stringify(newGameId));
});

gameRouter.put('/games/:id', (req: express.Request, res: express.Response) => {
    let foundGame: Game | undefined = gameStorage.findGameById(+req.params.id);
    if (foundGame === undefined) {
        res.status(404).send("Not found");
    }
    else {
        let updateGameInfo = req.body.game;
        gameStorage.updateGame(foundGame, updateGameInfo.title, updateGameInfo.description, updateGameInfo.ageRating, updateGameInfo.images);
        res.send(foundGame);
    }
});

gameRouter.delete('/games/:id', (req: express.Request, res: express.Response) => {
    let foundGameId: number = +req.params.id;
    gameStorage.deleteGameById(foundGameId);
    userGamesStorage.deleteRecordsByGameId(foundGameId);
    res.send("done");
});

export { gameRouter };