import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DHProps {
    dh: () => void
}

function Doubler({dh}: DHProps): React.JSX.Element {
    return (
        <Button onClick={dh}>
            Double
        </Button>
    );
}

function Halver({dh}: DHProps): React.JSX.Element {
    return (
        <Button onClick={dh}>
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    const double = () => {setDhValue(dhValue * 2)}
    const halve = () => {setDhValue(dhValue / 2)}

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dh={double}></Doubler>
            <Halver dh={halve}></Halver>
        </div>
    );
}
