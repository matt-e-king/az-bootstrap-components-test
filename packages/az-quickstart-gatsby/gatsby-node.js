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
		type field_link {
			title: String
			uri: String
		}
		type field_col_head {
			value: String
		}
		type field_content_margin_bottom {
			value: String
		}
		type field_bttn_col_content {
			format: String
			processed: String
			value: String
		}
		type field_html {
			format: String
			processed: String
			value: String
		}
		type field_content_text {
			processed: String
			format: String
			value: String
		}
		type paragraph__columns_of_buttons implements Node {
			field_bttn_col_content: field_bttn_col_content
		}
		type paragraph__button_column implements Node {
			field_col_head: field_col_head
		}
		type paragraph__admissions_hero implements Node {
			field_headline_one: String
			field_headline_two: field_headline_two
			field_cta: field_cta
		}
		type field_headline_two {
			processed: String
			format: String
			value: String
		}
		type field_cta implements Node {
			field_link: field_link
		}
		type paragraph__html_field implements Node {
			field_html: field_html
		}
		type paragraph__meta_data implements Node {
			field_social_media_description: String
			field_social_media_title: String
			field_jso: String
		}
	`
  createTypes(typeDefs)
}