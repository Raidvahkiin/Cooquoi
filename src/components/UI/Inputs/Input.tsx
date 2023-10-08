import { Input as BaseInput, InputProps } from "@mui/joy";
export interface Props extends InputProps {}

export const Input = (props: Props) => {
  return <BaseInput {...props} />;
};
