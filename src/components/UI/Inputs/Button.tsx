import { Button as BaseButton, ButtonProps } from "@mui/joy";

export interface Props extends ButtonProps {}

export const Button = (props: Props) => {
  return <BaseButton {...props} />;
};
