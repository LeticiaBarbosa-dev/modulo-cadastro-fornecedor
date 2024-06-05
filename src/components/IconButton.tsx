import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {}
export function IconButton({ ...props }: IconButtonProps) {
  return <button {...props} />;
}
