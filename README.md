# Angular CLI script application sample

## Overview

This sample illustrates building an Angular CLI application and deploying it as a JSR-286 script application portlet. It includes all the configuration and build steps needed to get the application running smoothly in WebSphere Portal.

[Angular CLI](https://cli.angular.io/) is a command line tool that allows developers to quickly get their applications up and running. This sample showcases a simple contact list written in [Angular 4](https://angular.io/).

With the IBM Script Application, any JavaScript framework application can be imported as a JSR-286 portlet and hosted on WebSphere Portal. Since the sample application is platform agnostic, the same code can be run as a portlet or mobile app, allowing reuse over multiple devices and platforms.

### Target audience

This article is intended for developers and architects, with an existing background knowledge of Angular and IBM Script Application. 

### Requirements

- [node](https://nodejs.org/en/) version 6.x
- [IBM Script Application](https://www.ibm.com/support/knowledgecenter/en/SSYJ99_8.5.0/script-portlet/ibm_script_portlet.html)
- [Command line push application for IBM Script Application](https://www.ibm.com/support/knowledgecenter/en/SSYJ99_8.5.0/script-portlet/cmd_line_push_ovr.html)

## Sample application 

### Description

This is an example of a simple application built with Angular CLI and the Bootstrap CSS library. It can run standalone with the `ng serve` command, and it can be imported into an IBM Script Application. It's an example of a Single Page Application (SPA), where the different views within a single index.html page are dynamically loaded by the Angular framework. When used in a Script Application, a SPA is displayed as one portlet on a portal page, possibly alongside other portlets. 

Here are the key features illustrated in the sample:

* The three different views (list, details, and about) are separate Angular components loaded as pages with the [Angular router](https://angular.io/guide/router), configured in app.module.ts.
* [Angular Http](https://angular.io/api/http/Http) is used to load the default JSON data file: *src/assets/contacts.json*.
* There are a few separate JavaScript files in the built application, and when running in IBM Script Application they are combined into a single resource by WebSphere Portal's [resource aggregation](https://www.ibm.com/support/knowledgecenter/en/SSYJ99_8.5.0/dev-theme/themeopt_reso_agg.html) feature (available in version 8.5, CF03 or later).
* The [Bootstrap 3](https://getbootstrap.com/docs/3.3/) library is used for styling of the application UI.

### Install

To set up this sample:

1. Download and unzip this [npm](https://www.npmjs.com/get-npm) repository.
2. Install project dependencies by running `npm install`.

### Configure

There are a few settings that need to be configured for WebSphere Portal to run any Angular application. These changes only need to be done once:

* Set (or create) both the `dynamic.parameter.tag.enabled` and the `renderingplugin.shortform.enabled` [resource environment provider](https://www.ibm.com/support/knowledgecenter/en/SSHRKX_8.5.0/mp/admin-system/adsetcfg.html) values of the `WCM WCMConfigService` service to `false` in the WebSphere Integrated Solutions Console, as this feature can interfere with Angular code that uses square brackets. Make sure to restart the `WebSphere_Portal` server after these updates. Click [here](https://www.ibm.com/support/knowledgecenter/en/SSDK36_8.5.0/wcm/wcm_tags_behavior.html) for more information on these settings.
* The Angular router requires the `HTML` `base` tag to be present on the page. Do this by setting the theme parameter `com.ibm.portal.theme.hasBaseURL` to `true`. The XML script to do this can be found [here](https://www.ibm.com/support/knowledgecenter/en/SSYJ99_8.5.0/wcm/prevent_friendly_url_redirects.html), and can be imported using the [Administration portlet](https://www.ibm.com/support/knowledgecenter/en/SSYJ99_8.5.0/admin-system/adxmltsk_portlets_imp.html).

### Develop

When creating a new Angular CLI application to run in the IBM Script Application, some code updates should be implemented. This sample already includes these changes:

* Add the `data-scriptportlet-combine-urls="true"` parameter to the `html` tag in *src/index.html* to take advantage of WebSphere Portal's resource aggregator.
* Configure [hash location strategy](https://angular.io/guide/router#hashlocationstrategy) in the Angular router. Using the path location strategy is not compatible with WebSphere Portal URLs.

### Build

After configuration and development, build an application for production:

1. Run `ng build -prod` to package and compress the application into the `/dist` folder.

**Note** If the `ng` command is not found, install the package globally by following the instructions [here](https://github.com/angular/angular-cli#installation).

### Deploy

After building the application, use the [Script Application command line application](https://developer.ibm.com/digexp/docs/docs/script-portlet/using-command-line-push-to-deploy-script-portlet-applications/) to push it to WebSphere Portal:

1. From the `/dist` folder, run `sp push -wcmContentName "Angular 4 CLI Contacts Sample"`
2. [Add the Script Application](https://www.ibm.com/support/knowledgecenter/en/SSYJ99_8.5.0/script-portlet/drop_app_toolbar.html) to a page.

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

## License

See the included license file [License](LICENSE).
