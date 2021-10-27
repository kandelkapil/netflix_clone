import React from "react";
import Jumbotron from "./components/jumbotron";
import jumboData from "./fixtures/jumbo.json";

const App = () => {
  return (
    <>
      <Jumbotron.Container>
        {jumboData.map((item) => {
          <Jumbotron key={item.id} direction={item.direction}>
            <p>hello</p>
          </Jumbotron>;
        })}
      </Jumbotron.Container>
    </>
  );
};

export default App;
