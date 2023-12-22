/* eslint-disable @typescript-eslint/no-explicit-any */

import "./Button.scss";

export const Button: React.FC<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <button {...props} className="btn primary">
      {children}
    </button>
  );
};
