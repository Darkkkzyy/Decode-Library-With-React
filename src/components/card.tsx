import { ReactNode } from "react";
import Button from "./button";

interface CardProps {
  hasButton?: boolean;
  children: ReactNode;
  className: string;
}

const Card = ({ hasButton = false, children, className }: CardProps) => {
  return (
    <div className={`flex w-40 flex-col p-4 ${className}`}>
      {children}
      {hasButton && <Button>CardButton</Button>}
    </div>
  );
};

export default Card;
