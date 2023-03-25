import { useState } from "react";
import FormInput from "../components/FormInput/FormInput";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";


const defaultFormFields = {
  email: '',
  password: '',
}

const LogIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const navigate = useNavigate();
  const goToRegister = () => navigate('/register')

  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    // console.log(event.target.value)
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  }

  return (
    <div className=" flex justify-center  h-[80vh]">
      <div className='flex flex-col items-center w-full sm:w-[50%] bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-lg p-5'>
      <h1 className=" my-8">Sign in with your email and password</h1>
        <form  className=" w-[50%] flex flex-col justify-center">
            <FormInput
                label= 'Email address'
                type = 'email'
                required
                onChange = {handleChange}
                name = 'email'
                value = {formFields.email}
            />
          <FormInput
              label= 'Password'
              type = 'password'
              required
              onChange = {handleChange}
              name = 'password'
              value = {formFields.password}
          />
          
          <Button type="submit">Sign In</Button> 
        <div className="flex my-3">
          <span>Don't have an account?</span>
          <span className=" text-red-500 mx-2 cursor-pointer" onClick={goToRegister}>Register</span>
        </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn;