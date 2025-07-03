# Function to configure the Gemini CLI mode
function set_gemini_mode {
    if [ "$1" = "perso" ]; then
        # export GEMINI_API_KEY="YOUR_PERSONAL_API_KEY"
        export GEMINI_CONFIG_DIR="$HOME/.gemini_perso"
        echo "Gemini CLI Mode: Personal"
    elif [ "$1" = "pro" ]; then
        # export GEMINI_API_KEY="YOUR_PROFESSIONAL_API_KEY"
        export GEMINI_CONFIG_DIR="$HOME/.gemini_pro"
        echo "Gemini CLI Mode: Professional"
    else
        echo "Usage: set_gemini_mode [perso|pro]"
    fi
}

# Aliases to launch Gemini directly in the chosen mode
alias gperso='set_gemini_mode perso && gemini'
alias gpro='set_gemini_mode pro && gemini'