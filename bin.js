#!/usr/bin/env node
const whichPMRuns = require('which-pm-runs')
const boxen = require('boxen')

const argv = process.argv.slice(2)
if (argv.length === 0) {
  console.log('Please specify the wanted package manager: only-disallow <npm|cnpm|pnpm|yarn>')
  process.exit(1)
}
const wantedPM = argv[0]
if (wantedPM !== 'npm' && wantedPM !== 'cnpm' && wantedPM !== 'pnpm' && wantedPM !== 'yarn') {
  console.log(`"${wantedPM}" is not a valid package manager. Available package managers are: npm, cnpm, pnpm, or yarn.`)
  process.exit(1)
}
const usedPM = whichPMRuns()
const cwd = process.env.INIT_CWD || process.cwd()
const isInstalledAsDependency = cwd.includes('node_modules')
if (usedPM && usedPM.name === wantedPM && !isInstalledAsDependency) {
  const boxenOpts = { borderColor: 'red', borderStyle: 'double', padding: 1 }
  switch (wantedPM) {
    case 'npm':
      console.log(boxen('Use cnpm, yarn, or pnpm for installation in this project', boxenOpts))
      break
    case 'cnpm':
      console.log(boxen('Use npm, yarn, or pnpm for installation in this project', boxenOpts))
      break
    case 'pnpm':
      console.log(boxen(`Use npm, cnpm or yarn for installation in this project.`, boxenOpts))
      break
    case 'yarn':
      console.log(boxen(`Use npm, cnpm or pnpm for installation in this project.`, boxenOpts))
      break
  }
  process.exit(1)
}
