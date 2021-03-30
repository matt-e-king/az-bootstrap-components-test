/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-drupal`,
            options: {
                baseUrl: `https://dev-az-admissions.pantheonsite.io/`,
                apiBase: `jsonapi`, // optional, defaults to `jsonapi`
                concurrentFileRequests: 6,
                schema: {
                    timeout: 100000000,
                },
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-plugin-image`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
    ],
}