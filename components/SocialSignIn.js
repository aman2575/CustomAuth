import { Auth } from 'aws-amplify'
import {FaGoogle, FaFacebook} from 'react-icons/fa'


export default function SocialSignIn() {
    return(
    
        
            <div className='flex flex-col'>
                <button 
                className='mt-10 focus:outline-none'
                onClick={() => Auth.federatedSignIn({provider: "Google"})}>
                    <div 
                    className='flex border border-gray-300 p-2 rounded-full items-center justify-center'>
                        <FaGoogle size="38" className="text-red-600" />
                        <p className='ml-4'>Sign in </p>
                    </div>
                </button>
                <button 
                className='mt-4 focus:outline-none'
                onClick={() => Auth.federatedSignIn({provider: "Google"})}>
                    <div 
                    className='flex border border-gray-300 p-2 rounded-full items-center justify-center'>
                        <FaFacebook size="38" className="text-blue-600" />
                        <p className='ml-4'>Sign in </p>
                    </div>
                </button>

            </div>
           
       
    )
}