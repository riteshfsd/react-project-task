import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

function ColorPicker() {
    const [color, setColor] = useState('#fff');
    const [showColorPicker, setShowColorPicker] = useState(false);

    return (
        <div>
            <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? 'Close Color picker' : 'Pick a color'}</button>
            {
                showColorPicker && (
                    <ChromePicker
                        color={color}
                        onChange={updateColor => setColor(updateColor.hex)}
                    />
                )}
                <h2>Your Picked Color : {color}</h2>

        </div>
    )
}
export default ColorPicker;
