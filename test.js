import test from 'ava'

test.before((t) => {
  t.context.log = ''
  console.log = (msg) => {
    t.context.log += msg
  }
})

test.afterEach((t) => {
  t.context.log = ''
})

test('calling card.js should contain github url', async (t) => {
  await import('./bin/card.js')

  t.true(t.context.log.match(/https:\/\/github\.com\/peschee/) !== null)
})

test('calling card.js should contain twitter url', async (t) => {
  await import('./bin/card.js')

  t.true(t.context.log.match(/https:\/\/twitter\.com\/peschee/) !== null)
})

test('calling card.js should contain card information', async (t) => {
  await import('./bin/card.js')

  t.true(t.context.log.match(/npx peschee/) !== null)
})
