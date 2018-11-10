var expect = require("expect");

var {generateMessage} = require("./message");

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