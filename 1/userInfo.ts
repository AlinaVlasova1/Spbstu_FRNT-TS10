interface IUserInfo{
    userid: string,
    name: string,
    birthdate: string,
    age: number,
    organization: {
        name?: string,
        position: string
    }
}

class UserInfo implements IUserInfo{
    age: number;
    birthdate: string;
    name: string;
    organization: Organization;
    userid: string;

    constructor(age: number, birthdate: string, name: string, organization: Organization, userid: string) {
        this.age = age;
        this.birthdate = birthdate;
        this.name = name;
        this.organization = organization;
        this.userid = userid;
    }
}

class Organization{
    name: string;
    position: string;

    constructor(name: string, position: string ) {
        this.name = name;
        this.position = position;
    }
}

export function getUsersInfoArray() {
    return [
        new UserInfo(40,'1982-02-17T21:00:00.000Z', 'John', new Organization('Amazon','General manager'
        ), '127e4567-e89b-12d3-a458-426614174000'),
        new UserInfo(34,'1988-02-17T21:00:00.000Z', 'Anna', new Organization('Amazon','Manager'
        ), '127e4567-e89a-12f3-a458-327395154000')
    ]
}
