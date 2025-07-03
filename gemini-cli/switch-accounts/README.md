# How to switch between two Gemini CLI accounts (pro / perso)?

1. Configure your Gemini CLI modes

   * Create the configuration directory:
     ```bash
     mkdir -p ~/.config/gemini
     ```

   * Copy the example configuration files to this directory:
     ```bash
     cp /gemini-cli/switch-accounts/gemini_perso_config.sh ~/.config/gemini/
     cp /gemini-cli/switch-accounts/gemini_pro_config.sh ~/.config/gemini/
     ```

   * Edit these files (`~/.config/gemini/gemini_perso_config.sh` and `~/.config/gemini/gemini_pro_config.sh`) to set your `GEMINI_API_KEY` and `GOOGLE_CONFIG_DIR` (uncomment and fill in your values).

2. Configure aliases

   * Add the following line to your `~/.bashrc` or `~/.zshrc` file to source the aliases:

     ```bash
     source gemini-cli/switch-accounts/switch_gemini_mode.sh
     ```

   * The `set_gemini_mode` function (called by `gperso` and `gpro`) will automatically create the necessary configuration directories (`~/.gemini_perso`, `~/.gemini_pro`, and `~/.gemini`) and synchronize the content.

  * Source your shell configuration file to apply changes:
    
     ```bash
     source ~/.bashrc
     ```

    or

     ```bash
     source ~/.zshrc
     ```

3. Usage

   * To launch **Gemini CLI** in personal mode:
     ```bash
     gperso
     ```

   * To launch **Gemini CLI** in pro mode:
     ```bash
     gpro
     ```