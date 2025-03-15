import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    const answer: string = "42";

    function flipVisible(): void {
        setVisible(!visible)
    }

    return <div>
        <span>
            <Button onClick={flipVisible}>Reveal Answer</Button>
        </span>
        {visible && answer}
    </div>;
}
