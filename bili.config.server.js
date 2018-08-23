/**
 * Customized node.js build which excludes assets and css that don't work when requiring them
 */
module.exports = {
  input: './src/variables.js',
  format: ['cjs'],
  filename: 'bundle.cjs.js',
  target: 'node',
}
