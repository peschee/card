'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: 'Peter Siska',
  handle: 'peschee',
  work: 'Executive Board Member at Inventage AG',
  workUrl: 'https://www.inventage.com',
  twitter: 'https://twitter.com/peschee',
  npm: 'https://npmjs.com/~peschee',
  github: 'https://github.com/peschee',
  linkedin: 'https://linkedin.com/in/pesche',
  npx: 'npx peschee',
  labelWork: 'Work:',
  labelTwitter: 'Twitter:',
  labelnpm: 'npm:',
  labelGitHub: 'GitHub:',
  labelLinkedIn: 'LinkedIn:',
  labelCard: 'Card:'
}

// Actual strings we're going to output
const newline = '\n'
const heading = chalk.white(`           ${chalk.bold(data.name)} / ${data.handle}`)
let working = chalk.white(`${chalk.bold(data.labelWork)}      ${data.work}`)
working += chalk.white(`${newline}           ${data.workUrl}`)
const twittering = chalk.white(`${chalk.bold(data.labelTwitter)}   ${data.twitter}`)
const npming = chalk.white(`${chalk.bold(data.labelnpm)}       ${data.npm}`)
const githubing = chalk.white(`${chalk.bold(data.labelGitHub)}    ${data.github}`)
const linkedining = chalk.white(`${chalk.bold(data.labelLinkedIn)}  ${data.linkedin}`)
const carding = chalk.white(`${chalk.bold(data.labelCard)}      ${data.npx}`)

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + newline + // data.labelWork + data.work + data.workUrl
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               npming + newline + // data.labelnpm + data.npm
               newline + carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
