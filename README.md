# ServermanagerFrontend

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.  
This is the frontend of the fullstack application Server Manager, an app where you can save, delete and ping servers. 
With this app, you can test the connection between the machine where the program is running and another machine by its IP address.  
The backend repository can be find here: https://github.com/nicolasgandrade/servermanager-backend

<h4 align="center"> 
	Heroku deploy:<br>
	:heavy_check_mark: Fullstack app: https://serversmanager.herokuapp.com :heavy_check_mark: <br> 
	:gear: API: https://serversmanager-backend.herokuapp.com :gear:
</h4>

<p><b>Obs:</b> The deploy in Heroku is just a demo of the application. The original purpose of the project is to test the connection between 2 servers, so
you can clone the app to your local machine and use the program properly, testing your connection to other servers.</p>

<h2 id="features">Features</h2>

- [x] Save new server
- [x] Delete server
- [x] Ping server
- [x] Generate .XLS report (frontend feature)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  
If you want to run the fullstack app (recomended), remember to start the API first in localhost:8080 (to run in other port, config correctly the server.service.ts file). You can clone the repository here: https://github.com/nicolasgandrade/servermanager-backend

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Warning
1. If the application shows an error at start, try to wait a minute, then refresh the page. Heroku apps take a while to start if they are in sleep mode.  
2. The generated report cannot be readed correctly by google sheets. The best way to have a good experience with the report is using Excel, because this one is able to convert HTML tags to Excel tables.
