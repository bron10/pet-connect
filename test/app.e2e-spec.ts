import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/customers (GET)', () => {
    return request(app.getHttpServer())
      .get('/customers')
      .expect(200)
      // .expect('Hello World!');
  });

  it('/customers?state=ACT (GET)', () => {
    const state = `ACT`;
    return request(app.getHttpServer())
      .get(`/customers?state=${state}`)
      .expect(200)
      .then((byStates) => {
        // console.log("data=>", data.body)
        byStates.body.forEach((customer) => {
          return expect(customer.state).toBe(state);
        })
      })
  });

  it('/customers?petExperience=Y (GET)', () => {
    const petExperience = `Y`;
    return request(app.getHttpServer())
      .get(`/customers?petExperience=${petExperience}`)
      .expect(200)
      .then((data) => {
        return expect(data.body.length).toBe(6);
      })
  });
});
