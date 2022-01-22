const path = require("path");

module.exports = function (env, { mode }) {
    const production = mode === "production";
    return {
        mode: production ? "production" : "development",
        devtool: production ? "source-maps" : "inline-source-map",
        entry: {
            app: ["./src/app.js"],
        },
        output: {
            filename: "bundle.js",
        },
        resolve: {
            extensions: [".js"],
            modules: ["src", "node_modules"],
        },
        devServer: {
            port: 9000,
            historyApiFallback: true,
            writeToDisk: true,
            open: !process.env.CI,
            lazy: false,
        },
        module: {
            rules: [],
        },
    };
};
