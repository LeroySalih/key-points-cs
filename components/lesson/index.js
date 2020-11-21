import Quiz from '../../components/quiz';

const Lesson = ({lesson}) => {
  if (!lesson) {
    return <div>No Lesson Found</div>
  }

  return (<>
    <h3><a name={lesson.title}>{lesson.title}</a></h3>
    <div>{lesson.desc}</div>
    {lesson.specDesc && (
      <>
        <h4>Specification Links</h4>
        <div>This lesson has the following specification links.</div>
        <SpecificationLink content={lesson.specDesc} />
      </>
    )}
    <div>
    {lesson.tasks && (
      <>
      <h4>Tasks</h4>
      { 
        Object.values(lesson.tasks).map((task, index) => {
          return (
            <>
            <h4>{task.title}</h4>
          <div>{task.desc}</div>
          {task.type == 'quiz' && <Quiz key={index} quiz={task.quiz}></Quiz>}

          {task.type == 'video' && <div className="displayVideo">
              <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${task.videoKey}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>

                </iframe>
                </div>
          } 
          </>
          );


        })
      }
      </>
    )
      
    // end tasks
    } 
      
    </div>
    <style jsx>{`
        h3 {
          font-family : 'Oswald';
          font-size : 2rem;
          border-bottom: red 2px solid;
        }

        .displayVideo {
          display: flex;
          
          padding: 10px;
          align-content: center;
          align-items: center;
          justify-items: center;
          justify-content: center;
        }
      `}</style>
  </>);
}


export default Lesson;


const SpecificationLink = ({content}) => {

  return (
    <>
      <div className="specificationLink" dangerouslySetInnerHTML={{__html: content}}>

      </div>
      <style jsx>{`
        .specificationLink {
          background-color: #ebebeb;
          border: solid 2px #cacaca;
          border-radius: 10px; 
          padding: 20px;
          margin: 10px;
          line-height: 1.5rem;
        }
      `}</style>
    </>
  )
}