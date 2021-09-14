import ValidationError from '../errors/ValidationError';
import { NextFunction, Request, Response } from 'express';

class IndoarabicToRoman {

  transform(req: Request, res: Response, next: NextFunction) {
    try {

      return res.json("hello World!" + req.params.number);
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(error.statusCode).json({
          status: "error",
          message: error.message
        });
        res.end()
      } else {
        next();
      }
    }
  }
}

export default IndoarabicToRoman;
