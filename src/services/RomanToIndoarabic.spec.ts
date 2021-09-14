import RomanToIndoarabic from './RomanToIndoarabic';
import request from 'supertest';

import app from '../app';

let romanToIndoarabic: RomanToIndoarabic;

describe('transform number', () => {
  beforeEach(() => {
    romanToIndoarabic = new RomanToIndoarabic();
  })

  it('should be transform roman number to indoarabic', async () => {
    const value = "MMXXI";
    const response = await request(app).get(`/romanToIndoarabic/${value}`);

    expect(response.body?.value).toEqual('2021');
  })
})
