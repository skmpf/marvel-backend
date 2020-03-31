# Marvel API

## Overview

A simple API to access Marvel characters and comics from Marvel's very own (and sadly very slow) API

<p align="center">
	<img
			width="600"
			alt="demo"
			src="https://github.com/sebkpf/marvel-react/blob/master/documentation/demo.png">
</p>

<p align="center">
  Demo:<a href="https://wiki-marvel.netlify.com" target="_blank"> https://wiki-marvel.netlify.com</a>
</p>

### Server

#### Dependencies

- Node.js
- axios
- express
- express-formidable
- cors
- mongoose
- crypto-js
- js-md5
- uid2
- dotenv

#### Architecture

- marvel route:
  _ get characters: axios request to Marvel API
  _ get character by id: axios request to Marvel API
  _ get comics: axios request to Marvel API
  _ get search for characters or comics: axios request to Marvel API \* get user favorites (handled by cookies): axios request to Marvel API

  Marvel API: https://developer.marvel.com/

- user route:
  _ sign up: creates new user account in MongoDB database and handles security with token, hash and salt
  _ log in: handled by token

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

<a href="https://github.com/sebkpf/marvel-react">https://github.com/sebkpf/marvel-react</a>

- React
- HTTP request with axios package (get and post)
- Hooks (useState, useEffect)
- React Router Dom
- Cookies to handle user favorites

## Deployment

- Client deployed with Netlify
- Server deployed with Heroku
- MongoDB database hosted on mLab

## Project status

Project is finished

## Contact

<a href="https://www.linkedin.com/in/sebastienkempf/" target="_blank">My LinkedIn profile</a>
