import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Layout from "./components/Layout.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Layout>
                <Routes>

                </Routes>
            </Layout>
        </BrowserRouter>
    </>
  )
}

export default App
