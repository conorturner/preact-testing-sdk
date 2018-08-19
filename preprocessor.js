const babelOptions = {
	presets: ["es2015", "stage-0"],
	plugins: [
		"transform-class-properties",
		["transform-es2015-classes", { loose: true }],
		"transform-object-assign",
		["transform-react-jsx", { pragma: "h" }]
	]
};

module.exports = require('babel-jest').createTransformer(babelOptions);