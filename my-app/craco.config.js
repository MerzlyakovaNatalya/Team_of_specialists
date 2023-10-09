const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
   mode: 'development',
   devServer: {
    port: 8001
   },
   webpack: {
    plugins: [
        new ModuleFederationPlugin({
            name: "MicroFrontendApp",
            filename: "remoteEntry.js", // Имя файла, в котором будут экспортированы модули
            exposes: {
              "./UsersComponent": "./src/App", // Экспортируемые модули из вашего приложения
            },
          })
    ],
  },
  };