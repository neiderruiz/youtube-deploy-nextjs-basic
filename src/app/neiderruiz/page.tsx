import React from 'react'

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-3">
          <h1 className="text-3xl font-bold mb-8">¡Haz desplegado tu primera app en Next.js!</h1>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Suscríbete a mi canal
          </button>
          <h2 className='text-2xl'>Ya somos {process.env.NEXT_PUBLIC_NUMBER_OF_FOLLOWERS}</h2>
        </div>
      ); 
}

export default Page