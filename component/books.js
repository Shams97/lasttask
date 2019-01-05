// import what we need to use 
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';
import Context from './Context';

// //cards code here 
// const Cards = (props) => {
//   return (
//     <div>
//       <Card>
//         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Card title</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

 //  <Context.Consumer value ={{
    //     state: this.state,
    //     actions: {
    //      addJob:  ()=>{
    //       let books = this.state.books
    //       books.push({})
    //       this.setState({ books:books })
    //     }
    //   }
    // }
    //  }>

//exporting book class 
export default class Books {       
     render(){
         return(
           <Context.Consumer>
        {/* <Cards/>     */}

      
          </Context.Consumer>         
         )
        }
        
} 
