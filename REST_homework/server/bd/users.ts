let USER_ID: number = 0;

interface User {
    id: number,
    username: string
}

class UserStorage {

    users: User[];

    constructor() {
        this.users = [];
    }

    findUserById(id: number): User | undefined {
        return this.users.find(user => user.id == id);
    }

    findUserByUsername(username: string): User | undefined {
        return this.users.find(user => user.username == username);
    }

    addUser(username: string) {
        let newUser: User = {
            id: USER_ID++,
            username: username
        }
        this.users.push(newUser);
    }

    updateUser(user: User, username:string) {
        user.username = username;
    }

    deleteUserById(id: number) {
        let filteredUsers = this.users.filter(user => user.id != id);
        this.users = (filteredUsers !== undefined ? filteredUsers : []); 
    }

    getLast(): User | undefined {
        return this.users.length > 0 ? this.users[this.users.length-1] : undefined;
    }

}

let userStorage: UserStorage = new UserStorage();

userStorage.addUser("xXx_sephiroth1997_xXx");
userStorage.addUser("Gregor");

export {User, UserStorage, userStorage};