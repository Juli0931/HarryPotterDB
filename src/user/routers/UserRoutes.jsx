import { Routes, Route } from 'react-router-dom'
import { DashboardPage, DetailPage } from '../pages'
export function UserRoutes () {
  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/detail' element={<DetailPage />} />
      </Routes>
    </>
  )
}
