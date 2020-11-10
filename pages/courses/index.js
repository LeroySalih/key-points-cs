// import fs from 'fs';
import Link from 'next/link';

// server side data...
import CourseData from '../../components/course-data';

const LessonsIndex = ({paths}) => {

  return (
    <div>Key Points:
      <div>Available Courses:</div>
      <div>
  {paths.map((path, index) => <div key={index}>
      <Link href={`courses/${path}`}>
          <a>{path}</a>
        </Link>
      </div>)}
      </div>
    </div>
    )
  }
  
  export async function getStaticProps () {

    const courses = Object.keys(CourseData);

    return {
      props: {
        paths: courses.map((course) => course)
      }
    }
  }
  
  export default LessonsIndex;