import { Game, gameStorage, GameStorage } from "./games";
import { userStorage, UserStorage } from "./users";

interface UserGame {
    userId: number;
    gameId: number;
    playTime: number;  // hours
    deleted: boolean;
}

class UserGamesStorage {
    userGames: UserGame[] = [];
    userStorage: UserStorage
    gameStorage: GameStorage

    constructor(gameStorage: GameStorage, userStorage: UserStorage) {
        this.gameStorage = gameStorage;
        this.userStorage = userStorage;
    }

    addUserGameByNames(username: string, gameTitle: string, playTime: number): void {
        let foundGame = gameStorage.findGameByTitle(gameTitle);
        let foundUser = userStorage.findUserByUsername(username);
        this.addUserGameByIds(foundUser!.id, foundGame!.id, playTime);        
    }

    addUserGameByIds(userId: number, gameId: number, playTime: number=0) {
        let foundRecord = this.findRecordByUserIdAndGameId(userId, gameId)
        if (foundRecord === undefined) {
            let newItem: UserGame = {
                userId: userId,
                gameId: gameId,
                playTime: playTime,
                deleted: false
            }
            this.userGames.push(newItem);
        }
        else {
            foundRecord.deleted = false;
            foundRecord.playTime += playTime;
        }
    }

    deleteRecordsByGameId(gameId: number) {
        let filteredUserGames = this.userGames.filter(userGame => userGame.gameId != gameId);
        this.userGames = (filteredUserGames !== undefined ? filteredUserGames : []); 
    }

    getAllUserGames(userId: number) {
        let theUserGames = this.userGames.filter(userGame => userGame.userId == userId && !userGame.deleted);
        let result = [];
        for (let record of theUserGames) {
            result.push({
                gameId: record.gameId,
                playTime: record.playTime
            })
        }
        return result;
    }

    findRecordByUserIdAndGameId(userId: number, gameId: number): UserGame | undefined {
        return this.userGames.find(userGame => !userGame.deleted && userGame.userId == userId && userGame.gameId == gameId);
    }

    deleteRecordByUserIdAndGameId(userId: number, gameId: number) {
        let userGame = this.findRecordByUserIdAndGameId(userId, gameId);
        if (userGame !== undefined) {
            userGame.deleted = true;
        }
    }

    updatePlayTime(record: UserGame, playTime: number) {
        if (record !== undefined && !record.deleted) {
            record.playTime += playTime;
        }
    }
}

let userGamesStorage = new UserGamesStorage(gameStorage, userStorage);

userGamesStorage.addUserGameByNames("xXx_sephiroth1997_xXx", "FINAL FANTASY XIV Online", 400);
userGamesStorage.addUserGameByNames("xXx_sephiroth1997_xXx", "Mirror's Edge", 20);
userGamesStorage.addUserGameByNames("xXx_sephiroth1997_xXx", "Titanfall 2", 10);

userGamesStorage.addUserGameByNames("Gregor", "Titanfall 2", 175);
userGamesStorage.addUserGameByNames("Gregor", "Deus Ex: Game of the Year Edition", 230);

export { userGamesStorage };