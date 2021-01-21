const CracoLessPlugin = require("craco-less")

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#8F61DB",
                            "@font-size-base": "15px",
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}
