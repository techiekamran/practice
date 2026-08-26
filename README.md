 % ls 
app.json                index.js                package-lock.json       src
App.tsx                 ios                     package.json            tsconfig.json
babel.config.js         matrimonial-mobile      PROJECT_SUMMARY.md
CONTRIBUTING.md         metro.config.js         QUICKSTART.md
DEPLOYMENT.md           node_modules            README.md
(base) shahwazhaider@Shahwazs-MacBook-Air matrimonial-mobile % cd ios
(base) shahwazhaider@Shahwazs-MacBook-Air ios % ls
Podfile                 rn_shell_temp           rn_shell_temp.xcodeproj rn_shell_tempTests
(base) shahwazhaider@Shahwazs-MacBook-Air ios % rm -rf rn_shell_temp
(base) shahwazhaider@Shahwazs-MacBook-Air ios % ls
Podfile                 rn_shell_temp.xcodeproj rn_shell_tempTests
(base) shahwazhaider@Shahwazs-MacBook-Air ios % sudo gem install cocoapods                 
Successfully installed cocoapods-1.17.0
Parsing documentation for cocoapods-1.17.0
Done installing documentation for cocoapods after 0 seconds
1 gem installed
(base) shahwazhaider@Shahwazs-MacBook-Air ios % ls
Podfile                 rn_shell_temp.xcodeproj rn_shell_tempTests
(base) shahwazhaider@Shahwazs-MacBook-Air ios % pod install
zsh: command not found: pod
(base) shahwazhaider@Shahwazs-MacBook-Air ios % ruby -v
ruby 4.0.6 (2026-07-14 revision 03b6d3f889) +PRISM [arm64-darwin25]
(base) shahwazhaider@Shahwazs-MacBook-Air ios % brew --version
Homebrew 6.0.19
(base) shahwazhaider@Shahwazs-MacBook-Air ios % echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"'

export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
(base) shahwazhaider@Shahwazs-MacBook-Air ios % source ~/.zshrc
(base) shahwazhaider@Shahwazs-MacBook-Air ios % sudo gem install cocoapods
Successfully installed cocoapods-1.17.0
Parsing documentation for cocoapods-1.17.0
Done installing documentation for cocoapods after 0 seconds
1 gem installed
(base) shahwazhaider@Shahwazs-MacBook-Air ios % pod install   
zsh: command not found: pod
(base) shahwazhaider@Shahwazs-MacBook-Air ios % which ruby
/opt/homebrew/bin/ruby
(base) shahwazhaider@Shahwazs-MacBook-Air ios % pwd
/Users/shahwazhaider/Desktop/backEnd/matrimonial-mobile/ios
(base) shahwazhaider@Shahwazs-MacBook-Air ios % 
