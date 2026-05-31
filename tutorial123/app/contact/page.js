import React from 'react'
import Script from 'next/script'
const page = () => {
  return (
    <div>
      <Script>
        {`
          alert("Welcome to contact page")
        `}
      </Script>
      i am contact
    </div>
  )
}

export default page
export const metadata = {
  title: "Contact Page | Data related to contact is present here",
  description: "This is contact page of facebook",
};

