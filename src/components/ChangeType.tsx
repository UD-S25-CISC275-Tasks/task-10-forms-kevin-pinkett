import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>('short_answer_question');

    function change(): void {
        setQuestionType(questionType == 'short_answer_question' ? 'multiple_choice_question' : 'short_answer_question');
    }

    return <div>
        <span>
            <Button onClick={change}>Change Type</Button>
            <div>
                {questionType == 'short_answer_question' ? <span>Short Answer</span> : <span>Multiple Choice</span>}
                
            </div>
        </span>
    </div>;
}
