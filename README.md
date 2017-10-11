# Angular CLI script application sample

## Overview

This sample illustrates building an Angular CLI application and deploying it as a JSR-286 portlet. It includes all the configuration and build steps needed to get the application running smoothly in WebSphere Portal.

[Angular CLI](https://cli.angular.io/) is a command line tool that allowed developers to quickly get their applications up and running. This sample showcases a simple contact list written in [Angular 4](https://angular.io/).

With the IBM Script Portlet, any JavaScript framework application can be imported as a JSR-286 portlet and host it on WebSphere Portal. Since the sample application is platform agnostic, the same code can be run as a portlet or mobile app, allowing reuse over multiple devices and platforms.

## Target audience

This article is intended for developers and architects, with an existing background knowledge of Angular and IBM Script Portlet. 

## Requirements

- WebSphere Portal version 8.0.0.1 or higher
- Java 1.6 or newer
- [node](https://nodejs.org/en/) version 6.x
- [IBM Script Portlet](https://www.ibm.com/support/knowledgecenter/en/SSHRKX_8.5.0/script/script-portlet/prerequisites.html) version 1.3
- [Command line push application for IBM Script Portlet](https://www.ibm.com/support/knowledgecenter/en/SSHRKX_8.5.0/script/script-portlet/cmd_line_push.html)

## Sample application overview

This is an example of a simple application built with the Angular 4 framework and the Bootstrap CSS library. It can run standalone by loading index.html, and it can be imported or pushed into a Script Portlet. It's an example of a "single page application" where the different views within a single index.html page are dynamically loaded by the Angular framework. When used in a Script Portlet, a single page application like this is displayed as one portlet on a portal page, typically alongside other portlets. 

The application is a simple contact list application for viewing a list of contacts. Here are the key features illustrated in the sample:

• The three different views (list, details, and about) are separate HTML files loaded as partial pages using the [Angular router](https://angular.io/guide/router), configured in app.module.ts.
• [Angular Http](https://angular.io/api/http/Http) is used to load the default JSON data file, contacts.json.
• There are two simple Angular controllers used, for the list view and the details view.
• There are three local JavaScript files used, and when running in Script Portlet they are combined into a single resource by WebSphere Portal's resource aggregation feature (available in version 8.5, CF03 or later). See the comment at the top of index.html for how this is enabled.
• The [Bootstrap 3](https://getbootstrap.com/docs/3.3/) library is used for styling of the application UI

## Configuration

There are a few steps that need to be taken to configure WebSphere Portal and Script Portlet to run the Angular application. These steps only need to be done once.

1. Set both `dynamic.parameter.tag.enabled` and `renderingplugin.shortform.enabled` in the `WCM WCMConfigService` service to `false` in the WebSphere® Integrated Solutions Console, as this feature can interfere with Angular code that uses square brackets. [more information](https://www.ibm.com/support/knowledgecenter/en/SSDK36_8.5.0/wcm/wcm_tags_behavior.html)
2. The Angular router requires the `HTML` `base` tag to be present. Do this by setting the theme parameter `com.ibm.portal.theme.hasBaseURL` to `true`. [more information](https://www.ibm.com/support/knowledgecenter/en/SSYJ99_8.5.0/wcm/prevent_friendly_url_redirects.html)

## Deployment

After configuration, use the [Script Portlet command line application](https://www.ibm.com/support/knowledgecenter/en/SSHRKX_8.5.0/script/script-portlet/cmd_line_push_ovr.html) to push the sample to WebSphere Portal:

1. Run `ng build -prod` to build, package and compress the application into the `/dist` folder
2. From the `/dist` folder, run `sp push -wcmContentName "Angular 4 CLI Contacts Sample"`

## Angular CLI information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

### Initialization

The following commands were used to setup this sample application:

```
ng new SampleAngularScriptApp
```

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
