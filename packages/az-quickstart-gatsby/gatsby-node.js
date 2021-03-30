const path = require(`path`)

exports.createPages = async function ({ actions, graphql }) {
	const { createPage } = actions
  await graphql(`
	{
		allNodeAzFlexiblePage {
			edges {
				node {
					id
					path {
						alias
					}
				}
			}
		}
	}
  `).then(result => {
		result.data.allNodeAzFlexiblePage.edges.forEach(({ node }) => {
			createPage({
				path: node.path.alias,
				component: path.resolve(`./src/templates/Page.js`),
				context: {
					id: node.id,
				},
			})
		})
	})
};

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `node__az_flexible_page`) {
		const slug = `/pages/${node.drupal_internal__nid}/`;
		createNodeField({
			node,
			name: `slug`,
			value: slug
		});
	}
};


exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions
	const typeDefs = `

		type node__az_flexible_page implements Node {
			field_az_main_content: field_az_main_content
		}
		type paragraph__az_html implements Node {
			field_az_full_html: field_az_full_html
		}
		type field_az_full_html {
			format: String
			processed: String
			value: String
		}
		type field_az_main_content {
			type: String
		}
	`
  createTypes(typeDefs)
}