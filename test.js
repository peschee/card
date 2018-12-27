describe('test card.js output', () => {
  let consoleSpy
  let consoleOutput

  beforeEach(() => {
    jest.resetModules()
    consoleSpy = jest.spyOn(console, 'log').mockImplementationOnce((message) => {
      consoleOutput += message
    })
  })

  afterEach(() => {
    expect(console.log).toHaveBeenCalledTimes(1)
    consoleSpy.mockRestore()
  })

  test('calling card.js should contain github url', () => {
    require('./bin/card.js')

    expect(consoleOutput).toMatch(/https:\/\/github\.com\/peschee/)
  })

  test('calling card.js should contain twitter url', () => {
    require('./bin/card.js')

    expect(consoleOutput).toMatch(/https:\/\/twitter\.com\/peschee/)
  })

  test('calling card.js should contain card information', () => {
    require('./bin/card.js')

    expect(consoleOutput).toMatch(/npx peschee/)
  })
})
