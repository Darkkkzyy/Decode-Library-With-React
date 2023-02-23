const Button = ( {children}) => {
  return (
    <button className="h-16 w-24 rounded-xl bg-slate-600 hover:bg-slate-800">
      {children}
    </button>
  );
};

export default Button;
