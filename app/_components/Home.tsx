import React from 'react'
import Navbar from './navbar'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function Home() {
    const {isAuthenticated, getUser} = getKindeServerSession();
    const user = await getUser();
    const verfiy = await isAuthenticated();
    
  return (
   <Navbar isAuthenticated={verfiy} user={user} />
  )
}
