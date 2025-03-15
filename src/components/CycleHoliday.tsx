import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**"Holidays" Used
 * 
 * "Gotcha Day: 🐶"
 * "Mario Day: 🍄"
 * "My Birthday: 🎉"
 * "Halloween: 👻"
 * "Christmas: 🎄"
 * 
 */

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("Holiday: 🐶");

    const ALPHABETICAL: Record<string, string> = {
        "Holiday: 🐶": "Holiday: 👻",
        "Holiday: 👻": "Holiday: 🎉",
        "Holiday: 🎉": "Holiday: 🍄",
        "Holiday: 🍄": "Holiday: 🎄",
        "Holiday: 🎄": "Holiday: 🐶"
    };

    const CHRONOLOGICAL: Record<string, string> = {
        "Holiday: 🐶": "Holiday: 🍄",
        "Holiday: 🍄": "Holiday: 🎉",
        "Holiday: 🎉": "Holiday: 👻",
        "Holiday: 👻": "Holiday: 🎄",
        "Holiday: 🎄": "Holiday: 🐶"
    };

    function byAlphabet(): void {
        const newHoliday: string = ALPHABETICAL[holiday];
        setHoliday(newHoliday);
    }

    function byDate(): void {
        const newHoliday: string = CHRONOLOGICAL[holiday];
        setHoliday(newHoliday)
    }

    return (
        <div>
            <span>
                <Button onClick={byAlphabet}>Advance by Alphabet</Button>
            </span>
            <span>
                <Button onClick={byDate}>Advance by Year</Button>
            </span>
            <p>{holiday}</p>
        </div>
    );
}
