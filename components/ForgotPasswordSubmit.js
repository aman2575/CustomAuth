import Input from "./Input"


export default function ForgotPasswordSubmit({
    onchange, forgotPasswordSubmit,
}) {
    
    return(
    
        <div>
            <p className="text-3xl font-black"> Confirm new password</p>
            <div className="mt-10">
                <label className="text-sm">Confirmation Code</label>
                <Input onchange={onchange} name="authCode" type="authCode" />
            </div>
           
            <div className="mt-10">
                <label className="text-sm">New Password</label>
                <Input onchange={onchange} name="password" type="password" />
            </div>
           
            <button 
            className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
            onClick={forgotPasswordSubmit}
            >Submit New Password
            </button>
          
                 
        </div>
        
         
    )
    
}