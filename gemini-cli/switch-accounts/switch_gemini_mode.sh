# Function to configure the Gemini CLI mode
function set_gemini_mode {
    local config_file
    local source_dir

    if [ "$1" = "perso" ]; then
        config_file="$HOME/config/gemini/gemini_perso_config.sh"
        source_dir="$HOME/.gemini_perso"
        echo "Gemini CLI Mode: Personal"
    elif [ "$1" = "pro" ]; then
        config_file="$HOME/config/gemini/gemini_pro_config.sh"
        source_dir="$HOME/.gemini_pro"
        echo "Gemini CLI Mode: Professional"
    else
        echo "Usage: set_gemini_mode [perso|pro]"
        return 1
    fi

    # Source the configuration file to load variables like GEMINI_API_KEY, GOOGLE_CONFIG_DIR
    if [ -f "$config_file" ]; then
        source "$config_file"
    else
        echo "Error: Configuration file not found: ${config_file}"
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

    # Export API key and Google Cloud config dir if they were set in the sourced config file
    if [ -n "${GEMINI_API_KEY}" ]; then
        export GEMINI_API_KEY
    fi
    if [ -n "${GOOGLE_CONFIG_DIR}" ]; then
        export GOOGLE_CONFIG_DIR
    fi
}

# Aliases to launch Gemini directly in the chosen mode
alias gperso='set_gemini_mode perso && gemini'
alias gpro='set_gemini_mode pro && gemini'