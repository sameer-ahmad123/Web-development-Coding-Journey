import React from 'react'

const page = async ({params}) => {
    const resolvedParams  =  await params;
const slugPath = resolvedParams.slug
  return (
    <div>
      {slugPath.join("🪒")}
    </div>
  )
}

export default page
