pod install    
warn Multiple Podfiles were found: ios/Podfile,matrimonial-mobile/Podfile. Choosing ios/Podfile automatically. If you would like to select a different one, you can configure it via "project.ios.sourceDir". You can learn more about it here: https://github.com/react-native-community/cli/blob/main/docs/configuration.md
Auto-linking React Native modules for target `rn_shell_temp`: RNDeviceInfo, RNGestureHandler, RNKeychain, RNScreens, RNVectorIcons, react-native-otp-verify, and react-native-safe-area-context
Framework build type is static library
[Codegen] Generating ./build/generated/ios/React-Codegen.podspec.json
[Codegen] generating an empty RCTThirdPartyFabricComponentsProvider
Analyzing dependencies
Fetching podspec for `DoubleConversion` from `../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec`
[Codegen] Found FBReactNativeSpec
Fetching podspec for `RCT-Folly` from `../node_modules/react-native/third-party-podspecs/RCT-Folly.podspec`
[Codegen] Found rncore
Fetching podspec for `boost` from `../node_modules/react-native/third-party-podspecs/boost.podspec`
Fetching podspec for `glog` from `../node_modules/react-native/third-party-podspecs/glog.podspec`
xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance
[!] Failed to load 'glog' podspec: 
[!] Invalid `glog.podspec` file: undefined method '[]' for nil.

 #  from /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native/third-party-podspecs/glog.podspec:38
 #  -------------------------------------------
 #    match = xcode_path.match(/Xcode (\d+)\.(\d+)/)
 >    major_version = match[1].to_i
 #    minor_version = match[2].to_i
 #  -------------------------------------------
