import express from 'express';
import { gameRouter } from './game-routes';
import { userGamesRouter } from './user-games-routes';
import { userRouter } from './user-routes';

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(gameRouter);
app.use(userRouter);
app.use(userGamesRouter);

app.listen(3000, () => {
    console.log('Express started');
});