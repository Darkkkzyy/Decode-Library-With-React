interface Props {
  label: string;
}

const Input = ({label}:Props) => {
    return ( <>
    <div>
    <input
      type="email"
      className="rounded-[100px] border-none w-[360px] h-[46px] p-5 m-[20px]"
      
      placeholder={label} />
    </div>
    
    </> );
}
 
export default Input;