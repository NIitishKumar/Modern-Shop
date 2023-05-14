import React, { useEffect, useState } from 'react'
import FormButton from '../../components/form-button/button.component'
import FormInput from '../../components/form-input/form-input.component'
import { createUserDocFromAuth, signInWithGooglePopoUp, singInWithGoogleRedirectFunc } from '../../utils/firebase/firebase'
import { signInUser } from '../../utils/firebase/firebase.utils'
import { useContext } from 'react'
import { userContext } from '../../contexts/user.context'
import { async } from 'q'
import StyledButton from '../../components/button/button.component'

function SignIm() {

  const { setcurrentUser } = useContext(userContext)

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopoUp()
    const  userDocRef = await createUserDocFromAuth(user)
    console.log(userDocRef)
  }

  const logGoogleRedirectUser = async () => {
    const {user} = await signInWithGooglePopoUp()
    const  userDocRef = await createUserDocFromAuth(user)
    console.log(userDocRef)
  }

  useEffect(() => {
      console.log("jnhkjjkj")
  }, [])

  const [formData, setformData] = useState({
    email:"",
    password:""
  })
  
  const handleChange = (e) => {
    setformData({...formData, [e.target.name]:e.target.value})
  }

  const { email, password } = formData

  const handleLogin = async () => {
    try {
      const {user} = await signInUser(email, password)
      setcurrentUser({user})

    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect email or password !")
          break;
      
        default:
          console.log(error)
          break;
      }
    }
  }

  return (
    <>
    <h1>SignIm</h1>
      <FormInput onChange={handleChange} label={"Email"} name="email" value={email} />
      <FormInput onChange={handleChange} label={"Enter Password"} name="password" value={password} />
    <div className='sign-in-button-container'>
      <StyledButton type={"inverted"} onClick={handleLogin}>Sign In</StyledButton>
      {/* <StyledButton type={"google"} onClick={singInWithGoogleRedirectFunc} >Sign In with google Redirect</StyledButton> */}
      <StyledButton type={"inverted"} onClick={logGoogleUser} >Sign In with google</StyledButton>
    </div>
    </>
  )
}

export default SignIm