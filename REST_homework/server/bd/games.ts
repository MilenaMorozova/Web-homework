import { generateRandomString } from "ts-randomstring/lib"

let GAME_ID: number = 0;

interface Game {
    id: number;
    title: string;
    description: string;
    images: Set<string>;
    ageRating: string;
}

class GameStorage {
    games: Game[];

    constructor() {
        this.games = [];
    }

    findGameByTitle(title:string): Game | undefined {
        return this.games.find(game => game.title == title);
    }

    findGameById(id:number): Game | undefined {
        return this.games.find(game => game.id == id);
    }

    addGame(title:string, description: string, ageRating: string, images: Set<string>) {
        let newGame: Game = {
            id: GAME_ID++,
            title: title,
            description: description,
            images: images,
            ageRating: ageRating
        };
        this.games.push(newGame);
    }

    updateGame(game:Game, title:string, description: string, ageRating: string, images: Set<string>) {
        game.title = title;
        game.description = description;
        game.ageRating = ageRating;
        game.images = images;
    }

    deleteGameById(id:number) {
        let filteredGames = this.games.filter(game => game.id != id);
        this.games = (filteredGames !== undefined ? filteredGames : []); 
    }
    
    getAll(): Game[] {
        return this.games;
    }

    getLast(): Game | undefined {
        return this.games.length > 0 ? this.games[this.games.length-1] : undefined;
    }
};

function randomImages(): Set<string> {
    let images: Set<string> = new Set();
    const rndInt = Math.floor(Math.random() * 6) + 1;
    for (let i = 0; i < rndInt; i++) {
        images.add(generateRandomString());
    }
    return images;
};

let gameStorage = new GameStorage();

gameStorage.addGame("Mirror's Edge", 
            "In a city where information is heavily monitored, couriers called Runners transport sensitive data. "
            +"In this seemingly utopian paradise, a crime has been committed, & you are being hunted. "
            +"You are a Runner called Faith and this innovative first-person action-adventure is your story.",
            "T",
            randomImages());
gameStorage.addGame("Deus Ex: Game of the Year Edition",
                "The year is 2052 and the world is a dangerous and chaotic place. "
                +"Terrorists operate openly - killing thousands; drugs, disease and pollution kill even more. "
                +"The world's economies are close to collapse and the gap between the insanely wealthy and the desperately poor grows ever wider.",
                "M",
                randomImages());
gameStorage.addGame("Titanfall 2",
                "Respawn Entertainment gives you the most advanced titan technology in its new, single player campaign & multiplayer experience. "
                +"Combine & conquer with new titans & pilots, deadlier weapons, & customization and progression systems "
                +"that help you and your titan flow as one unstoppable killing force.",
                "M",
                randomImages());
gameStorage.addGame("FINAL FANTASY XIV Online",
                "Take part in an epic and ever-changing FINAL FANTASY as you adventure and explore with friends from around the world.",
                "T",
                randomImages());


export {Game, GameStorage, gameStorage};