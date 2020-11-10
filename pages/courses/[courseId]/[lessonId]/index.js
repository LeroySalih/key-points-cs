
import CourseData from '../../../../components/course-data';
import {info} from '../../../../components/logger'
const LessonPage = ({course, lesson}) => {
  if (!course || !lesson.title) {
    return <div>Loading</div>
  }
return (<div>Lesson Page for {course.title} :: {lesson.title}</div>)
}

export default LessonPage;

export const getStaticProps = (context) => {
  // info("courses/[courseId]/[lessonId]/index.js", context);
  const courseId = (context.params && context.params['courseId']) || null;
  const lessonId = (context.params && context.params['lessonId']) || null;

  const course = CourseData && CourseData[courseId] && CourseData[courseId];
  const lesson = CourseData && CourseData[courseId] && CourseData[courseId].lessons && CourseData[courseId].lessons[lessonId];  
  if (!lesson){
    info("courses/[courseId]/[lessonId]/index.js", `courseId is ${courseId}, lesson is undefined:: ${lessonId} and lessonId is ${JSON.stringify(context.params)}`);
  }
  return {props: {
    course,
    lesson
  }}
}

export const getStaticPaths = () => {
  const paths = [];

  Object.keys(CourseData || {}).forEach((courseId) => {
    const lessons = CourseData[courseId].lessons;
    return Object.keys(lessons ).forEach((lessonId) => paths.push({params: {courseId , lessonId}}) )
  })

  // info("courses/[courseId]/[lessonId]/index.js", paths)
  
  return {
    paths,
    fallback: true
  }
}