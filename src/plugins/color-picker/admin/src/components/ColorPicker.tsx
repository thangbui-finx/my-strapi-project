import React from 'react';

const ColorPicker = (props: any) => {
    const value = props?.value || "#000000";
    const onChange = props?.onChange;
    return (
        <input type="color" 
            value={value }
            onChange={(e) => onChange({
                target: {
                    value: e.target.value
                }
            })}
            style={{width: '100%' , height: 80}}
        />
    )
}
export default ColorPicker;