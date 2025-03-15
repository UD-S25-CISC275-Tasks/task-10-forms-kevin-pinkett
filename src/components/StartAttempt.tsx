import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function start(): void {
        setInProgress(!inProgress)
        setAttempts(attempts - 1)
    }

    function stop(): void {
        setInProgress(!inProgress)
    }

    function addAttempt(): void {
        setAttempts(attempts + 1)
    }

    return (
        <div>
            <span>
                <div>
                    <Button onClick={start} disabled={attempts < 1 || inProgress}>Start Quiz</Button>
                </div>
                <div>
                    <Button onClick={stop} disabled={!inProgress}>Stop Quiz</Button>
                </div>
                <div>
                    <Button onClick={addAttempt} disabled={inProgress}>Mulligan</Button>
                </div>
            </span>
            <span>Attempts: {`${attempts}`}</span>
        </div>
    );
}
