import "./App.css";
import { Row, Button } from "react-bootstrap";
import { BigText } from "./BigText";
import { useState } from "react";

const jokes = ["Joke 1", "Joke 2", "Joke 3"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getANewJoke() {
  return jokes[getRandomInt(0, jokes.length)];
}

function App() {
  let [dadjoke, setDadjoke] = useState(getANewJoke());
  return (
    <div className="App">
      <section>
        <Row>
          <h3 className="firstH">Don't laugh challenge</h3>
        </Row>
        <Row>
          <BigText text={dadjoke} />
        </Row>
        <Row>
          <Button
            className="NewJbutton"
            onClick={function () {
              var mamad = getANewJoke();
              setDadjoke(mamad);
            }}
          >
            Get Another Joke
          </Button>
        </Row>
      </section>
    </div>
  );
}

export default App;
