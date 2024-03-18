import { ValidationErrorItem, Context } from "joi";
import { HttpException, HttpStatus } from "@nestjs/common";

export class JoiUnprocessableEntityException extends HttpException {
  constructor(arg: JoiUnprocessableEntityExceptionArg[]) {
    super(arg, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}

abstract class JoiUnprocessableEntityExceptionItemContext implements Context {
  key?: string | undefined;

  label?: string | undefined;

  value?: any;
}

export abstract class JoiUnprocessableEntityExceptionArg
  implements ValidationErrorItem
{
  message: string;

  type: string;

  path: Array<string | number>;

  context?: JoiUnprocessableEntityExceptionItemContext;
}
