import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, updateStudent] = useState<boolean>(true);
    const [message, setMessage] = useState<string>("Your Name is a student");

    function formMessage() {
        if (isStudent) {
            setMessage(name.concat("  is a student"));
        } else {
            setMessage(name.concat("  is not a student"));
        }
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="formEditMode">
                <Form.Check
                    type="switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setMode(event.target.checked);
                        formMessage();
                    }}
                />
                {editMode && (
                    <Form.Control
                        disabled={!editMode}
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setName(event.target.value);
                        }}
                    />
                )}
                {editMode && (
                    <Form.Check
                        type="checkbox"
                        label="Student?"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            updateStudent(event.target.checked);
                        }}
                    />
                )}
                <span>
                    {!editMode &&
                        (isStudent ?
                            `${name} is a student`
                        :   `${name} is not a student`)}
                </span>
            </Form.Group>
        </div>
    );
}
