

export class InvalidInputError implements Error{
      name: string;
      message: string;
      stack?: string | undefined;

      constructor(message?: string){
            this.name = "InvalidInputError"
            this.message = message ? message : ""
      }
}