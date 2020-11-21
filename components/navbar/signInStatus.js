import useSWR from 'swr';
import { signIn, signOut, useSession } from 'next-auth/client'

const SignInStatus = ({user}) => {
  
  return (<>
      {user && user.displayName}
    </>)
}

export default SignInStatus;