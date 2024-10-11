
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import apiInstance from "../../utils/axios"
import { useNavigate } from "react-router-dom"
const CreatePassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [searchParam] = useSearchParams()
  const otp = searchParam.get('otp')
  const uidb64 = searchParam.get('uidb64')
  const navigate = useNavigate()

  const handlePasswordSubmit = async(e) => {
    e.preventDefault()
    console.log('Password', password);
    console.log('confirmPassword',  confirmPassword);
    if(password !== confirmPassword){
      alert('Passwords do not match')
    }
    else{
      const formData = new FormData()
      formData.append('password', password)
      formData.append('otp', otp)
      formData.append('uidb64', uidb64)
      try{
        await apiInstance.post(`user/password-change/`, formData).then((res) => {
          console.log(res.data);
          alert('Password changed successfully.')
          navigate('/login')

        })
      } catch(error){
        alert('An error occurred while trying to change password. Please try again')
        console.log(error)
      }
    }
  }

  return (
    <div>
        <h1>Create New Password</h1>
        <form onSubmit={handlePasswordSubmit}>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password" 
                placeholder="Enter new password"
                autoComplete='off'
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input 
                type="password" 
                id="confirm-password" 
                placeholder="Confirm new password"
                autoComplete='off'
                value = {confirmPassword}
                onChange = {(e) => setConfirmPassword(e.target.value)}/>
            </div>
            <button type="submit">Save New Password</button>

        </form>
      
    </div>
  )
}

export default CreatePassword
