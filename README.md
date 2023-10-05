# Searching for Teammates-Application
# CodeCrush Cafe


# 🧭 Table of contents

- [Searching for Teammates-Application](#Searching-for-Teammates-Application)
- [🧭 Table of contents](#-table-of-contents)
- [Introduction](#introduction)
- [Quick Start](#quick-start)
- [Key features](#key-features)
- [Frontend](#frontend)
- [Backend](#backend)
- [Database](#database)
- [Future Aspirations for this App](#future-aspirations-for-this-app)

- # Introduction

Welcome to the README file for the **CodeCrush Cafe** website! This document is your comprehensive guide to understanding and using our platform, where hackathon enthusiasts can `connect`, `collaborate` and `participate in online hackathons`.

# Quick Start 

📄 Clone or fork this repo :
`https://github.com/AditiRathore03/Devheat_Beta_Hackbots.git`:

```sh
 https://github.com/AditiRathore03/Devheat_Beta_Hackbots.git
```

💿 Install all dependencies:

```sh
npm install
```

🚴‍♂️ Run your App:

```sh
cd backend
nodemon server.js

or

npm start

```
It runs on the browser with localhost 3000.
```sh
http://localhost:3000/
```


# Key features
- **Search for Teammates** by applying filters on skills of developers.
- **Discover Online Hackathons** and get a chance to participate in `hackathons`.


# Frontend
 - HTML<br>
 - CSS<br>
 - FontAwesome<br>
 - Javascript<br><br>
 
 -**`Home page` of the website.**

 ![](screenshots/Screenshot%202023-10-05%20213841.png)<br><br>



 - **You can fill the form details for `organizing a hackathon`.**
   
 ![](screenshots/Screenshot%202023-10-05%20214030.png)<br>
 



 - **Here you `create your team` for hackathons.**
   
 ![](screenshots/Screenshot%202023-10-05%20215201.png)<br>
 


# Backend

  At the `Backend` of this App, A `Nodejs` server is running, which manages all the `requests` and `responses` from the user. 
This App Uses Some Node_Modules in order to work properly which include:
- `Mongoose`
    - allows a server to indicate any origins other than its own from which a browser should permit loading resources.
- `Express`
  - create a web-server
  - handles request and response

- For end-to-end encryption here we are not storing the data and hence when the page reloads all the filters disappear.


# Database

We are using `MongoDB` for all its database needs. This App uses DB to:
 
 - **User Profiles:** Store user information, including names, email addresses and skills in a database. 
 - **Hackathon Data:** Maintain a database of hackathon events including event names, dates and themes.
 - **Teammate Matching:** Implement algorithms that match users with potential teammates based on their skills, interests, and hackathon preferences. 
   

# Future Aspirations for this App

There are some features that can be added in the future:
- `Integrate real-time chat` and collaboration tools to facilitate communication among team members.
- `Provide a repository` of resources, tutorials, and templates for hackathon participants to access during their projects.
- Allow users to create and `share blog posts, tutorials or project` showcases related to their hackathon experiences.
- Supporting virtual hackathons with additional features like `video conferencing` and `remote collaboration tools`.
- Expand user profiles to `include project portfolios & GitHub repositories` that showcase their skills and achievements.
- `Offer an API` that allows developers to build their own applications or integrations using your platform's data.
 
