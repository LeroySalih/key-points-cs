import {useRouter} from 'next/router';
import Link from 'next/link';
import CourseData from '../../../components/course-data';
import {info} from '../../../components/logger';

//import fs from 'fs';

const CoursePage = ({course}) => {

  console.log("courses/[courseId]/index.js", "CoursePage", course)

  if (!course) {
    console.log("courses/[courseId]/index.js", "CoursePage", "Course not passed in params!")
  }
  // get the query parameter.
  // const {query} = useRouter();
  // const {courseId} = query;

  //console.log(query)
  // const course = CourseData[courseId];

  return (<div>
      <div>Courses Index Page for Course </div>
      <div>
        List all lessons in this course...

        <ul>

        </ul>
      </div>
      
    </div>)
}


// if there is server data, generate it.
export async function getStaticProps ({params : {courseId}}) {

  info("[courses]/[courseId]/index.js::getStaticProps",  "courseId" + courseId)
  // console.log("[courses]/[courseId]/", "getStaticProps", "courseId", courseId)
  // console.log(`[getStaticProps]::Running for ${id}`);
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
      course,
      // lessons,
      // source: 'Test Data', //mdxSource, 
      // frontMatter: '', // data, 
      // slug 
    } 
  };
} 


// Called at Build Time.
// List all valid paths.

export async function getStaticPaths () {

  info(`courses/[courseId]/index.js::[getStaticPaths]', 'Building list of valid paths`);
  
  //const courses = fs.readdirSync('courses');
  
  
  
  // const paths = Object.keys(CourseData).map(
  //   (courseId) => ({params: {courseId}})
  //   );

  // 

  const paths = [{params : {courseId : '8-networks'}}]

  info("courses/[courseId]/index.js::getStaticPaths", paths);

  return {

    paths,

    // false - restrict to only these paths
    fallback: true
  }

}





export default CoursePage;