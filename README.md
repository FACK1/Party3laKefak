# Party 3la Kefak
  App allow to users need  services to make party with a best events ,see all halls, clothes, decoration and foods to help user   prpare to his party with low effort and time .

# Website Link : [Party 3la Kefek](https://party3lakefak.herokuapp.com/)
 # User Journeys 
  - As a user I can see all services in home page .
  - As a user I can see all halls Photo and names in the halls page.
  - As a user I can filter all service in specific date and location in services page.
  - As a logged user (Company) I can Login / Register , edit user profile information and there details and logout .
  - As a logged user (Company) I can see my halls and there details ,add hall,edit or delete it .
  - As a user I can go back from every page to home page or to a previous page .

# How to run our app on your local machine?

Follow these instruction in order:
1- Open your terminal.

2- Clone this repository.

  Using HTTP: git@github.com:FACK1/Party3laKefak.git
  
  Using SSH: https://github.com/FACK1/Party3laKefak.git

3- Create Database with username and password

4- Make a new file in the root directory Party3laKefak, and call it .env

   Copy paste the following in your .env file:
   
   DB_HOST= any port you want
   
   DB_NAME = your database name
   
   DB_USER = your user name
   
   DB_PASS = your user password
   
   DB_DIALECT = your database method
   
   SECRET= any secert you want
  
5- Install dependencies and dev dependencies; by typing in the terminal npm i.

6- Run on your termial npm run dev

7- Open the app by write in your browser `http://localhost:<your port>/`


# Flow of the app:

Goes to a home page, you wil see the services click on any one like 'hall' ,it will give us all services that related to 'hall', then click on one of then ,it will give us all details of this service, and you can sign up and login to add aservice and delete Existing one.

 # File Structure 
  ```
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

 # Database schema 
 ![](https://scontent.fjrs2-1.fna.fbcdn.net/v/t1.15752-9/49895342_371306640351737_5310681225613017088_n.jpg?_nc_cat=103&_nc_ht=scontent.fjrs2-1.fna&oh=48147803ea9f8626a3143ab19703b168&oe=5CBE32D4)
 
 # Variable rules
  - CamelCase
  - indentation tab
 # Linting Rules
  - es6
  - semicolon 
  - double quotes

  
  
