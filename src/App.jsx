import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Social from "./pages/Socials.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path={'/'} element={<h1 className={`text-white z-10`}>Home</h1>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/resume'} element={<Resume/>}/>
                    <Route path={'/projects'} element={<Projects/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                    <Route path={'/socials'} element={<Social/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    </>
  )
}

export default App
