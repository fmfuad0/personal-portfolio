import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Social from "./pages/Socials.jsx";
import {ViewImageContext} from "./context/ViewImageContext.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <ViewImageContext>
                <Layout>
                    <Routes>
                        <Route path={'/about'} element={<About/>}/>
                        <Route path={'/resume'} element={<Resume/>}/>
                        <Route path={'/projects'} element={<Projects/>}/>
                        <Route path={'/contact'} element={<Contact/>}/>
                        <Route path={'/socials'} element={<Social/>}/>
                    </Routes>
                </Layout>
            </ViewImageContext>
        </BrowserRouter>
    </>
  )
}

export default App
