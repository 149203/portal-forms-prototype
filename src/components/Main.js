import React from 'react'
import styled from 'styled-components'
import Form from './Form'

const Header = styled.div`
   height: 80px;
   background-color: black;
   opacity: 0.85;
`

const Sidebar = styled.div`
   height: 100vh;
   background-color: black;
   opacity: 0.85;
`

function Main() {
   return (
      <div className="container-fluid" style={{ padding: 0 }}>
         <div className="row" style={{ padding: 0, left: '-15px' }}>
            <div className="col-12" style={{ padding: 0 }}>
               <Header />
            </div>
            <div className="col-2">
               <Sidebar />
            </div>
            <div className="col-10" style={{ left: '-15px' }}>
               <Form />
            </div>
         </div>
      </div>
   )
}

export default Main
