import React from "react";
import Jumbotron from "./components/jumbotron";
import jumboData from "./fixtures/jumbo.json";

const App = () => {
  return (
    <>
      <Jumbotron.Container>
        {jumboData.map((item) => {
          return (
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                <Jumbotron.Image src={item.image} alt={item.alt} />
              </Jumbotron.Pane>
            </Jumbotron>
          );
        })}
      </Jumbotron.Container>
    </>
  );
};

export default App;
