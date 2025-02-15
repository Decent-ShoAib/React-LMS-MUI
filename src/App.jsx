import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentAddEdit from './pages/StudentAddEdit'
import MainLayout from './components/MainLayout '
import StudentList from './pages/StudentList'
import TeacherAddEdit from './pages/TeacherAddEdit'
import TeacherList from './pages/TeacherList'

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<MainLayout />}>
          <Route path='students-add' element={<StudentAddEdit />} />
          <Route path='studentsList' element={<StudentList />} />
          <Route path='teachers-add' element={<TeacherAddEdit/>} />
          <Route path='teachersList' element={<TeacherList/>} />
          <Route path='schoolRegistration' element={<StudentAddEdit/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App