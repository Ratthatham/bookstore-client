import { useState } from "react";
import FormInput from "../components/FormInput/FormInput";
import Button from "../components/Button/Button";


type Prop = {
    target: {
        name: string,
        value: string
    }
}

const defaultFormFields = {
  email: '',
  password: '',
  name: '',
  confirmpassword: ''
}

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const handleChange = (event: Prop ) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  }

  return (
    <div className=" flex justify-center  h-[80vh]">
      <div className='flex flex-col items-center w-full sm:w-[50%] bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-lg p-5'>
      <h1 className=" my-8">Sign up with your email and password</h1>
        <form  className=" w-[50%] flex flex-col justify-center">
            <FormInput
                label= 'Display name'
                type = 'name'
                required
                onChange = {handleChange}
                name = 'name'
                value = {formFields.name}
            />
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
            {
                formFields.password.length? 
                <div className=" text-[11px] bg-white/30 backdrop-blur-sm p-2 rounded-lg ">
                        <p> Your password must :</p>
                        <li>Contain at least <span className=" font-bold">8 characters</span></li>
                        <li>Contain at least 1 uppercase, 1 lowercase, 1 number and 1 specail character</li>
                </div> : ''
            }
            <FormInput
                label= 'Confirm Password'
                type = 'password'
                required
                onChange = {handleChange}
                name = 'confirmpassword'
                value = {formFields.confirmpassword}
            />
          
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  )
}

export default Register;