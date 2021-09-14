import ValidationError from '../errors/ValidationError';
import { NextFunction, Request, Response } from 'express';

class RomanToIndoarabic {

  private romanMatrix = [
    { value: 1000, character: 'M' },
    { value: 900, character: 'CM' },
    { value: 500, character: 'D' },
    { value: 400, character: 'CD' },
    { value: 100, character: 'C' },
    { value: 90, character: 'XC' },
    { value: 50, character: 'L' },
    { value: 40, character: 'XL' },
    { value: 10, character: 'X' },
    { value: 9, character: 'IX' },
    { value: 5, character: 'V' },
    { value: 4, character: 'IV' },
    { value: 1, character: 'I' }
  ];

  transform(req: Request, res: Response, next: NextFunction) {
    try {
      let valor = req.params.number;
      let charactersArray = valor.split("");
      let response = 0;
      let isValid = this.validateRomamAlgarism(charactersArray);
      if (isValid) {
        for (let i = charactersArray.length - 1; i >= 0; i--) {
          // console.log(charactersArray[i]);
          for (let j = 0; j < this.romanMatrix.length; j++) {
            if (charactersArray[i] === "V") {
              if (charactersArray[i - 1] === 'i') {
                response = this.romanMatrix[j].value + response;
              }
              if (charactersArray[i] === this.romanMatrix[j].character) {
                response = this.romanMatrix[j].value + response;
              }

            } else if (charactersArray[i] === "X") {

            } else if (charactersArray[i] === "L") {

            } else if (charactersArray[i] === "C") {

            } else if (charactersArray[i] === "D") {

            } else if (charactersArray[i] === "M") {

            }
          }
        }
      } else {
        throw new ValidationError("Algarismo Romando invÃ¡lido.", 401);
      }
      return res.json(response);
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(error.statusCode).json({
          status: "error",
          message: error.message
        });
        res.end();
      } else {
        next();
      }
    }
  }

  validateRomamAlgarism(value: Array<string>) {
    let count = 0;
    let lastCharacter = "";
    for (let i = 0; i < value.length; i++) {
      if (i > 0) {
        lastCharacter = value[i - 1];
      }

      if (value[i] == 'V' && lastCharacter == 'V') return false;
      if (value[i] == 'D' && lastCharacter == 'D') return false;
      if (value[i] == 'L' && lastCharacter == 'L') return false;
    }
    for (let i = 0; i <= value.length; i++) {
      if (i > 0) {
        lastCharacter = value[i - 1];
        if (lastCharacter == value[i]) {
          count++;
          if (count == 3) {
            return false;
          }
        } else {
          count = 0;
        }
      }
    }
    return true;
  }

}

export default RomanToIndoarabic;
