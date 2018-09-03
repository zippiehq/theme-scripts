module.exports = {
  plugins: [
    // Bare string, use `rollup-plugin-vue`
    'vue',
    'url',
  ],
  url: {
    /**
     * TODO: make external urls work
     */
    limit: 10000 * 1024,
  },
}
