# Party3laKefak
  App allow to users need  services to make party with a best events ,see all halls, clothes, decoration and foods to help user   prpare to his party with low effort and time .


 # User Journeys 
  - As a user I can see all services in home page .
  - As a user I can see all halls Photo and names in the halls page.
  - As a user I can filter all service in specific date and location in services page.
  - As a logged user (Company) I can Login / Register , edit user profile information and there details and logout .
  - As a logged user (Company) I can see my halls and there details ,add hall,edit or delete it .
  - As a user I can go back from every page to home page or to a previous page .

 # File Structure 
  ```
- 
- Src
     |__ database
              |_ config
                    |_ dbConnection.js
              |_ modules
                    |_ extraservices.js
                    |_ media.js
                    |_ servicedetails.js
                    |_ services.js
                    |_ user.js
    |__ backEnd
              |_ app.js
              |_ server.js
    |__ frontEnd
              |_ views

- gitignore
- .travis.yml
- package.json
- eslintrc.js
```
 # Variable rules
  - CamelCase
  - indentation tab
 # Linting Rules
  - es6
  - semicolon 
  - double quotes
 # How you will handle Async ?
  - Async/Wait
