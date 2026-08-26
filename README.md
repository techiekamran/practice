echo 'export ANDROID_HOME=$HOME/Library/Android/sdk' >> ~/.zshrc
echo 'export PATH=$PATH:$ANDROID_HOME/emulator' >> ~/.zshrc
echo 'export PATH=$PATH:$ANDROID_HOME/platform-tools' >> ~/.zshrc
source ~/.zshrc

echo $ANDROID_HOME
ls $ANDROID_HOME

emulator -list-avds
emulator -avd <avd_name_from_above>


npx react-native run-android
