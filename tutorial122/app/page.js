
import React from 'react'
import BoostButtons from '@/component/BoostButtons'
const page = async () => {
const response =  await fetch('https://api.github.com/users/sigma-dev');
  const data = await  response.json();

  return (
    <div>
      <h1>Github Followers: {data.followers}</h1>
<BoostButtons/>

    </div>
  )
}
export default page
