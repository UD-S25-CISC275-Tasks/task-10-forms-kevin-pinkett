import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, updateStudent] = useState<boolean>(true);

    const [message, setMessage] = useState<string>(
        name.concat(" is a student"),
    );

    function updateMessage() {
        if (isStudent) {
            setMessage(name.concat(" is a student"));
        } else {
            setMessage(name.concat(" is not a student"));
        }
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="formEditMode">
                <Form.Check
                    type="switch"
                    id="enable-edit-mode"
                    label="edit"
                    checked={editMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setMode(event.target.checked);
                        updateMessage();
                    }}
                />
                <span>
                    {editMode && (
                        <Form.Group>
                            <Form.Label>Name: </Form.Label>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    setName(event.target.value);
                                    updateMessage();
                                }}
                            />
                        </Form.Group>
                    )}
                    {editMode && (
                        <Form.Check
                            type="checkbox"
                            label="Student?"
                            name="student"
                            checked={isStudent}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                updateStudent(event.target.checked);
                                updateMessage();
                            }}
                        />
                    )}
                </span>
            </Form.Group>

            <span>
                {!editMode && (
                    <span>
                        {isStudent && <span>{message}</span>}
                        {!isStudent && <span>{message}</span>}
                    </span>
                )}
            </span>
        </div>
    );
}
