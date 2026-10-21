import React from "react";
import Landing from "./routes/Landing";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Dashboard from "./routes/Dashboard";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  const {loading, currentUser} = useAuth();

  if(loading){
    return(
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-pulse text-indio-600 text-xl">Loading QuickNotes</div>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-slate">
        <Navbar/>
        <Routes>
          <Route path="/" element={ currentUser ? <Navigate to='/dashboard' replace/> : <Landing/>
            }>
          </Route>
          <Route path="/login" element={ currentUser ? <Navigate to='/dashboard' replace/> : 
            <Login/>}></Route>
          <Route path="/signup" element={ currentUser ? <Navigate to='/dashboard' replace/> : 
            <Signup/>}></Route>
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <div className="container mx-auto px-4 py-8">
                <Dashboard/>
              </div>
            </ProtectedRoute>
            }></Route>
        </Routes>
      </div>
      
    </>
  );
}

export default App;
