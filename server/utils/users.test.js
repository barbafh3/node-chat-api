const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: 1,
            name: 'bile',
            room: 'a'
        },
        {
            id: 2,
            name: 'blake',
            room: 'b'
        },
        {
            id: 3,
            name: 'james',
            room: 'a'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'buba',
            room: 'a'
        }
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove user', () => {
        var id = 1;
        var user = users.removeUser(id);
        expect(user.id).toBe(id);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var id = 99;
        var user = users.removeUser(id);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var id = 1;
        var user = users.getUser(id);
        expect(user.id).toBe(1);
    });

    it('should not find user', () => {
        var id = 99;
        var user = users.getUser(id);
        expect(user).toBeFalsy();
    });

    it('should return names for room a', () => {
        var userList = users.getUserList('a');
        expect(userList).toEqual(['bile', 'james'])
    });

    it('should return names for room b', () => {
        var userList = users.getUserList('b');
        expect(userList).toEqual(['blake'])
    });
});