import React from 'react';
export default class About {
  render() {
    return (
      <Context.Consumer>
        {
          (ctx) => {
            return (
              <Container>
                
                <h1>About Page</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto 
              at exercitationem ipsa iste molestiae nobis odit! 
              Error quo reprehenderit velit! Aperiam eius non odio optio, perspiciatis suscipit vel?</p>

              
              </Container>
              );
          }
        }
      </Context.Consumer>
    )
  }
}

