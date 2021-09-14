import { Router } from 'express';
import IndoarabicToRoman from '../services/IndoarabicToRoman';
import RomanToIndoarabic from '../services/RomanToIndoarabic';

const routes = Router();

routes.get('/indoarabicToRoman/:number', new IndoarabicToRoman().transform);
routes.get('/romanToIndoarabic/:number', new RomanToIndoarabic().transform);

export default routes;
