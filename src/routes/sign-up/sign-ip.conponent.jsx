import { async } from '@firebase/util'
import React, { useState } from 'react'
import { useEffect } from 'react'
import FormInput from "../../form-input/form-input.component"
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'

function SignUpForm() {

    const formFields = {
        name:"",
        email:"",
        password :"",
        confirmPassword:""
    }
    
        const [formValues, setformValues] = useState(formFields)
        const { confirmPassword, email, name, password } = formValues

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formValues)
        if (password !== confirmPassword) {
            alert("Password shoud be same !")
            return;
        }
        try {
            const res = await createAuthUserWithEmailAndPassword(formValues)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setformValues({...formValues, [name]:value})
    }

  return (
    <div>
        <h1>Sign Up with your Email and Password</h1>
        <form onSubmit={handleSubmit}>
            {/* <label>Display Name</label> */}
            <FormInput label={"Display Name"} type={"text"} required name='name' value={name} onChange={handleChange} />

            {/* <label>Email</label> */}
            <FormInput label="Email" type={"email"} required name="email" value={email} onChange={handleChange} />

            {/* <label>Password</label> */}
            <FormInput label="Password" type={"password"} required name='password' value={password} onChange={handleChange} />

            {/* <label>Confirm Password</label> */}
            <FormInput label="Confirm Password" type={"password"} required name='confirmPassword' value={confirmPassword} onChange={handleChange} />

            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm