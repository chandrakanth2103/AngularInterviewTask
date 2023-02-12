===============================================================================================
Project Summary:

These project is for TV Shows using Angular and Angular Materials. This was written in Typescript, HTML, and CSS.
===========
Angular:
Here, I had used Angular framework to design the application because, #Angular is Typescript based front-end web application framework.Angular is one of the most popular framework used for UI design nowadays.Its most advanced features and performance have made it an essential tool for any web developer to have in their toolbox.It is maintained by Google, and its primary function is to design single-page applications.Some of the advantages of Angular framework are: 1. Angular provides a number of built-in features like routing, state management, rxjs library and http module out of box.This means that we do not need to look for above features separately. 2. Declarative UI 3.Long-term Google support.
Angular Material:
#Angular Material is a user interface component package that enables professionals to create a uniform, appealing, and fully functioning websites, web pages and web apps.In order to make use of Angular Material in Angular, we need to run the command: ng add @angular/material.

I made an application called The TV Shows using the Angular framework. Its main function is to fetch all the TV Shows based on genres[comdey,sports,Drama,etc..] and rating,and also we can search for the required TV Show with name of Show.If the Show is available it will get displayed,if not available it will show as "No Movies and TV Shows Found", also when the user clicks on any TV show in dashboard it will redirect to another page and displays all the details of that particular TV Show. We are getting up-to-date show information by hooking up service to TV Maze's API.

There are 3 subcomponents under the main app component: main component, screen component, and page Not Found component.

The service file i:e;Home_Service.ts file does the backend work to fetch all the data from the API (gellAllShows) and also fetch the sigle show by id (getShowBYId).

The main page displays all the new shows daily. You can search by keyword in the search box. When we click on the single show it redirect to screen component and displays all the details of that particular show this was made by using Angular materials.(mat-card, mat-icon, matInput, etc..).If we are searching for the route which is not available it will redirect to page not found component.And I had placed the back option in screen and page not found component, So that when the user clicks on that button it will get back to main page component.

# Angularproject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
