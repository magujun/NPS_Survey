[![Build Status](https://travis-ci.com/magujun/nodeJS-NPS_Survey.svg?branch=main)](https://travis-ci.com/magujun/nodeJS-NPS_Survey)

# nodeJS-NPS_Survey

<h3 align="center">
    <img width="200px" src="https://i.imgur.com/NDGJnnY.png">
    <br><br>
    <p align="center">
      <a href="#-technology">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-setup">Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-testing">Testing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-project-links">Project links</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-contribute">Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">License</a>
  </p>
</h3>

## 🔖 About

[![GitHub forks](https://img.shields.io/github/forks/magujun/nodeJS-NPS_Survey?style=social)](https://github.com/magujun/nodeJS-NPS_Survey/network/members/)
[![GitHub stars](https://img.shields.io/github/stars/magujun/nodeJS-NPS_Survey?style=social)](https://github.com/magujun/nodeJS-NPS_Survey/stargazers/)

A Node.js <strong>TypeScript</strong> based Net Promoter Score (NPS) survey web REST API built on the **Node.js** track of **Next Level Week #4** presented by **[Rocketseat](https://rocketseat.com.br/)**.

## 🚀 Technology

This project has been developed and tested with the following technologies:

- [Node.js](https://nodejs.org/en/) :: JavaScript runtime
- [Express](https://expressjs.com/) :: web framework
- [Yarn](https://yarnpkg.com/) :: package manager
- [SQLite3](https://www.sqlite.org/) :: local database
- [TypeORM](https://typeorm.io/) :: object-relational-mapping database migration
- [Handlebars](https://handlebarsjs.com/) :: html templating for email content
- [Nodemailer](https://nodemailer.com/) :: Node.js module to send emails
- [Jest](https://jestjs.io/) :: JavaScript testing framework
- [Yup](https://github.com/jquense/yup) :: object schema validation
- [Ethereal](https://ethereal.email/) :: fake SMTP service

## ⤵ Setup

These instructions will take you to a copy of the project running on your local machine for testing and development purposes.
Integration tests have been implemented.

**Note:** The database used in this project is sqlite3, but you should be able to configure the <i>ormconfig.json</i> file for your specific database.

The "database" field in the DBMS represents the name of the database, which in this project is local.

```bash
- git clone https://github.com/magujun/nodeJS-NPS_Survey.git
- cd nodeJS-NPS_Survey
```

### Windows Setup (Powershell)
```Powershell
- Set-ExecutionPolicy RemoteSigned
- Get-ExecutionPolicy
- Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

- choco -v
- cinst nodejs-lts
- cinst yarn -force
- refreshenv
- node -v  
- npm -v
- yarn -v
```

### Visual Studio Code Setup 

**Recommended Extensions**

  - Omni
  - Material Icon Theme
  - ESLint
  - Prettier
  - SQLite
  - Bracket Pair Colorizer 2
  - Code Spell Checker
  - Live Server
  - Markdown All in One

Install dependencies (recommended using NPM for reflect-metadata compatibility)

VS Code Terminal *(Powershell)*
```bash
- npm install
```
or

```bash
- yarn install
```
or

```Terminal
- yarn init -y

- yarn add express
- yarn add @types/express -D

- yarn add typescript -D
- yarn tsc --init
- yarn add ts-node-dev -D

- yarn add sqlite3

- yarn add typeorm reflect-metadata
- yarn typeorm
- yarn typeorm migration:create -n CreateUsers
- yarn typeorm migration:create -n CreateSurveys
- yarn typeorm migration:create -n CreateSurveysUsers
- yarn typeorm migration:run

- yarn add uuid  
- yarn add @types/uuid -D

- yarn add jest
- yarn jest --init
- yarn add ts-jest -D  
- yarn add @types/jest -D
- npm i --save-dev @types/jest

- yarn add cross-env -D  

- yarn add supertest 
- yarn add @types/supertest -D

- yarn add nodemailer
- yarn add @types/nodemailer -D

- yarn add handlebars

- yarn add yup
- yarn add @types/yup -D

- yarn add express-async-errors

- yarn add eslint -D  
- yarn add prettier -D
```

The first time you run the server will generate the sqlite3 database.sqlite file, where the API tables are stored.

```bash
- yarn devDB
```

Create table of migrations from sqlite3 using the TypeORM cli.

```bash
- yarn typeorm migration:run
```

Initialize a local server instance (script configured in package.json).

```bash
- yarn dev
```

## ⤵ Testing

To make requests and inspect responses you can use [Insomnia Core](https://insomnia.rest/) client for REST applications.

To edit and manage your SQL database you can use [Beekeeper Studio](https://www.beekeeperstudio.io/).

To test if the application has been correctly setup and pass all integration tests, please use the command:

```bash
- yarn test
```

## 🔗 Project links

### Notion

- [Environment](https://www.notion.so/Configura-es-do-ambiente-Node-js-ae9fea3f78894139af4268d198294e2a)
- [Class 1](https://www.notion.so/Dia-1-Fundamentos-do-NodeJS-a0040fa51a764bdaaf5648fedbf6fb4d)
- [Class 2](https://www.notion.so/danileao/Dia-2-Iniciando-com-o-Banco-de-Dados-ffa8a141872641b7b13338f339d7a69b)
- [Class 3](https://www.notion.so/Dia-3-Testando-a-nossa-aplica-o-6b517e6d081241258009c640f7032cde)
- [Class 4](https://www.notion.so/danileao/Dia-4-Envio-de-e-mail-1b85cb36f0a84e5e90a43e3acbce5674)
- [Class 5](https://www.notion.so/Dia-5-Finalizando-nossa-api-com-valida-es-1f972c0e73a548fc84217ddf79fb7d90)

### Resources

[Icons & Wallpapers](https://drive.google.com/drive/folders/11fxy_LmTD6S1FGTQbeu47QPLzvyuEGSs)

## 🎓 Who taught?

All the classes were taught by **[Daniele Leão](https://github.com/danileao)** at Rocketseat's **NLW#4**.

## 🤔 Contribute

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

After the merge of your pull request is done, you can delete your branch.

## 📝 License

This project is under the MIT license.<br/>
See the [LICENSE](LICENSE) file for more details.

---

<h4 align="center">
  Done by <a href="https://www.linkedin.com/in/marcelo-guimaraes-junior/" target="_blank">Marcelo Guimarães Junior.</a><br/>
</h4>
