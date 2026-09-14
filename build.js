'use strict'

// Pull in our modules
import { Chalk } from 'chalk'
import boxen from 'boxen'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Output is prebuilt and shipped, so force ANSI colors even when the build runs
// without a TTY (git hooks, CI). Level 1 = basic 16 colors, all this card needs.
const chalk = new Chalk({ level: 1 })

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
  work: 'Co-CEO at Inventage AG',
  workUrl: 'https://inventage.com',
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
