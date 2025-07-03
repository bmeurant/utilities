# How to switch between two Gemini CLI accounts (pro / perso)?

1. Create distinct config dirs

  ```bash
  mkdir -p ~/.gemini_perso
  mkdir -p ~/.gemini_pro
  ```

2. Create failover scripts with `GEMINI_CONFIG_DIR`

  * [gemini_perso.sh](./gemini_perso.sh)
  * [gemini_pro.sh](./gemini_pro.sh)

3. Copy them

    ```bash
    cp ./gemini_perso.sh ~/.gemini_perso/gemini_perso.sh
    cp ./gemini_pro.sh ~/.gemini_pro/gemini_pro.sh
    ```

4. Make them executable

    ```bash
    chmod +x ~/.gemini_perso/gemini_perso.sh
    chmod +x ~/.gemini_pro/gemini_pro.sh
    ```
   
5. Execute the scripts to switch accounts

    ```bash
    ./gemini_perso.sh
    ```

    or

    ```bash
    ./gemini_pro.sh
    ```

6. Create alias (optional)   

   * Add the following line to your `~/.bashrc` or `~/.zshrc` file to source the aliases:

     ```bash
     source YOUR_PATH/gemini_aliases.sh
     ```
     (Ensure the path is correct for your setup.)

  * Source your shell configuration file to apply changes:
    
     ```bash
     source ~/.bashrc
     ```

    or

     ```bash
     source ~/.zshrc
     ```

7. Usage

   * To launch **Gemini CLI** in personal mode:
     ```bash
     gperso
     ```

   * To launch **Gemini CLI** in pro mode:
     ```bash
     gpro
     ```