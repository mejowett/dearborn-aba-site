
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

class Home extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="public/baby.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="public/bcba.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="public/child-phone.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};




// function RenderCard({item}) {
//     return (
//         <Card>
//             <CardBody>
//                 <CardTitle>{item.name}</CardTitle>
//                 <CardText>{item.description}</CardText>
//             </CardBody> 
//         </Card>
//     )
// }

// function Home(props) {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md m-1">
//                  <RenderCard item={props.service} />
//                 </div>
//                 <div className="col-md m-1">
                   
//                 </div>
//                 <div className="col-md m-1">
                    
//                 </div>
//             </div>
//         </div>
//     );
// }
export default Home;