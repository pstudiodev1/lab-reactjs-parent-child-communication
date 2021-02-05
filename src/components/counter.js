import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';

const Counter = React.forwardRef((props, ref) => {
    const [counter, setCounter] = React.useState(0);
    const increateParentCounter = () => { props.parentFunction(); };
    //
    React.useImperativeHandle(ref, () => ({
        increateCounter: () => {
            setCounter(counter + 1);
        }
    }));
    //
    return (
        <Card style={{margin: 30, backgroundColor: '#d3e0dc'}}>
            <CardContent>
                <div style={{textAlign: 'center', margin: 20}}>
                    <h1>Child</h1>
                    <h3>Value from parent</h3>
                    <span style={{fontSize: 24, fontWeight: true}}>
                        {counter}
                    </span>
                    <div style={{margin: 'auto', marginTop: 20}}>
                        <Button variant="contained" color="primary" onClick={increateParentCounter}>
                            Count to Parent
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
});

export default Counter;
