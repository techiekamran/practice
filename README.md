
(base) shahwazhaider@Shahwazs-MacBook-Air matrimonial-mobile % npm start

> matrimonial-mobile@1.0.0 start
> react-native start

error Cannot find module '@react-native/metro-config'
Require stack:
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/metro.config.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/cosmiconfig/node_modules/import-fresh/index.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/cosmiconfig/dist/loaders.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/cosmiconfig/dist/createExplorer.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/cosmiconfig/dist/index.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/@react-native-community/cli-config/build/readConfigFromDisk.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/@react-native-community/cli-config/build/loadConfig.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/@react-native-community/cli-config/build/index.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/@react-native-community/cli/build/commands/index.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/@react-native-community/cli/build/index.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/@react-native-community/cli/build/bin.js.
Error: Cannot find module '@react-native/metro-config'
Require stack:
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/metro.config.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/cosmiconfig/node_modules/import-fresh/index.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/cosmiconfig/dist/loaders.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/cosmiconfig/dist/createExplorer.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/cosmiconfig/dist/index.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/@react-native-community/cli-config/build/readConfigFromDisk.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/@react-native-community/cli-config/build/loadConfig.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/@react-native-community/cli-config/build/index.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/@react-native-community/cli/build/commands/index.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/@react-native-community/cli/build/index.js
- /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/@react-native-community/cli/build/bin.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1225:15)
    at Module._load (node:internal/modules/cjs/loader:1051:27)
    at Module.require (node:internal/modules/cjs/loader:1311:19)
    at require (node:internal/modules/helpers:179:18)
    at Object.<anonymous> (/Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/metro.config.js:1:41)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Module.require (node:internal/modules/cjs/loader:1311:19)
(base) shahwazhaider@Shahwazs-MacBook-Air matrimonial-mobile % grep -n "@react-native/metro-config" package.json
(base) shahwazhaider@Shahwazs-MacBook-Air matrimonial-mobile % grep -n "@react-native/metro-config" package.json
(base) shahwazhaider@Shahwazs-MacBook-Air matrimonial-mobile % npm install --save-dev @react-native/m
etro-config@^0.73.0

added 2 packages, and audited 868 packages in 8s

91 packages are looking for funding
  run `npm fund` for details

20 vulnerabilities (3 moderate, 17 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
