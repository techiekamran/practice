-mobile % npx react-native run-android
info A dev server is already running for this project on port 8081.
warn Multiple Podfiles were found: ios/Podfile,matrimonial-mobile/Podfile. Choosing ios/Podfile automatically. If you would like to select a different one, you can configure it via "project.ios.sourceDir". You can learn more about it here: https://github.com/react-native-community/cli/blob/main/docs/configuration.md
info Installing the app...
Downloading https://services.gradle.org/distributions/gradle-8.3-all.zip
...................10%...................20%...................30%...................40%...................50%...................60%...................70%...................80%...................90%...................100%

Welcome to Gradle 8.3!

Here are the highlights of this release:
 - Faster Java compilation
 - Reduced memory usage
 - Support for running on Java 20

For more details see https://docs.gradle.org/8.3/release-notes.html

Starting a Gradle Daemon (subsequent builds will be faster)

> Configure project :react-native-screens
This version only understands SDK XML versions up to 3 but an SDK XML file of version 4 was encountered. This can happen if you use versions of Android Studio and the command-line tools that were released at different times.
package.xml parsing problem. unexpected element (uri:"", local:"abis"). Expected elements are <{}vendor>,<{}codename>,<{}base-extension>,<{}abi>,<{}api-level>,<{}extension-level>,<{}tag>
Warning: package.xml parsing problem. unexpected element (uri:"", local:"abis"). Expected elements are <{}vendor>,<{}codename>,<{}base-extension>,<{}abi>,<{}api-level>,<{}extension-level>,<{}tag>
Warning: package.xml parsing problem. unexpected element (uri:"", local:"abis"). Expected elements are <{}vendor>,<{}codename>,<{}base-extension>,<{}abi>,<{}api-level>,<{}extension-level>,<{}tag>
Checking the license for package NDK (Side by side) 25.1.8937393 in /Users/shahwazhaider/Library/Android/sdk/licenses
License for package NDK (Side by side) 25.1.8937393 accepted.
Preparing "Install NDK (Side by side) 25.1.8937393 v.25.1.8937393".
"Install NDK (Side by side) 25.1.8937393 v.25.1.8937393" ready.
Installing NDK (Side by side) 25.1.8937393 in /Users/shahwazhaider/Library/Android/sdk/ndk/25.1.8937393
"Install NDK (Side by side) 25.1.8937393 v.25.1.8937393" complete.
"Install NDK (Side by side) 25.1.8937393 v.25.1.8937393" finished.
Warning: package.xml parsing problem. unexpected element (uri:"", local:"abis"). Expected elements are <{}vendor>,<{}codename>,<{}base-extension>,<{}abi>,<{}api-level>,<{}extension-level>,<{}tag>
Checking the license for package Android SDK Build-Tools 34 in /Users/shahwazhaider/Library/Android/sdk/licenses
License for package Android SDK Build-Tools 34 accepted.
Preparing "Install Android SDK Build-Tools 34 v.34.0.0".
"Install Android SDK Build-Tools 34 v.34.0.0" ready.
Installing Android SDK Build-Tools 34 in /Users/shahwazhaider/Library/Android/sdk/build-tools/34.0.0
"Install Android SDK Build-Tools 34 v.34.0.0" complete.
"Install Android SDK Build-Tools 34 v.34.0.0" finished.
Checking the license for package Android SDK Platform 34 in /Users/shahwazhaider/Library/Android/sdk/licenses
License for package Android SDK Platform 34 accepted.
Preparing "Install Android SDK Platform 34 (revision 3)".
"Install Android SDK Platform 34 (revision 3)" ready.
Installing Android SDK Platform 34 in /Users/shahwazhaider/Library/Android/sdk/platforms/android-34
"Install Android SDK Platform 34 (revision 3)" complete.
"Install Android SDK Platform 34 (revision 3)" finished.
package.xml parsing problem. unexpected element (uri:"", local:"abis"). Expected elements are <{}vendor>,<{}codename>,<{}base-extension>,<{}abi>,<{}api-level>,<{}extension-level>,<{}tag>
Checking the license for package Android SDK Build-Tools 33.0.1 in /Users/shahwazhaider/Library/Android/sdk/licenses
License for package Android SDK Build-Tools 33.0.1 accepted.
Preparing "Install Android SDK Build-Tools 33.0.1 v.33.0.1".
"Install Android SDK Build-Tools 33.0.1 v.33.0.1" ready.
Installing Android SDK Build-Tools 33.0.1 in /Users/shahwazhaider/Library/Android/sdk/build-tools/33.0.1
"Install Android SDK Build-Tools 33.0.1 v.33.0.1" complete.
"Install Android SDK Build-Tools 33.0.1 v.33.0.1" finished.
package.xml parsing problem. unexpected element (uri:"", local:"abis"). Expected elements are <{}vendor>,<{}codename>,<{}base-extension>,<{}abi>,<{}api-level>,<{}extension-level>,<{}tag>

