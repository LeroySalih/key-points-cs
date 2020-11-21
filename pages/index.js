import Layout from '../components/layout';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/client'
import courseData from '../components/course-data';
// import fs from 'fs';
import {useContext} from 'react';
import {AuthContext} from '../components/auth';

const IndexPage = ({dataProp, courses}) => {

  
  // console.log("User", user)
  return (<>
    
    

    <div className="pageLayout">
      <div className="pageText">
        <h1>Computer Science</h1>
        <h2>Who am I?</h2>
        <div>
          My name is Leroy Salih, I teach Computer Science iGCSE in an international setting.  The aim of this site is to help pupils study and revise the topics within Computer Science.

        </div>
        <h2>Why Key Points?</h2>
        <div>

          The idea behind key points is a that it is a collection of specific and targeted resources, designed to help you revise.  Material is intended to quickly cover the key points so that you can cover what we need to need to do well. 

          <ul>
            <li>Materials are linked to the course specification, so you can target where you spend your time.</li>
            <li>Short videos to explain subjects with worksheets to help you test your understanding.</li>
            <li>Revision sheets to test your understanding at the end of each module.</li>
          </ul>

        </div>
      </div>
      <div className="pageHero">
        <Image alt={"Pupils Studying"}
          width={800}
          height={640}
          src="/images/home-page-banner.png"/>
      </div>

      <div className="coursesPanel">
        {
           Object.values(courseData)
            .sort((a, b) => (a.order > b.order) ? 1 : -1)
            .map((course, index) => <CoursePanel course={course} key={index}/>) 
        }
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

    .coursesPanel {
      display: flex;
      flex-direction: row;
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


const CoursePanel = ({course}) => (
  <div>
    <Link href={`/${course.id}`}><a>{course.title}</a></Link>
    <div>{ (course.description && course.description.length > 100) ?  course.description.substring(0, 100) + '...' : course.description}</div>
    <div>
    <Link href={`/${course.id}`}><a>Read more</a></Link>
    </div>
  </div>
)

export default IndexPage;
