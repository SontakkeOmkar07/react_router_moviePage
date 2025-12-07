import React from 'react'
import { Headers } from './Headers'
import { Outlet, useNavigation } from 'react-router-dom'
import { Loading } from './Loading';
import { Footers } from './Footers';

export const AppLayout = () => {

  const navigation = useNavigation();

  console.log(navigation);

  if(navigation.state === "loading"){
    return <Loading />
  }
  return (
   <>
   <Headers />
   <Outlet />
   <Footers />
   </>
  )
}