> Task :app:checkDebugAarMetadata FAILED

Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

For more on this, please refer to https://docs.gradle.org/8.3/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.
18 actionable tasks: 18 executed

info 💡 Tip: Make sure that you have set up your development environment correctly, by running npx react-native doctor. To read more about doctor command visit: https://github.com/react-native-community/cli/blob/main/packages/cli-doctor/README.md#doctor 


FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:checkDebugAarMetadata'.
> A failure occurred while executing com.android.build.gradle.internal.tasks.CheckAarMetadataWorkAction
   > 4 issues were found when checking AAR metadata:
     
       1.  Dependency 'androidx.core:core-ktx:1.16.0' requires libraries and applications that
           depend on it to compile against version 35 or later of the
           Android APIs.
     
           :app is currently compiled against android-34.
     
           Also, the maximum recommended compile SDK version for Android Gradle
           plugin 8.1.1 is 34.
     
           Recommended action: Update this project's version of the Android Gradle
           plugin to one that supports 35, then update this project to use
           compileSdk of at least 35.
     
           Note that updating a library or application's compileSdk (which
           allows newer APIs to be used) can be done separately from updating
           targetSdk (which opts the app in to new runtime behavior) and
           minSdk (which determines which devices the app can be installed
           on).
     
       2.  Dependency 'androidx.core:core-ktx:1.16.0' requires Android Gradle plugin 8.6.0 or higher.
     
           This build currently uses Android Gradle plugin 8.1.1.
     
       3.  Dependency 'androidx.core:core:1.16.0' requires libraries and applications that
           depend on it to compile against version 35 or later of the
           Android APIs.
     
           :app is currently compiled against android-34.
     
           Also, the maximum recommended compile SDK version for Android Gradle
           plugin 8.1.1 is 34.
     
           Recommended action: Update this project's version of the Android Gradle
           plugin to one that supports 35, then update this project to use
           compileSdk of at least 35.
     
           Note that updating a library or application's compileSdk (which
           allows newer APIs to be used) can be done separately from updating
           targetSdk (which opts the app in to new runtime behavior) and
           minSdk (which determines which devices the app can be installed
           on).
     
       4.  Dependency 'androidx.core:core:1.16.0' requires Android Gradle plugin 8.6.0 or higher.
     
           This build currently uses Android Gradle plugin 8.1.1.

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.

BUILD FAILED in 11m 22s
error Failed to install the app. Command failed with exit code 1: ./gradlew app:installDebug -PreactNativeDevServerPort=8081 FAILURE: Build failed with an exception. * What went wrong:
Execution failed for task ':app:checkDebugAarMetadata'.
> A failure occurred while executing com.android.build.gradle.internal.tasks.CheckAarMetadataWorkAction > 4 issues were found when checking AAR metadata: 1. Dependency 'androidx.core:core-ktx:1.16.0' requires libraries and applications that depend on it to compile against version 35 or later of the Android APIs. :app is currently compiled against android-34. Also, the maximum recommended compile SDK version for Android Gradle plugin 8.1.1 is 34. Recommended action: Update this project's version of the Android Gradle plugin to one that supports 35, then update this project to use compileSdk of at least 35. Note that updating a library or application's compileSdk (which allows newer APIs to be used) can be done separately from updating targetSdk (which opts the app in to new runtime behavior) and minSdk (which determines which devices the app can be installed on). 2. Dependency 'androidx.core:core-ktx:1.16.0' requires Android Gradle plugin 8.6.0 or higher. This build currently uses Android Gradle plugin 8.1.1. 3. Dependency 'androidx.core:core:1.16.0' requires libraries and applications that depend on it to compile against version 35 or later of the Android APIs. :app is currently compiled against android-34. Also, the maximum recommended compile SDK version for Android Gradle plugin 8.1.1 is 34. Recommended action: Update this project's version of the Android Gradle plugin to one that supports 35, then update this project to use compileSdk of at least 35. Note that updating a library or application's compileSdk (which allows newer APIs to be used) can be done separately from updating targetSdk (which opts the app in to new runtime behavior) and minSdk (which determines which devices the app can be installed on). 4. Dependency 'androidx.core:core:1.16.0' requires Android Gradle plugin 8.6.0 or higher. This build currently uses Android Gradle plugin 8.1.1. * Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
