import IndoarabicToRoman from './IndoarabicToRoman';
import request from 'supertest';

import app from '../app';

let indoarabicToRoman: IndoarabicToRoman;

describe('transform number', () => {
  beforeEach(() => {
    indoarabicToRoman = new IndoarabicToRoman();
  })

  it('should be transform indoarabic number to roman', async () => {
    const value = 1500;
    const response = await request(app).get(`/indoarabicToRoman/${value}`);

    expect(response.body?.value).toEqual('XX');
  })
})
