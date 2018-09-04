

# Exercise

![Completed](https://img.shields.io/badge/Completed-100%25-green.svg) 
![ES6](https://img.shields.io/badge/ES6-Done-yellow.svg) 
![Ajax](https://img.shields.io/badge/Ajax-Done-ff69b4.svg) 
![Webpack](https://img.shields.io/badge/Webpack-Done-blue.svg) 
![UnitTest](https://img.shields.io/badge/Unit%20tests-Pending-red.svg) 
![Docker](https://img.shields.io/badge/Docker-Pending-0765fc.svg) 
![Kubernetes](https://img.shields.io/badge/Kubernetes-Pending-cadbf7.svg) 


Accordion exercise done with ES6-Webpack-JsonServer

## Requeriments
You need to have install it, as global, the next libraries:

```sh
$ npm install -g json-server            # for mock API calls

```

## To execute it in a local environment

You will need to execute webpack and json-server both at same time (*). 

![Ide](ide.png)


In the 1st terminal window, run the json-server command:
```sh
json-server mocks\userData.json
```
In the 2nd terminal window, run webpack-dev-server with hot reloading:

```sh
npm run start
```
or 

```sh
yarn start
```

(*) Anyway, if the API throw an error, a mock data will be used to display results

## To generate the distribution package
You will need to launch the build process and deploy it the results located in the "dist" folder.

```sh
yarn build
```


## Commands

```sh
$ npm run build               # generates bundler
$ npm run start               # starts local server with hot reloading

```

## Github repository

![GitHub Logo](githubLogo.png)

<a href="https://github.com/ibanjb/VanillaES6">Navigate to the Github repository with the source code</a>

