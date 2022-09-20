#!/usr/bin/env node

'use strict'

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const output = fs.readFileSync(path.join(__dirname, 'output'), 'utf8')

console.log(output)
