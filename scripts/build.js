const { build } = require('esbuild')

async function main() {
  console.log('Building...')
  // cjs
  await build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'node',
    target: 'node20',
    format: 'cjs',
    outfile: 'dist/index.js',
    minify: true,
  })
  // esm
  await build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'node',
    target: 'node20',
    format: 'esm',
    outfile: 'dist/index.mjs',
    minify: true,
  })
  // browser
  await build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'browser',
    target: 'es2020',
    format: 'esm',
    outfile: 'dist/index.browser.mjs',
    minify: true,
  })
  // UMD
  await build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'browser',
    target: 'es2020',
    format: 'iife',
    globalName: 'MyLibrary',
    outfile: 'dist/index.umd.js',
    minify: true,
  })
  console.log('Build complete!')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})