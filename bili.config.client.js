/**
 * TODO: reduce bundle size
 * https://github.com/vuejs/rollup-plugin-vue/issues/210
 */
module.exports = {
  experimentalCodeSplitting: true,
  format: ['es'],
  filename: 'bundle.js',
  target: 'browser',
}
