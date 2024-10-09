

const CreatePassword = () => {
  return (
    <div>
        <h1>Create New Password</h1>
        <form>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password" 
                placeholder="Enter password"
                autoComplete='off'/>
            </div>
            <div>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input 
                type="password" 
                id="confirm-password" 
                placeholder="Confirm password"
                autoComplete='off'/>
            </div>
            <button type="submit">Create Password</button>

        </form>
      
    </div>
  )
}

export default CreatePassword
