import Layout from '../components/layout';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/client'
// import fs from 'fs';

const IndexPage = ({dataProp, courses}) => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const {data, error} = useSWR('/api/auth/session', fetcher);

  const [ session, loading ] = useSession()
  

  if (error) return <div>failed to load</div>

  return (<>
    
    {session && <>
    <div>{session.user.uid}</div>
    <div>{session.user.provider}</div>
    </>}

    <div className="pageLayout">
      <div className="pageText">
        <h1>Computer Science</h1>
        <h2>Key Points</h2>
        <div>

          A collection of resources to help you revise the subject and maximise your grades. 
        </div>
      </div>
      <div className="pageHero">
        <Image alt={"Pupils Studying"}
          width={800}
          height={640}
          src="/images/home-page-banner.png"/>
      </div>
        

    </div>

    <style jsx>{`

    h1 {
      color: rgb(0, 206, 209)
    }
    
    .pageLayout {
      display: grid;
      
      grid-template-columns: auto 640px;
    }

    .pageText {
      display: flex;
      flex-direction: column;
      justify-items: center;
    }
    
    `}</style>
    
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
