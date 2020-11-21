import useSWR from 'swr';
import { signIn, signOut, useSession } from 'next-auth/client'
import Auth from '../../components/auth';

const SignInStatus = ({user}) => {
  
  const handleSignOut = () => {
    Auth.signOut();
  }

  const handleSignIn = () => {
    Auth.signIn();
  }
  return (<>
      {user && user.displayName}
      {user && <button onClick={handleSignOut}>Sign Out</button>}
      {!user && <button onClick={handleSignIn}>Sign In</button>}
    </>)
}

export default SignInStatus;