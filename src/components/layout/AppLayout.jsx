// import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import { Loading } from './Loading'

 const AppLayout = () => {

  //useNavigation - this hooks used to load the api data during route page rendering on screen
  const navigation = useNavigation();
  console.log(navigation);

  if(navigation.state === "loading") 
    return <Loading />

  return (
    <>
    <Header />
    <Outlet />  {/* 👈 this is where Home/About will appear */}
    <Footer />
    </>
  )
}

export default AppLayout;
