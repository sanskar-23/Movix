
<p align="center">
  <a href="https://github.com/sanskar-23/Movix">
    <img src="https://movieexx.netlify.app/assets/movix-logo-HTlvmwAF.svg" alt="Logo" width="80" height="80">
  </a>
  <h1 align="center">Movix</h1>
</p>

<table  align="center">
  <tr>
    <td>
      Movix is a web app built with ReactJS and The Movie Database(TMDB) API which allows a user to search for different movies watch trailers and get to know about movies cast and not only movies it provides the same functionality for TV shows, series as well, with a subtle yet attractive UI and great functionality! 
     </td>
   </tr>
</table>


## Demo
Here is the website :  https://movieexx.netlify.app

## Our very own Movix app
### Landing Page

![](https://github.com/sanskar-23/Movix/blob/main/src/assets/Screenshot%202024-02-19%20172304.png)

### Trending
![](https://github.com/sanskar-23/Movix/blob/main/src/assets/Screenshot%202024-02-19%20173600.png)

### Top Rated

![](https://github.com/sanskar-23/Movix/blob/main/src/assets/Screenshot%202024-02-19%20185157.png)

### Settings
![](https://github.com/mannadamay12/notefy/blob/main/frontend/src/assets/media/settings.png)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
<h2> :cactus: Folder Structure</h2>

    .
    │
    ├── frontend
    │   ├── public
    │   │   └── index.html   
    │   │
    │   │    
    │   │
    │   ├── src
    │   │   ├── assets
    │   │   │   ├── css
    │   │   │   └── media
    │   │   ├── components
    │   │   |   ├── AddNote.js
    │   │   |   ├── Button.js
    │   |   |   ├── DashboardHome.js
    │   |   |   ├── ExpandNote.js
    │   │   |   ├── Icon.js
    │   |   |   ├── Input.js
    │   │   |   ├── Login.js
    │   |   |   ├── MoonToggle.js
    │   │   |   ├── Note.js
    │   |   |   ├── NotesList.js
    │   │   |   ├── searchbar.js
    │   |   |   ├── Settings.js
    │   |   |   ├── SideNav.js
    │   |   |   └── ToggleBtn.js
    │   │   |    
    │   │   ├──pages
    │   │   |   ├── Auth.js
    │   │   |   ├── Dashboard.js
    │   │   |   └── LandingPage.js
    |   │   |  
    │   │   |    
    │   │   ├──store
    │   │   |   └── auth-context.js
    │   |   |
    │   │   |    
    │   │   |    
    |   │   │── App.js
    |   │   │── App.css
    |   │   │── index.js
    |   │   │── index.css
    |   │   │── URL.js
    |   │   │── CONSTANTS.js
    │   │   |  
    │   │   |    
    │   │   |    
    │   │   | 
    ├── backend
    │   ├── config
    |   |   ├── asgi.py
    |   |   ├── __init__.py
    │   │   ├── settings.py
    │   │   ├── urls.py
    │   │   └── wsgi.py
    │   │    
    │   │     
    │   │      
    │   │── docker-compose.yml
    │   │── Dockerfile
    │   │── key.pem
    │   │── manage.py
    │   |   
    │   │     
    │   │      
    │   │── notes
    |   |   ├── apps.py
    |   |   ├── __init__.py
    │   │   ├── getDateTime.py
    │   │   ├── models.py
    │   │   ├── permissions.py
    |   |   |── urls.py
    │   │   └── views.py
    │   │     
    │   │  
    │   │     
    │   │  
    |   │── origin.pem
    |   |── requirements.txt
    |   |── run.sh
    │   │     
    │   │     
    │   │── users  
    |   |   ├── admin.py
    |   |   ├── forms.py
    │   │   ├── generateAvatar.py
    │   │   ├── __init__.py
    │   │   ├── managers.py
    |   |   |── models.py
    │   │   ├── serializers.py
    |   |   |── urls.py
    │   │   └── views.py   

    
   

<h1 align="center"><a href="https://notefy.servatom.com">Usage</a></h1>

## Want to run this repo locally?
<h2>Open your command line and start with the following commands:</h2>

<p> To render react-frontend, run :</p>
<pre><code>$ cd frontend</code></pre>
<p>Install the node modules</p>
<pre><code>$ npm i</code></pre>
<p>Now start the react modules</p>
<pre><code>$ npm start</code></pre>

<h3>You can run the server by:</h3>
<p>Fistly, install the requirements using <code>pipenv</code></p>
<pre><code>$ pip install pipenv
$ pipenv install
$ pipenv shell
$ pip install -r requirements.txt</code></pre>
<pre><code>$ cd backend</code></pre>
<p>Start the backend</p>
<pre><code>$ python manage.py migrate
$ python manage.py runserver</code></pre>

## To fix a bug or enhance an existing module, follow these steps:

<h3>Want to contribute? Great!</h3>

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 

We will review and accept the PR.

<h3>Bug / Feature Request</h3>

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/Servatom/notefy/issues) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/Servatom/notefy/issues/new). Please include sample queries and their corresponding results.

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
## Built with
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com) <br>
[![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org) <br>
[![](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com) <br>
[![Docker](https://badgen.net/badge/icon/docker?icon=docker&label)](https://https://docker.com/)

## Project Motivation


## Team

<p>
  :mortar_board: <i>All maintainers in this project are under-graduate students in the <a href="https://csed.thapar.edu">Department of
Computer Science and Engineering, TIET</a> <b>@</b> <a href="https://www.thapar.edu/">Thapar University</a></i> <br> <br>
  
  :woman: <b>Rupanshi Jain</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>jainrupanshi@outlook.com</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/rdotjain">@rdotjain</a> <br>
  
  :boy: <b>Yashvardhan Arora</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>yash22arora@gmail.com</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/yash22arora">@yash22arora</a> <br>

  :boy: <b>Raghav Sharma</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>raghav.sharma17@outlook.com</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/raghavTinker">@raghavTinker</a> <br>

  :boy: <b>Adamay Mann</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>meadamann2002@gmail.com</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/mannadamay12">@mannadamay12</a> <br>
  
  :boy: <b>Nirbhay Makhija</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>nmakhija_be20@thapar.edu</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/Nirbhay-nrb">@Nirbhay-nrb</a> <br>
  
  :boy: <b>Rohit Kumar</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>rkumar_be20@thapar.edu</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/krohitk17">@krohitk17</a> <br>
</p>

## Contributions

All contributions are welcome.
Please take a moment to go through [CONTRIBUTING.md](https://github.com/Servatom/notefy/blob/main/CONTRIBUTING.md)

Solve the issues [here](https://github.com/Servatom/notefy/issues)

## [License](https://github.com/Servatom/notefy/blob/main/LICENSE)

Usage is provided under the MIT License. See LICENSE for the full details.








# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
