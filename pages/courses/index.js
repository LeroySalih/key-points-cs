// import fs from 'fs';
import Link from 'next/link';

// server side data...
import CourseData from '../../components/course-data';

const LessonsIndex = ({courses}) => {

  return (
    <div>Key Points:
      <div>Available Courses:</div>
      <div>
  {courses.map((path, index) => <div key={index}>
      <Link href={`courses/${path}`}>
          <a>Course: {path}</a>
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
        courses: courses.map((course) => course)
      }
    }
  }
  
  export default LessonsIndex;