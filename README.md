
(base) shahwazhaider@Shahwazs-MacBook-Air ios % cat ~/.zshrc


# Load Angular CLI autocompletion.
source <(ng completion script)

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/opt/anaconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/opt/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/opt/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/opt/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<


export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
export PATH="/opt/homebrew/opt/ruby/bin/ruby
/opt/homebrew/bin/git
/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH" source /Users/shahwazhaider/.zshrc
export PATH="/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH"
(base) shahwazhaider@Shahwazs-MacBook-Air ios % source ~/.zshrc
/Users/shahwazhaider/.zshrc:export:25: not valid in this context: /Users/shahwazhaider/.zshrc
(base) shahwazhaider@Shahwazs-MacBook-Air ios % which pod
pod not found
(base) shahwazhaider@Shahwazs-MacBook-Air ios % gem environment | grep "EXECUTABLE DIRECTORY"
  - EXECUTABLE DIRECTORY: /opt/homebrew/lib/ruby/gems/4.0.0/bin
(base) shahwazhaider@Shahwazs-MacBook-Air ios % 
