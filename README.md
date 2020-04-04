# Marvel API

## Overview

A simple API to access Marvel characters and comics from Marvel's very own (and sadly very slow) API

<p align="center">
	<img
			width="1000"
			alt="demo"
			src="https://github.com/sebkpf/marvel-react/blob/master/documentation/demo.png">
</p>

<p align="center">
  Demo:<a href="https://wiki-marvel.netlify.com" target="_blank"> https://wiki-marvel.netlify.com</a>
</p>

### Server

#### Dependencies

- [Node.js](https://nodejs.org/en/)
- [axios](https://www.npmjs.com/package/axios)
- [express](https://www.npmjs.com/package/express)
- [express-formidable](https://www.npmjs.com/package/express-formidable)
- [cors](https://www.npmjs.com/package/cors)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [crypto-js](https://www.npmjs.com/package/crypto-js)
- [js-md5](https://www.npmjs.com/package/js-md5)
- [uid2](https://www.npmjs.com/package/uid2)
- [dotenv](https://www.npmjs.com/package/dotenv)

#### Architecture

- marvel route:

  - get characters: axios request to Marvel API
  - get character by id: axios request to Marvel API
  - get comics: axios request to Marvel API
  - get search for characters or comics: axios request to Marvel API \* get user favorites (handled by cookies): axios request to Marvel API

  Marvel API: [https://developer.marvel.com/](https://developer.marvel.com/)

- user route:

  - sign up: creates new user account in MongoDB database and handles security with token, hash and salt
  - log in: handled by token

- middleware: isAuthenticated checks for user token when client makes a http request

### Running the project

Clone this repository:

```
git clone https://github.com/sebkpf/marvel-backend.git
cd marvel-backend
```

Install packages:

```
npm install
```

When installation is complete, run with:

```bash
npx nodemon index.js
```

## Marvel Client

[https://github.com/sebkpf/marvel-react](https://github.com/sebkpf/marvel-react)

- [React](https://reactjs.org/docs/getting-started.html)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [JS Cookie](https://github.com/js-cookie/js-cookie)
- [Axios](https://github.com/axios/axios)

## Deployment

- Client deployed with Netlify
- Server deployed with Heroku
- MongoDB database hosted on mLab

## Project status

Project is finished

## Contact

[My LinkedIn profile](https://www.linkedin.com/in/sebastienkempf/)
