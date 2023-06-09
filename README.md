Prerequisites:

   1. Git    : https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
   2. Docker : https://docs.docker.com/engine/install/

Steps:

   1. Create a new directory where you want to clone the repository and navigate inside it.
   2. Open a terminal inside the folder and clone the repository by running the following command:
                
          git clone https://github.com/Zubaer-Alam/evaluation
          
   3. Navigate to the app directory by running the following command in the terminal:
            
          cd evaluation/docker
          
   4. Build and run the Docker container using the following command:
         
          docker compose up -d
          
   5. Open your browser and access http://localhost:5000 to view the app.
   6. After you have finished viewing the app, stop the container by typing the following command in the terminal:

          docker compose down
          
   

