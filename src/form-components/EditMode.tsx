import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, updateStudent] = useState<boolean>(true);

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
                    }}
                />
                {editMode && (
                    <Form.Group>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                        disabled={!editMode}
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setName(event.target.value);
                        }}
                    />
                </Form.Group>)}
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
            </Form.Group>
            <span>
                {!editMode && (
                    <span>
                        {isStudent && <span>{name} is a student</span>}
                        {!isStudent && <span>{name} is not a student</span>}
                    </span>
                )}
            </span>
        </div>
    );
}
