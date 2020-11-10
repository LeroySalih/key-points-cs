import {useSession} from 'next-auth/client';

const SignInStatus = () => {
  const [session, loading] = useSession();

  return (<>
    {!session && "Sign In"}
    {session && session.user.name}
    </>)
}

export default SignInStatus;