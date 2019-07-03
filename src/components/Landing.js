// eslint-disable-next-line
/*eslint jsx-quotes: ["error", "prefer-double"]*/
/*
  This file is a part of 10Traits
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import React from 'react'


// ===============================================================
// Import Components
// ===============================================================
import BNavbar from './BNavbar'

export default function Landing ({ loading, navbar, questionnaire, offLine, onLine }) {
  const events = {
     offLine,
     onLine,
   }

   const LoadingRow = (
    <div className="loading-item">
      <BNavbar />
    </div>
  )

   if (loading) {
     return (
       <div className="list-items">
        {LoadingRow}{LoadingRow}{LoadingRow}{LoadingRow}{LoadingRow}{LoadingRow}
       </div>
     )
   }

   if (questionnaire.length === 0) {
     return (
       <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no links</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
     )
   }

  return (
    <div>
      <BNavbar />
    </div>
  )
}
