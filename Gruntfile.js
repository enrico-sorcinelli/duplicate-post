module.exports = function( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-wp-readme-to-markdown' );

	grunt.initConfig(
		{
			wp_readme_to_markdown: {
				your_target: {
					files: {
						'readme.md': 'readme.txt'
					},
				},
			},
		}
	),

	grunt.registerTask(
		'default',
		[
			'wp_readme_to_markdown'
		]
	);
}
