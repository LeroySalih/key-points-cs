import Image from 'next/image'

const LessonHeader = ({course}) => {
  return (<>

  <div className="lesson-header">
    <div className="lesson-header-img">
    <Image  alt="Network admin"
          alt="Picture of the author"
          style={{gridArea: "header"}}
          width={300}
          height={200}
          
          src={`/images/${course.id}/lesson-header.jpg`}/>
    
    </div>
          
    <div className="key-points">Key Points:</div>
    <h1 className="lesson-header-title">{course.title}</h1>
    
  </div>
  
<style jsx>{`

  .lesson-header {
    display: grid;
    background-color: rgb(1,142,230);
    grid-template-columns: 300px auto;
    grid-template-rows: 50px auto;
    grid-template-areas: "header keypoints" "header title";
  }

  .lesson-header-img {
    grid-area : header;
    padding: 10px;
  }

  .key-points {
    color: #000000;
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 5px solid #4747ff;
    margin-right: 10px;
    font-family: 'Oswald', sans-serif;
   }

  .lesson-header-title {
    grid-area : title;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0px;
    font-size: 4rem;
    font-family: 'Oswald', sans-serif;
    line-height: 4.1rem;
  }
`}</style>
  
  </>)
}


export default LessonHeader