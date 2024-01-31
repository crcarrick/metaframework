#!/usr/bin/env node

import { runServer } from '@framework/server'

async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.error('Usage: framework <command> [options]')
    process.exit(1)
  }

  const command = args[0]

  switch (command) {
    case 'dev':
    case 'start':
      return await runServer()

    default:
      console.error(`Unknown command: ${command}`)
      process.exit(1)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
