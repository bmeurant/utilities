# How to switch between two Gemini CLI accounts (pro / perso)?

# How to switch between two Gemini CLI accounts (pro / perso)?

1. Configure aliases

   * Add the following line to your `~/.bashrc` or `~/.zshrc` file to source the aliases:

     ```bash
     source YUR_PATH/switch_gemini_mode.sh
     ```
     (Ensure the path is correct for your setup.)

   * The `set_gemini_mode` function (called by `gperso` and `gpro`) will automatically create the necessary configuration directories (`~/.gemini_perso`, `~/.gemini_pro`, and `~/.gemini`) and synchronize the content.

  * Source your shell configuration file to apply changes:
    
     ```bash
     source ~/.bashrc
     ```

    or

     ```bash
     source ~/.zshrc
     ```

2. Usage

   * To launch **Gemini CLI** in personal mode:
     ```bash
     gperso
     ```

   * To launch **Gemini CLI** in pro mode:
     ```bash
     gpro
     ```