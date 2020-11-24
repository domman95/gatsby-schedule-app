require('dotenv').config({ path: '.env' });

console.log('ok')

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
  ],
  pathPrefix: "/gatsby-schedule-app/"
}