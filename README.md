# Co-lab

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Co-Lab** Co-Lab is designed to be a students best friend and guide on campus. Co-Lab allows students to share information and insights into classes available at their selected school, follow peers who also share the same courses, and help connect with their fellow students in order to assist and inspire their academic goals._


<br>

## MVP

_The **Co-Lab** MVP
 #Server (Back End)
- Build a Ruby on Rails server, exposing RESTful JSON endpoints.
- Build database with at least 2 tables:
  - With at least 0 association between both tables. 
- Utilize Rails to define models for interacting with the database.
- Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between non-User tables.

#Client (Front End)
- Have a working, interactive React app.
- Have at least 8 separate, rendered components in an organized and understandable React file structure.
- Utilize functional or class React components appropriately.
- Utilize state and props in your components efficiently.
- Use only React for DOM Manipulation.
- Consume data from created Ruby on Rails API, and render that data in components.
- Utilize React Router, for client-side routing.
- Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end.

#Styling (Front End)
- Be styled with CSS (or SCSS, if you'd prefer).
- Use Flexbox or Grid in your layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

<br>

### Goals

- _Connections between user,_
- _Able to make posts and comments._
- _like, post and comments._

<br>

### Libraries and Dependencies


|     Library      | 
| :--------------: | 
|      React       | 
|   React Router   | 
| React SemanticUI | 


<br>

### Client (Front End)

#### Wireframes


![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree


[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Subjects.jsx
      |__ Posts.jsx
      |__ Comments.jsx
      |__ Likes.jsx
      |__ Search.jsx
|__ services/
      |__ Sort.jsx
      |__ Likes.jsx
|__ screens/
      |__ Home.jsx
      |__ LogIn.jsx
      |__ Create User.jsx
      |__ Profile.jsx
      |__ Edit.jsx

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| README              |    L     |     3 hrs      |     0 hrs     |    3 hrs    |
| Post                |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Edit                |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Search              |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Comments            |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Sort                |    H     |     3 hrs      |     0 hrs     |     TBD     |
| LogIn               |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Home                |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Profile             |    H     |     3 hrs      |     0 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     0 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model


[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Open to different schools, using location to know school. Able to follow classes.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.