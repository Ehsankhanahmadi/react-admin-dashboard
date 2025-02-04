import { Routes,Route } from "react-router-dom";
import { Area, Bar, Calendar, ColorPicker, Customers, Ecommerce, Editor, Employees, Kanban, Line, Orders, Pie } from "./pages";
import { Sidebar } from "./components"

function App() {
  return (
    <>
    <Sidebar/>
      <Routes>
        <Route index element={<Ecommerce/>}/>
        <Route path="/Ecommerce" element={<Ecommerce/>}/>
        <Route path="/Orders" element={<Orders/>}/>
        <Route path="/Employees" element={<Employees/>}/>
        <Route path="/Customers" element={<Customers/>}/>
        <Route path="/Calendar" element={<Calendar/>}/>
        <Route path="/Kanban" element={<Kanban/>}/>
        <Route path="/Editor" element={<Editor/>}/>
        <Route path="/ColorPicker" element={<ColorPicker/>}/>
        <Route path="/Line" element={<Line/>}/>
        <Route path="/Area" element={<Area/>}/>
        <Route path="/Bar" element={<Bar/>}/>
        <Route path="/Pie" element={<Pie/>}/>
      </Routes>
    </>
  )
}

export default App
