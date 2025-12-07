/* eslint-disable */
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { expect } from 'vitest';

export const toInstance = cls => (attrs, _opts) =>
  plainToInstance(cls, attrs);

export const validateOptionalProperty
  = (cls, input) => async (property: string) => {
    const modifiedInput = { ...input, [property]: undefined };
    const payout = plainToInstance(cls, modifiedInput);

    const errors = await validate(payout);
    expect(errors.length).toBe(0);
  };

export const validateProperty
  = (cls, input) =>
    async (property: string, value: any, constraints: string[]) => {
      const modifiedInput = { ...input, [property]: value };
      const payout = plainToInstance(cls, modifiedInput);

      const errors = await validate(payout);
      expect(errors.length).toBe(constraints.length);

      const [validationError, ..._ignore] = errors;
      expect(validationError.property).toBe(property);
      constraints.forEach((constraint) => {
        expect(validationError.constraints).toHaveProperty(constraint);
      });
    };
