// importing essential libraries to use 
import React, { Component } from 'react';
import { Button } from 'evergreen-ui';
import styled from 'styled-components';

// import assets,classes for other component 
import images from '../assets/bookstack.jpg';
import Context from './Context';
import contact from './contact';
import Books from './books';
import about from './about';

// styling using styled-component 
const Nav = styled.nav`
float:right;
display:flex;
flex-direction:row;
`;

let MyButton = styled.button`
   flex-wrap: nowrap;
   margin:16px;
   width:100px;
   height:45px;
   border-radius:45px;
   border:none;
   background-color:#F58732;
   color:white;
   font-size:11pt;
   `;

const Mydiv = styled.div`
   float:right;
   display:flex;
   flex-direction:column;
   padding-left:40%;
   `;

const Title = styled.h1`
      font-size: 6em;
      float:right;
      padding-top:30%;
      color: #993E28;
      `;

const Input = styled.input`
    padding: 0.8em;
    margin: 0.5em;
    margin-top:50%;
   //  border-color:sold 2% #F6D68B;
    background: #F6D68B;
    border:none;
    border-radius: 10px;
  `;

// //the class app who runs everything
//  class App extends React.Component {
//    constructor() { super() }

//    render() {
//       return (
//          //  basics for structuring the page  
//          <Context.Provider >
//           <img className="image" src={images} />
//             <Nav className="subnav">
//                <a href={about}>About</a>
//                <a href={contact}>ContactUs</a>
//             </Nav>

//             < Mydiv>
//                <Title>KottobSale</Title>
//                <div className="buttons">
//                   <MyButton>LogIn</MyButton>
//                   <MyButton>Books</MyButton>
//                   <MyButton>Downloads</MyButton>
//                </div>

//               {/* //bottom component  */}
//                <Input styled="padding-top:30%;
//                  " placeholder="search your books here" />
//               <Button>Take a Tour </Button>
//             </Mydiv>
//       {/* call other classes */}
//          <Books/>
//          </Context.Provider>
//       )
//    }
// }

class App1 extends React.Component {
   constructor() { super() }
   render() {
      return (
         <h1>this is heading 1 from anthor app </h1>
      )
   }
}

ReactDOM.render(<App1 />, document.getElementById('root'));