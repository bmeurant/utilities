# Function to configure the Gemini CLI mode
function set_gemini_mode {
    local source_dir
    if [ "$1" = "perso" ]; then
        source_dir="$HOME/.gemini_perso"
        echo "Gemini CLI Mode: Personal"
    elif [ "$1" = "pro" ]; then
        source_dir="$HOME/.gemini_pro"
        echo "Gemini CLI Mode: Professional"
    else
        echo "Usage: set_gemini_mode [perso|pro]"
        return 1
    fi

    # Create source directory if it doesn't exist
    mkdir -p "$source_dir"

    # Ensure ~/.gemini exists
    mkdir -p "$HOME/.gemini"

    # Clear and copy content to ~/.gemini
    rm -rf "$HOME/.gemini"
    mkdir -p "$HOME/.gemini"
    cp -r "$source_dir/." "$HOME/.gemini"/ 2>/dev/null || true # Copy, ignore errors if source is empty

    # Export GEMINI_CONFIG_DIR to point to the active config directory
    export GEMINI_CONFIG_DIR="$HOME/.gemini"

    # Optional: Export API key if needed (user can uncomment in their .bashrc/.zshrc)
    # export GEMINI_API_KEY="YOUR_API_KEY_HERE"
}

# Aliases to launch Gemini directly in the chosen mode
alias gperso='set_gemini_mode perso && gemini'
alias gpro='set_gemini_mode pro && gemini'