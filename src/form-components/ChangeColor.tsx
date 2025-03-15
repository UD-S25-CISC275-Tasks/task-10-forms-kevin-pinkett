import React, { useState } from "react";
import { Form } from "react-bootstrap";


const COLORS = ["red","orange","yellow","green","blue","purple","gold","lightcoral"];
const DEFAULT_COLOR = COLORS[0]

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="changeColor">
                {COLORS.map((c: string) => 
                    <Form.Check
                        inline
                        type="radio"
                        label={c}
                        value={c}
                        onChange={(e) => {setColor(e.target.value)}}
                        key={c}
                        checked={color === c}
                    >

                    </Form.Check>
                )}
                <span>You have chosen <span data-testid="colored-box" style={{
                    backgroundColor: color
                }}>{color}</span></span>
            </Form.Group>
        </div>
    );
}
