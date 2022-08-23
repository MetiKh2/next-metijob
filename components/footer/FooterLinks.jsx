import React from 'react'

const FooterLinks = ({title,links}) => {
  return (
    <div className='flex flex-col m-5'>
        <div className='mb-3'>
            <h1 className='text-white opacity-60 border-b pb-2'>{title}</h1>
        </div>
        <div className='flex flex-col'>
            {links.map((link,i)=>(
                <div key={i} className='text-white my-2'>
                    {link.key}
                </div>
            ))}
        </div>
    </div>
  )
}

export default FooterLinks