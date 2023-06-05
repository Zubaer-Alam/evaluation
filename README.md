Prerequisites:
  1. Git    : https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
  2. Docker : https://docs.docker.com/engine/install/

Steps:
  1. Create a New directory where you want to clone the repository and navigate inside it.
  2. Open terminal inside the folder and type " git clone https://github.com/Zubaer-Alam/evaluation ".
  3. In the terminal type in " cd evaluation/docker " to navigate to the app directory.
  4. Then type in " docker compose up -d --build --remove-orphans " to build and run the docker container.
  5. Open your browser and access " localhost:5000 " to view the app.
  6. After viewing the app, type " docker compose down " in terminal to stop the container.
