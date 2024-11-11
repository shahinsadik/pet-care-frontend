"use client";

import { IInput } from "@/src/types";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {}

const PHInput = ({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
  defaultValue,
  value,
  isDisabled,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name]?.message as string) : ""}
      isInvalid={!!errors[name]}
      variant={variant}
      size={size}
      required={required}
      type={type}
      label={label}
      defaultValue={defaultValue}
      value={value}
      isDisabled={isDisabled}
    />
  );
};

export default PHInput;
