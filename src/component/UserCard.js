import React from 'react';
import {Row,Col,Card, Media,CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';

const UserCard =(props)=>{
return(

    <div>
        <Row>
            <Col ></Col>
            <Col>
            <Card>
                <CardImg top width="100%" src={props.img} alt="Card image cap" />
                <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                <CardBody>
                <CardTitle tag="h5">
                <h2 style={{color:props.color}}>{props.name}</h2>
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
            </Col>
            <Col></Col>            
      </Row>
    </div>   
    
    
)};


export default UserCard;

// import { Button, Card, CardHeader,Row,Col,CardBody } from 'reactstrap'


// function UserCard() {
//     return (
//       <div className="App" style={{backgroundColor:'#a5a5a5'}}>
        
//         <Row style={{justifyContent:"center"}}>
//           <Col xs={6}>
//             <Card>
//               <CardHeader>Mi titulo</CardHeader>
//               <CardBody>
//                 <h3>Mi cuerpo</h3>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
  
//       </div>
//     );
//   }
  
//   export default UserCard;
  