import Joi from "joi";
import { TGenericValidation } from "../types/helpersTypes";

export const genericValidation = (
  value: string,
  {
    whatOpening = "string",
    min,
    max,
    regexType = "unknown",
    isText = true,
    isRequired = true,
  }: TGenericValidation
) => {
  let neededRegex =
    regexType === "email"
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      : regexType === "password"
      ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{6,}$/
      : / /g;

  const baseSchema = Joi.string().trim();

  let neededOpening;
  if (whatOpening === "boolean") {
    neededOpening = null;
  } else {
    neededOpening =
      whatOpening === "string"
        ? regexType === "unknown"
          ? baseSchema
          : baseSchema.pattern(new RegExp(neededRegex))
        : Joi.number();
  }

  let booleanOpening = Joi.boolean().allow(null);

  let neededType = isText ? "letters" : "numbers";
  const Schema = Joi.object({
    Input: (neededOpening
      ? neededOpening
          .min(min || isRequired ? 2 : 0)
          .max(+max || 256)
          .messages({
            "string.base": `Must contain ${neededType}.`,
            "string.min": `Must have at least {#limit} ${neededType}.`,
            "string.max": `Must not exceed {#limit} ${neededType}.`,
            "string.pattern.base": `Must only contain ${neededType} ${
              regexType === "password"
                ? "- at least one uppercase, lowercase, special character(!@#$%^&*-), and number."
                : "- and be a valid email."
            }`,
            "any.required": "Field is required.",
          })
      : booleanOpening)[isRequired ? "required" : "optional"](),
  });

  return Schema.validate({ Input: isRequired ? value : "Leaving as empty " });
};
