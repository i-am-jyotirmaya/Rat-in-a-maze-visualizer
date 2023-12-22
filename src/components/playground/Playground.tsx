import { Button } from "../button/Button";
import "./Playground.scss";

export const Playground: React.FC = (): JSX.Element => {
  return (
    <div className="playground-root">
      <Button>Click here</Button>
    </div>
  );
};
