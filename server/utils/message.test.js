var expect = require("expect");

var {generateMessage, generateLocationMessage} = require("./message");

describe("generateMessage", () => {
    it('should generate correct message', () => {
        var from = 'Buba';
        var text = 'texto';
        var testMessage = {
            from, 
            text
        }
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject(testMessage);
    });
});

describe("generateLocationMessage", () => {
    it('should generate correct location', () => {
        var from = 'Dev';
        var url = 'https://www.google.com/maps?q=15,19';
        var latitude = 15;
        var longitude = 19;
        var obj = {from, url};
        var message = generateLocationMessage(obj.from, latitude, longitude);
        

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject(obj);
    });
});
