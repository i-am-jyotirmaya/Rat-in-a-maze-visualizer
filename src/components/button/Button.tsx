/* eslint-disable @typescript-eslint/no-explicit-any */

import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  icon: any;
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="btn primary">Build new</button>;
};
