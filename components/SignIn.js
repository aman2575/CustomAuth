import SocialSignIn from "./SocialSignIn"
import Input from "./Input"


export default function SignIn({
    onChange, setUiState, signIn
}) {
    
    return(
    
        <div>
            <p className="text-3xl font-black"> Sign in to your account</p>
            <div className="mt-10">
                <label className="text-sm">Email</label>
                <Input onChange={onChange} name="email" />
            </div>
            <div className="mt-4">
            <label>
                Password
            <span
                onClick={() => setUiState('forgotPassword')}
                className="text-sm ml-8 sm:ml-36 text-pink-600">
            Reset password</span>
            </label>
            <Input onChange={onChange} name="password" type="password"/>
            </div>
            <button className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
                onClick={signIn}
                >SignIn
            </button>
            <SocialSignIn />  
            <p className="mt-12 text-sm font-light">
                Don't have an account?
                <span
                onClick={() => setUiState('signUp')}
                role="button"
                className="cursor-pointer ml-2 text-pink-600">SignUp</span>
            </p>
                 
        </div>
        
         
    )
    
}