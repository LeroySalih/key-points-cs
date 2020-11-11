import useSWR from 'swr';
import { signIn, signOut, useSession } from 'next-auth/client'

const SignInStatus = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const {data, error} = useSWR('/api/auth/session', fetcher);

  const [ session, loading ] = useSession()

  return (<>
    {!session && "Sign In"}
    {session && session.user.name}

    {!session && <>
      Not signed in <br/>
      <button onClick={signIn}>Sign in</button>
    </>}

    {session && <>
      Signed in as {session.user.name}, {session.id} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}
    </>)
}

export default SignInStatus;