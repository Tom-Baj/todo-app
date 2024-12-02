import styled from 'styled-components';
import React, { useState } from 'react';

const CheckboxWrapper = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.5rem;
`;

const StyledCheckbox = styled.input`
    cursor: pointer;
`;

function Checkbox() {
    const [checked, setChecked] = useState(false);
    const toggleCheck = () => {
        setChecked(!checked);
    };

    return (
        <CheckboxWrapper>
            <label htmlFor="checkbox" className="checkbox">
                <StyledCheckbox
                    type="checkbox"
                    checked={checked}
                    onChange={toggleCheck}
                />
            </label>
        </CheckboxWrapper>
    );
}

export default Checkbox;
