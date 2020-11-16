
## Description
All the APIS are maintained in swagger file. Access available after setup is running on 
`http://localhost:3000/doc/`

This is a [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Arch.
![Alt text](arch.png?raw=true "Architecture")

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

##Pre-deploy script contains sample csv data to be stored in db
`node pre-deploy/csv-to-db.js`

## to do
Detailed unit testing.
Commenting
Error handling

## License

  Nest is [MIT licensed](LICENSE).
