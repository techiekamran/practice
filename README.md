npx @react-native-community/cli@0.73.0 init rn_shell_temp --version 0.73.0

npx --package react-native@0.73.0 --package @react-native-community/cli@11.3.7 -- react-native init rn_shell_temp --version 0.73.0

find / -type d -path "*react-native/template/ios" 2>/dev/null

cp -R <path-found-above> ./ios
