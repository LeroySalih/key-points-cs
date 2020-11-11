import {useRouter} from 'next/router';
import Link from 'next/link';
import CourseData from '../../components/course-data';
import {info} from '../../components/logger';
import Lesson from '../../components/lesson';
import LessonHeader from '../../components/lesson-header';

import Head from 'next/head';

//import fs from 'fs';

const CoursePage = ({course}) => {

  // console.log("courses/[courseId]/index.js", "CoursePage", course)

  if (!course) {
    console.error("courses/[courseId]/index.js", "CoursePage", "Course not passed in params!")
  }
  // get the query parameter.
  // const {query} = useRouter();
  // const {courseId} = query;

  //console.log(query)
  // const course = CourseData[courseId];

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <>
      <Head>
        <title>Key Points: {course && course.title}</title>
        <meta name="description"  content={course.metaDescription}/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <div className="pageGrid">
        <div className="sidebarMenu">
          {course.title}

          {Object.values(course.lessons).map((lesson) => 
            <a className="sidebarLink" href={`#${lesson.title}`}>{lesson.title}</a>
          )}
          
        </div>
        <div className="mainPage">
        <LessonHeader course={course}/>
        <h2>Description</h2>
      {course.description}

      <h2>Keywords</h2>
      {course && course.keywords && Object.keys(course.keywords)
        .sort((a, b) => (a > b) ? 1 : -1)
        .slice(0, 3)
        .map((keyword) => <><li><b>{keyword}</b></li><div>{course.keywords[keyword]}</div></>)
        }
      { course && course.keywords && Object.keys(course.keywords).length > 4 && (
        <Link href={`/${course.id}/keywords`}><a>see more...</a></Link>
      ) }

      <h2>Lessons</h2>
          
      
      {Object.values(course.lessons).map((lesson, index) => (
        <Lesson lesson={lesson} key={index} />
      ))}
      

      {!course.lessons && <div>No lessons found</div>}
      {course.lessons && <div> {Object.values(course.lessons).length} Lessons found</div>}
      
      </div>
        </div>


      

      
        
        
      
      

      <style jsx>{`
      
        h2 {
          color: rgb(1,142,230);
        }
        .lessonHeader {
          width: 200px;
        }

        .pageGrid {
          display: grid;
          grid-template-columns : 200px auto;
          height: calc(100vh - 100px);
        }

        .sideBar {
          background-color : red;
        }

        .sidebarLink {
          display: block;
          font-size: 0.8rem;
          line-height: 1.4rem;
        }

        .mainPage {
          height: 100%;
          overflow-y: auto;
          scroll-behavior: smooth;
        }

      `}</style>
      
      
    </>
    )
}




// if there is server data, generate it.
export async function getStaticProps ({params : {courseId}}) {

  // info("[courses]/[courseId]/index.js::getStaticProps",  `courseId ${courseId}`)
  
  // const data = {};

  // const source = fs.readFileSync(path.join(process.cwd(), 'posts', slug + '.mdx'));
  
  //const { content, data } = matter(source)
  // const mdxSource = await renderToString(content, { components  })

  let course;

  try{
    course = CourseData[courseId];
  } catch(err) {
    info("courses/[courseId]/getStaticProps", `courseId ${courseId} - Course Not Found`)
  } 
  
  return { props: { 
      course
    } 
  };
} 


// Called at Build Time.
// List all valid paths.

export async function getStaticPaths () {

  // info(`courses/[courseId]/index.js::[getStaticPaths]`, `Building list of valid paths`);
  
  //const courses = fs.readdirSync('courses');
  
  
  
  const paths = Object.keys(CourseData).map(
    (courseId) => ({params: {courseId}})
    );

  // 

  // const paths = [{params : {courseId : '8-networks'}}]

  // info("courses/[courseId]/index.js::getStaticPaths", paths);

  return {

    paths,

    // false - restrict to only these paths
    fallback: false
  }

}





export default CoursePage;