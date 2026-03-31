import StudentCard from "./components/StudentCard";

// function App() {
//   return (
//     <>
//       <h1>Student Details</h1>
//       <StudentCard name='Hiba' course='MERN Stack' batch='B1' />
//       <StudentCard name='Sara' course='MERN Stack' batch='B2' />
//       <StudentCard name='Yogesh' course='Flutter' batch='B1'/>
//     </>
//   )
// }

function App() {
  const students = [
    { name: 'Hiba', course: 'MERN Stack', batch: 'B1' },
    { name: 'Sara', course: 'MERN Stack', batch: 'B2' },
    { name: 'Yogesh', course: 'Flutter', batch: 'B1' }
  ]
  return (
    <>
      {
        students.map((stu) => {
          return (
            < StudentCard name={stu.name} course={stu.course} batch={stu.batch} />
          )
        })
      }
    </>
  )
}

export default App
