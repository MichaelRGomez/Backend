import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export const joiValidationGenerator = (schema: Joi.ObjectSchema) => {

    // This is the middleware function
    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            // Validate the request body asynchronously
            req.body = await schema.validateAsync(req.body);

            // If there is no error, call the next middleware
            next();

        } catch (error: any) {

            // if the error is an instance of ExternalValidationError
            if (error instanceof ExternalValidationError) {
                return res.status(400).json({ error: error.error });
            } 

            // if there is an error, first check if it's a Joi error
            if (Joi.isError(error)) {
                return res.status(400).json({ error: error.details[0].message });
            }

            return res.status(500).json({message: "there is an error"});   
        }
    };

};

class ExternalValidationError extends Error {

    error: string;

    constructor(message: string) {
        super(message);
        this.error = message;
        this.name = 'CustomError';
    }
}