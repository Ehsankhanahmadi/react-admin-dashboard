import { Routes,Route } from "react-router-dom";
import { Area, Bar, Calendar, ColorPicker, Customers, Ecommerce, Editor, Employees, Kanban, Line, Orders, Pie } from "./pages";
import { Navbar, Sidebar } from "./components"
import { Openclose } from "./contexts/contextprovider";
import { useState } from "react";

function App() {

  const [OC, setOC] = useState<any>(false)
  
  return (
    <>
    <Openclose.Provider value={{OC,setOC}}>
      <div className="lg:flex">
        <div className="lg:w-22/100"><Sidebar/></div>
        <div className="lg:w-78/100"><Navbar/></div>
      </div>
    </Openclose.Provider>
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
