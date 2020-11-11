import {useRouter} from 'next/router';
import Link from 'next/link';
import CourseData from '../../components/course-data';


const KeywordPage = () => {
  const {query} = useRouter();
  console.log(query)

  if (query === {}) {
    return (<>Loading</>)
  }
  
  const {courseId} = query;
  
  const course = CourseData[courseId];

  return (
    <>
    <Link href={`/${courseId}`}><a>Back</a></Link>
    <pre>{course && course.keywords && 
        Object.keys(course.keywords)
        .sort((a, b) => (a > b) ? 1 : -1)
        .map((a, index) => <div key={index}>
          <div><b>{a}</b></div>
          <div>{course.keywords[a]}</div>
          <div>&nbsp;</div>
        </div>)


        }</pre>
    </>
  )
}


export default KeywordPage;
