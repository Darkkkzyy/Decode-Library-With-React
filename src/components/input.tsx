interface Props {
  label: string;
}

const Input = ({label}:Props) => {
    return ( <>
    <div>
    <input
      className="rounded-[100px] border-2 w-[360px] h-[46px] p-5 m-[10px] "
      placeholder={label} />
    </div>
    
    </> );
}
 
export default Input;