***THIS IS NOT THE REQUESTED APPLICATION***
I constructed the main app with one single html file including all the css 
and js code in the file.

The code in that version doesn't need to initialise npm and install threeJS
or other dependencies. Instead, the main app imports all the required 
dependencies from the cloud CDN. But in the recommended directory structure, 
I saw a separate "viewer.js" file. Hence I decided to build the project again
keeping the html css and js separate and using traditional npm init and install
to install the dependencies. 

This app requires two npm dependencies only, threeJS and vite. Assuming you 
have cloned the repository, head to the evaluation/threeJS directory via 
the terminal and run "npm install" to install the dependencies. After the 
dependencies are installed, run "npx vite" and use the generated link to 
access the application. 

