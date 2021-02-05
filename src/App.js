import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Counter from './components/counter';
import { Button } from '@material-ui/core';

function App() {
  const childRef = React.useRef();
  const [counterChild, setCounterChild] = React.useState(0);
  //
  const callbackFromChild = (value) => {
    setCounterChild(counterChild + 1);
  };
  //
  const increateChildCounter = () => {
    childRef.current.increateCounter();
  };
  //
  return (
    <div className="App">
      <Counter ref={childRef} parentFunction={callbackFromChild} />
      <hr/>
      <Card style={{margin: 30, backgroundColor: '#d3e0dc'}}>
        <CardContent>
            <div style={{textAlign: 'center', margin: 20}}>
                <h1>Parant</h1>
                <h3>Value from child</h3>
                <span style={{fontSize: 24, fontWeight: true}}>
                    {counterChild}
                </span>
                <div style={{margin: 'auto', marginTop: 20}}>
                    <Button variant="contained" color="secondary" onClick={increateChildCounter}>
                        Count to Child
                    </Button>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
