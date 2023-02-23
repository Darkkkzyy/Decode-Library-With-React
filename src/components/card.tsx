import Button from "./button";

const Card = ({ hasButton=false, children, className }) => {
  return (
    <div className={`flex w-40 flex-col p-4 ${className}`}>
      {children}
      {hasButton && <Button>CardButton</Button>}
    </div>
  );
};

export default Card;
