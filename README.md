echo 'export PATH="'"$(gem environment | grep EXECUTABLE | awk -F': ' '{print $2}')"':$PATH"' >> ~/.zshrc
source ~/.zshrc
