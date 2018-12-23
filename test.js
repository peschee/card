
describe('test card.js output', () => {
    test('calling card.js should contain github url', () => {
        let output = '';

        const spy = jest.spyOn(console, 'log').mockImplementationOnce((message) => output += message)

        require('./bin/card.js');

        expect(console.log).toHaveBeenCalledTimes(1);
        expect(output).toMatch(/https:\/\/github\.com\/peschee/);

        spy.mockRestore();
    });
});
