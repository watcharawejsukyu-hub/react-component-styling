// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
    return (
        <div>
            <button
                css={css`
                    display: flex;
                    justify-content: center;
                    margin: 50px;
                    padding: 32px;
                    background-color: ${props.color};
                    font-size: 24px;
                    border: none;
                    border-radius: 5px;
                    color: white;
                    font-weight: bold;
                    width: 300px;
                `}
            >
                {props.text}
            </button>
        </div>
    )
}

export default Button;