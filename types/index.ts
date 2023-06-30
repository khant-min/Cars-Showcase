export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
