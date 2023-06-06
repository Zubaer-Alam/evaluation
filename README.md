Prerequisites:

    Git: Follow the installation instructions at Git Installation Guide.
    Docker: Follow the installation instructions at Docker Installation Guide.

Steps:

    Create a new directory where you want to clone the repository and navigate inside it.
    Open a terminal inside the folder and run the following command to clone the repository:

    bash

git clone https://github.com/Zubaer-Alam/evaluation

Navigate to the app directory by running the following command in the terminal:

bash

cd evaluation/docker

Build and run the Docker container using the following command:

css

docker compose up -d --build --remove-orphans

Open your browser and access localhost:5000 to view the app.
After you have finished viewing the app, stop the container by typing the following command in the terminal:

    docker compose down

Make sure you have completed the prerequisites and follow the steps in order to successfully run the application.
