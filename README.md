# Angular CLI script application sample

## Overview

This sample illustrates building an Angular CLI application and deploying it as a JSR-286 portlet. It includes all the configuration and build steps needed to get the application running smoothly in WebSphere Portal.

[Angular CLI](https://cli.angular.io/) is a command line tool that allowed developers to quickly get their applications up and running. This sample showcases a simple contact list written in [Angular 4](https://angular.io/).

With the IBM Script Portlet, you can import any JavaScript framework application as a JSR-286 portlet and host it on WebSphere Portal. Since the sample application is platform agnostic, you can run the same code as a portlet or mobile app, allowing reuse over multiple devices and platforms.

## Target audience

This article is intended for developers and architects, with an existing background knowledge of Angular and IBM Script Portlet. 

## Requirements

- [node](https://nodejs.org/en/) version 6.x
- [Script Portlet](https://www.ibm.com/support/knowledgecenter/en/SSHRKX_8.5.0/script/script-portlet/prerequisites.html) version 1.3

## Sample application overview

This is an example of a simple application built with the Angular 4 framework and the Bootstrap CSS library. It can run standalone by loading index.html, and it can be imported or pushed into a Script Portlet. It's an example of a "single page application" where the different views within a single index.html page are dynamically loaded by the Angular framework. When used in a Script Portlet, a single page application like this is displayed as one portlet on a portal page, typically alongside other portlets. 

The application is a simple contact list application for viewing a list of contacts. Here are the key features illustrated in the sample:

• The three different views (list, details, and about) are separate HTML files loaded as partial pages using the [Angular router](https://angular.io/guide/router), configured in app.module.ts.

• [Angular Http](https://angular.io/api/http/Http) is used to load the default JSON data file, contacts.json.

• There are two simple Angular controllers used, for the list view and the details view.

• There are three local JavaScript files used, and when running in Script Portlet they are combined into a single resource by WebSphere Portal's resource aggregation feature (available in version 8.5, CF03 or later). See the comment at the top of index.html for how this is enabled.

• The [Bootstrap 3](https://getbootstrap.com/docs/3.3/) library is used for styling of the application UI

## Angular CLI information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
