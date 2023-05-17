import React, { useContext } from 'react'
import FeautureDash from '../../../utils/FeautureDash'
import AuthContext from '../../../../store/AuthContext'

function Bewertungen() {

  const {state} = useContext(AuthContext)
  const isAdmin = state.user.isAdmin

 
  return (
    <main>


   
    {!isAdmin && (
    <section className='flex flex-col justify-center text-center align-middle text-gray-700 gap-1 mx-4 md:mx-24 mb-24'>
      <div className='text-5xl text-gray-600 mt-16 font-light'>Meine Bewertungen</div>
      <div className='text-blue-600 hover:text-red-500 text-md my-2 border border-red-200 inline-block rounded-md cursor-pointer mx-auto px-3 py-2'>Neu Bewertung erstellen</div>
      <hr />
      <div className='text-start my-12 space-y-2'>
      <div>SmartBooking steht für authentische Bewertungen!</div>
      <div>Weitere Informationen zu unserem mehrstufigen Verifizierungsprozess gibt es <b>hier!</b> </div>
      </div>
      <div className=''>
        <div className='text-xl'>Schreiben Sie jetzt Ihre erste Bewertung und erzählen Sie, wie es vor Ort wirklich ist!</div>
        <button className='px-3 py-2 bg-yellow-300 hover:bg-yellow-400 rounded-sm text-blue-800 mt-4'>Bewertung schreiben </button>
      </div>
      <FeautureDash/>
    </section>
      )}

     {isAdmin && (
      <section className='flex flex-col justify-center text-center align-middle text-gray-700 gap-1 mx-4 md:mx-24'>
        <div className='text-5xl text-gray-600 mt-16 font-light'>Alle Bewertungen</div>
        <div className='text-lg text-gray-500 mt-8 '>Du hast jetzt keine Bewertung!</div>
        <FeautureDash/>
      </section>
    )}
     </main>
  )
}

export default Bewertungen