import Layout from '../components/layout';
import useSWR from 'swr';
import Link from 'next/link';

import { signIn, signOut, useSession } from 'next-auth/client'
// import fs from 'fs';

const IndexPage = ({dataProp, courses}) => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const {data, error} = useSWR('/api/auth/session', fetcher);

  const [ session, loading ] = useSession()
  

  if (error) return <div>failed to load</div>

  return (<>
    <div>hello </div>
     {courses.map((path, index) => <Link key={index} href={`/${path}`}><a>{path}</a></Link>)}
    {!session && <>
      Not signed in <br/>
      <button onClick={signIn}>Sign in</button>
    </>}

    {session && <>
      Signed in as {session.user.name}, {session.id} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}

    {session && <>
    <div>{session.user.uid}</div>
    <div>{session.user.provider}</div>
    </>}
    </>
    )

    
}


// Use this to generate the page.
export async function getStaticProps () {

  //const paths = []

  const courses = ['8-networks']// fs.readdirSync("posts");

  
  return {
    props : {
      dataProp: 'This is my data',
      courses
    }
  }
}

export default IndexPage;
