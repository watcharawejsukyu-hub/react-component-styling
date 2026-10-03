// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Alert(props) {
    return (
        <div>
            <div
                css={css`
                    display: flex;
                    margin: 50px;
                    padding: 32px;
                    background-color: ${props.color};
                    font-size: 24px;
                    border: none;
                    border-radius: 5px;
                    color: black;
                    font-weight: bold;
                    width: 600px;
                `}
            >
            <img src={props.icon}
                css={css`
                    margin: 10px;
                    width: 50px;
                    height: 50px;
                `}
            /> 
            <p>
                {props.text}
            </p>
            </div>
        </div>
    )
}

export default Alert;
