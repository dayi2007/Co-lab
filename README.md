# Co-lab

#https://class-colab.netlify.app/

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

- _Connections between users,_
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

 
![profile](https://user-images.githubusercontent.com/9592819/145590498-32154835-2c04-49c9-86d9-799eb5c42e00.JPG)

- Profile

![Landing](https://user-images.githubusercontent.com/9592819/145590451-b07818c2-e2f4-4307-b58f-f05b85e01b22.JPG)

- Landing

![Login](https://user-images.githubusercontent.com/9592819/145590552-c2cea78e-d1d8-4f9c-a073-44a6a2682eb2.JPG)

- Resource Login

![SignUp](https://user-images.githubusercontent.com/9592819/145590630-0f8371b5-e1df-4450-9ca3-c7cf893ada47.JPG)

- Resource Create Post

![Create Post](https://user-images.githubusercontent.com/9592819/145591590-780184a1-670b-4099-b1b6-176c0379068e.JPG)

- Create Post

url:(https://www.figma.com/file/2MaqOTZxFpcNWYnmZBnfPC/CO-LAB?node-id=0%3A1)

#### Component Tree


[Component Tree Sample]<img width="2088" alt="Component Tree" src="https://user-images.githubusercontent.com/9592819/145591858-9551b481-8284-4ac3-a6ad-bf23c8681514.png">


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
| README              |    L     |     3 hrs      |     3 hrs     |    3 hrs    |
| Post                |    H     |     6 hrs      |     0 hrs     |    7 hr     |
| Edit                |    H     |     4 hrs      |     0 hrs     |    3 hr     |
| Search              |    H     |     3 hrs      |     0 hrs     |     n/a     |
| Comments            |    H     |     3 hrs      |     0 hrs     |     n/a     |
| Sort                |    H     |     2 hrs      |     0 hrs     |     n/a     |
| LogIn               |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Home                |    H     |     5 hrs      |     0 hrs     |     TBD     |
| Profile             |    H     |     3 hrs      |     0 hrs     |     TBD     |
| TOTAL               |          |    31 hrs      |     0 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![ERD Co-lab](https://user-images.githubusercontent.com/9592819/145591736-f9af126a-b7e5-4e51-bc03-965d57725e48.JPG)

<br>

***

## Post-MVP

> Open to different schools, using location to know school. Able to follow classes.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
