export interface IUser{
    userid: string,
    name: string,
    gender: string
}

class User implements IUser{
    gender: string;
    name: string;
    userid: string;

    constructor(gender: string, name: string, userid: string) {
        this.gender = gender;
        this.name = name;
        this.userid = userid;
    }
}

export function getUsersArray() {
    return [
        new User ('man','John', '127e4567-e89b-12d3-a458-426614174000' ),
        new User ('woman','Anna', '127e4567-e89a-12f3-a458-327395154000' )
    ];
}