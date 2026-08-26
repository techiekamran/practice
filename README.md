
(base) shahwazhaider@Shahwazs-MacBook-Air android % npx react-native run-android --v
erbose
info A dev server is already running for this project on port 8081.
warn Multiple Podfiles were found: ios/Podfile,matrimonial-mobile/Podfile. Choosing ios/Podfile automatically. If you would like to select a different one, you can configure it via "project.ios.sourceDir". You can learn more about it here: https://github.com/react-native-community/cli/blob/main/docs/configuration.md
info Installing the app...
debug Running command "cd android && ./gradlew app:installDebug -PreactNativeDevServerPort=8081"

> Task :react-native-safe-area-context:compileDebugJavaWithJavac

> Task :react-native-screens:configureCMakeDebug[arm64-v8a]
[CXX5304] This version only understands SDK XML versions up to 3 but an SDK XML file of version 4 was encountered. This can happen if you use versions of Android Studio and the command-line tools that were released at different times.
[CXX5304] This version only understands SDK XML versions up to 3 but an SDK XML file of version 4 was encountered. This can happen if you use versions of Android Studio and the command-line tools that were released at different times.
[CXX5304] package.xml parsing problem. unexpected element (uri:"", local:"abis"). Expected elements are <{}vendor>,<{}codename>,<{}base-extension>,<{}abi>,<{}api-level>,<{}extension-level>,<{}tag>
[CXX5304] package.xml parsing problem. unexpected element (uri:"", local:"abis"). Expected elements are <{}vendor>,<{}codename>,<{}base-extension>,<{}abi>,<{}api-level>,<{}extension-level>,<{}tag>
Warning: package.xml parsing problem. unexpected element (uri:"", local:"abis"). Expected elements are <{}vendor>,<{}codename>,<{}base-extension>,<{}abi>,<{}api-level>,<{}extension-level>,<{}tag>
Warning: package.xml parsing problem. unexpected element (uri:"", local:"abis"). Expected elements are <{}vendor>,<{}codename>,<{}base-extension>,<{}abi>,<{}api-level>,<{}extension-level>,<{}tag>
Checking the license for package CMake 3.22.1 in /Users/shahwazhaider/Library/Android/sdk/licenses
License for package CMake 3.22.1 accepted.
Preparing "Install CMake 3.22.1 v.3.22.1".

> Task :react-native-screens:compileDebugKotlin FAILED

> Task :react-native-gesture-handler:compileDebugKotlin FAILED

> Task :react-native-screens:configureCMakeDebug[arm64-v8a]
"Install CMake 3.22.1 v.3.22.1" ready.
Installing CMake 3.22.1 in /Users/shahwazhaider/Library/Android/sdk/cmake/3.22.1
"Install CMake 3.22.1 v.3.22.1" complete.
"Install CMake 3.22.1 v.3.22.1" finished.
Warning: package.xml parsing problem. unexpected element (uri:"", local:"abis"). Expected elements are <{}vendor>,<{}codename>,<{}base-extension>,<{}abi>,<{}api-level>,<{}extension-level>,<{}tag>
141 actionable tasks: 16 executed, 125 up-to-date

info 💡 Tip: Make sure that you have set up your development environment correctly, by running npx react-native doctor. To read more about doctor command visit: https://github.com/react-native-community/cli/blob/main/packages/cli-doctor/README.md#doctor 

Note: /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-safe-area-context/android/src/paper/java/com/th3rdwave/safeareacontext/NativeSafeAreaContextSpec.java uses or overrides a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:3:27 Unresolved reference: BaseReactPackage
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:19:26 Unresolved reference: BaseReactPackage
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:24:5 'createViewManagers' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:45:5 'getModule' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:55:5 'getReactModuleInfoProvider' overrides nothing
e: Supertypes of the following classes cannot be resolved. Please make sure you have the required dependencies in the classpath:
    class com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface, unresolved supertypes: ViewManagerWithGeneratedInterface
    class com.facebook.react.viewmanagers.RNGestureHandlerRootViewManagerInterface, unresolved supertypes: ViewManagerWithGeneratedInterface
Adding -Xextended-compiler-checks argument might provide additional information.

