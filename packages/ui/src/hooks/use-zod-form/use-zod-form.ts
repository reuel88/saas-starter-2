"use client";

import { useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeOf, ZodSchema } from "zod";

type UseZodFormProps<Z extends ZodSchema> = Exclude<
  UseFormProps<TypeOf<Z>>,
  "resolver"
> & {
  schema: Z;
};

export const useZodForm = <Z extends ZodSchema>({
  schema,
  ...rest
}: UseZodFormProps<Z>) => {
  return useForm({ ...rest, resolver: zodResolver(schema) });
};
