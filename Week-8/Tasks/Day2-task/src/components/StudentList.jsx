const StudentList = () => {
    const students=['Hiba', 'Neha', 'Sara', 'Arjun', 'Rahul', 'Mehak', 'Maaz']
  return (
      <div className="studentList-container">
          <h1>Student List</h1>
          <ul>
              {students.map((student, index) => {
                return (
                    <li key={index}>{student}</li>
                )
              })}
          </ul>
      </div>
  )
}

export default StudentList