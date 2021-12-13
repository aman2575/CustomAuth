import { withAuthenticator} from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'
import '../configureAmplify'

function Profile() {
    const [user, setUser] = useState(null)
    useEffect(() => { 
        checkUser()
        
    },[])
    async function checkUser(){
        try{
        const user = await Auth.currentAuthenticatedUser()
        setUser(user)
        
        console.log({user})
    
        } catch(err) {
            setUser(null)
            
        }
    }
    if (!user) return null
    return(
        <div>
            <p>Welcome, {user.attributes.email}</p>
        </div>
    )

}

export default withAuthenticator(Profile)