e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/RNGestureHandlerPackage.kt:3:27 Unresolved reference: BaseReactPackage
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/RNGestureHandlerPackage.kt:23:3 Unresolved reference: BaseReactPackage
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/RNGestureHandlerPackage.kt:36:3 'createViewManagers' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/RNGestureHandlerPackage.kt:41:3 'getViewManagers' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/RNGestureHandlerPackage.kt:47:3 'getModule' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/RNGestureHandlerPackage.kt:54:3 'getReactModuleInfoProvider' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:42:1 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:49:5 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:49:107 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:149:5 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:154:71 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:156:3 Class 'ButtonViewGroup' is not abstract and does not implement abstract member public abstract fun getPointerEvents(): PointerEvents! defined in com.facebook.react.uimanager.ReactPointerEventsView
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:217:5 'pointerEvents' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerRootViewManager.kt:16:1 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerRootViewManager.kt:23:5 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerRootViewManager.kt:23:116 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerRootViewManager.kt:26:79 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager'. Check your module classpath for missing or conflicting dependencies

FAILURE: Build completed with 2 failures.

1: Task failed with an exception.
-----------
* What went wrong:
Execution failed for task ':react-native-screens:compileDebugKotlin'.
> A failure occurred while executing org.jetbrains.kotlin.compilerRunner.GradleCompilerRunnerWithWorkers$GradleKotlinCompilerWorkAction
   > Compilation error. See log for more details

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.
==============================================================================

2: Task failed with an exception.
-----------
* What went wrong:
Execution failed for task ':react-native-gesture-handler:compileDebugKotlin'.
> A failure occurred while executing org.jetbrains.kotlin.compilerRunner.GradleCompilerRunnerWithWorkers$GradleKotlinCompilerWorkAction
   > Compilation error. See log for more details

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.
==============================================================================

BUILD FAILED in 28s
error Failed to install the app. Command failed with exit code 1: ./gradlew app:installDebug -PreactNativeDevServerPort=8081
Note: /Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-safe-area-context/android/src/paper/java/com/th3rdwave/safeareacontext/NativeSafeAreaContextSpec.java uses or overrides a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:3:27 Unresolved reference: BaseReactPackage
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:19:26 Unresolved reference: BaseReactPackage
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:24:5 'createViewManagers' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:45:5 'getModule' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/RNScreensPackage.kt:55:5 'getReactModuleInfoProvider' overrides nothing
e: Supertypes of the following classes cannot be resolved. Please make sure you have the required dependencies in the classpath: class com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface, unresolved supertypes: ViewManagerWithGeneratedInterface class com.facebook.react.viewmanagers.RNGestureHandlerRootViewManagerInterface, unresolved supertypes: ViewManagerWithGeneratedInterface
Adding -Xextended-compiler-checks argument might provide additional information. e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/RNGestureHandlerPackage.kt:3:27 Unresolved reference: BaseReactPackage
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/RNGestureHandlerPackage.kt:23:3 Unresolved reference: BaseReactPackage
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/RNGestureHandlerPackage.kt:36:3 'createViewManagers' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/RNGestureHandlerPackage.kt:41:3 'getViewManagers' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/RNGestureHandlerPackage.kt:47:3 'getModule' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/RNGestureHandlerPackage.kt:54:3 'getReactModuleInfoProvider' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:42:1 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:49:5 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:49:107 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:149:5 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:154:71 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:156:3 Class 'ButtonViewGroup' is not abstract and does not implement abstract member public abstract fun getPointerEvents(): PointerEvents! defined in com.facebook.react.uimanager.ReactPointerEventsView
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerButtonViewManager.kt:217:5 'pointerEvents' overrides nothing
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerRootViewManager.kt:16:1 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerRootViewManager.kt:23:5 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerRootViewManager.kt:23:116 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager'. Check your module classpath for missing or conflicting dependencies
e: file:///Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/RNGestureHandlerRootViewManager.kt:26:79 Cannot access 'ViewManagerWithGeneratedInterface' which is a supertype of 'com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager'. Check your module classpath for missing or conflicting dependencies FAILURE: Build completed with 2 failures. 1: Task failed with an exception.
-----------
* What went wrong:
Execution failed for task ':react-native-screens:compileDebugKotlin'.
> A failure occurred while executing org.jetbrains.kotlin.compilerRunner.GradleCompilerRunnerWithWorkers$GradleKotlinCompilerWorkAction > Compilation error. See log for more details * Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.
============================================================================== 2: Task failed with an exception.
-----------
* What went wrong:
Execution failed for task ':react-native-gesture-handler:compileDebugKotlin'.
> A failure occurred while executing org.jetbrains.kotlin.compilerRunner.GradleCompilerRunnerWithWorkers$GradleKotlinCompilerWorkAction > Compilation error. See log for more details * Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.
============================================================================== BUILD FAILED in 28s.
