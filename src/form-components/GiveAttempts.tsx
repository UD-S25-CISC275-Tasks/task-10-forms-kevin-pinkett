import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<number>(0);

    function addRequested(event: React.ChangeEvent<HTMLInputElement>){
        let ret = 0;
        event.target.value !== "" ? ret = parseInt(event.target.value) : 0;
        setRequested(ret);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttemps">
                <Form.Label>How many attempts do you want?</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={addRequested} />
            </Form.Group>
            <span>You have {attempts} attemps remaining</span>
            <Button disabled={attempts <= 0} onClick={() => {setAttempts(attempts - 1)}}>Use</Button>
            <Button onClick={() => {setAttempts(attempts + requested)}}>Gain</Button>
        </div>
    );
}
