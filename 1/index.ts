import {getUsersArray, IUser} from "./users.js";
import {getUsersInfoArray} from "./userInfo.js";

let usersArray = getUsersArray();
const usersInfoArray = getUsersInfoArray();

interface IUserResult{
    name: string;
    position: string;
    age: number;
    gender: string;
}

class UserResult implements IUserResult{
    name: string;
    position: string;
    age: number;
    gender: string;

    constructor(name: string,position: string, age: number, gender: string ) {
        this.name = name;
        this.position = position;
        this.age = age;
        this.gender = gender;
    }
}

interface INewUserInfo{
    userid: string,
    name: string,
    birthdate: string,
    age: number,
    position: string
}

class NewUserInfo implements INewUserInfo{
    userid: string;
    name: string;
    birthdate: string;
    age: number;
    position: string;

    constructor(userid: string, name: string, birthdate: string, age: number, position: string) {
        this.userid = userid;
        this.name = name;
        this.birthdate = birthdate;
        this.age = age;
        this.position = position;
    }
}

function getUsersJobPositions(users: IUser[]): IUserResult[] {
    return users.map(
        user => {
            for (let i = 0; i < usersInfoArray.length; i++) {
                if (user.userid == usersInfoArray[i].userid) {

                    return new UserResult(
                        user.name,
                        usersInfoArray[i].organization.position,
                        usersInfoArray[i].age,
                        user.gender);
                }
            }

            return null;
        }
    );
}

const usersPositions = getUsersJobPositions(usersArray);
console.log('usersPositions', usersPositions);

