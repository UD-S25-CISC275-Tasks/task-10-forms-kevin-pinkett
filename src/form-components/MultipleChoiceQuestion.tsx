import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, changeChoice] = useState<string>(options[0])

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="formMultipleChoiceQuestion">
                <Form.Label>Choose your answer:</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(e) => {
                        changeChoice(e.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            Your answer is: {choice === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
