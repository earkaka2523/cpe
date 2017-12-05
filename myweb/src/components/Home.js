import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';

class Home extends Component {

  render(){
    return(
      <div>
        <div className="container">
          <div className="jumbotron">
            <Carousel>
              <Carousel.Item>
                <img width={400} height={200} alt="900x500" src="1.jpg" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={400} height={200} alt="900x500" src="2.jpg" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
