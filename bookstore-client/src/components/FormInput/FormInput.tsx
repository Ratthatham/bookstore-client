type prop = {
  label: string,
  type: string,
  name: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>)=>void,
  required: true
}


const FormInput = ({label, type, name, value, onChange, required} : prop) => {
  return (
    <div className=" relative my-4">
      <input className=" bg-white text-black p-[5px] text-sm block w-full h-[30px] border-none rounded-lg focus:outline-none" 
        onChange={onChange} 
        value={value} 
        type={type} 
        name={name}
        required={required}
      />
      <label className={`${value.length? ' top-[-25px] text-white transition-all left-[5px] text-sm':'text-gray-600 left-[5px] top-[5px] text-sm '} absolute select-none pointer-events-none`} >
        {label}
      </label>
    </div>
  )
}

export default FormInput

