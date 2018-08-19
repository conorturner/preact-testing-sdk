module.exports = {
	testMatch: [
		"**/?(*.)+(spec|test).js?(x)"
	],
	testURL: "http://localhost:8080",
	moduleFileExtensions: ["js", "jsx"],
	moduleDirectories: ["node_modules", "src"],
	transform: {
		"^.+\\.js$": "preact-testing-sdk/preprocessor.js"
	},
	globals: {
		NODE_ENV: "test"
	},
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
		"^react$": "preact-compat",
		"^react-dom$": "preact-compat",
		"^.+\\.(css|less|scss)$": "identity-obj-proxy"
	}
};