import React, { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@pages/Home/Home'
import styles from './App.module.scss'
import SignUp from '@pages/SignUp/SignUp'
import SignIn from '@pages/SignIn/SignIn'
import Public from '@components/Routes/Public/Public'
import Private from '@components/Routes/Private/Private'
import Header from '@components/Header/Header'
import EditUser from '@pages/EditUser/EditUser'
import NotFound from '@pages/NotFound/NotFound'

const App: FC = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.content}>
        <Routes>
          <Route 
            path='/' 
            element={
              <Public>
                <Home />
              </Public>
            } 
          />
          <Route
            path='/signup'
            element={
              <Public>
                <SignUp />
              </Public>
            }
          />
          <Route
            path='/signin'
            element={
              <Public>
                <SignIn />
              </Public>
            }
          />
          <Route
            path='/profile'
            element={
              <Private>
                <EditUser />
              </Private>
            }
          />
          <Route path="/not-found-404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found-404" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
