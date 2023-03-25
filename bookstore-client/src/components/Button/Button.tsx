type Props = {
    children: string,
    type: "button"|"submit"
}

const Button = ({children, type}: Props) => {
  return (
    <button type={type} className=" max-w-[165px] h-[40px] px-[25px] bg-white text-black uppercase border-none cursor-pointer rounded-lg">
        {children}
    </button>
  )
}

export default Button