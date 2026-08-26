echo 'export JAVA_HOME=$(/usr/libexec/java_home -v 17)' >> ~/.zshrc
source ~/.zshrc
java -version
echo $JAVA_HOME

java -version

npx react-native run-android
