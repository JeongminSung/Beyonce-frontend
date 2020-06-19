import React from "react";
import styled from "styled-components";

const Slide = ({ data }) => {
    return data !== undefined && data.map((data) => {
        return(
            <div>
                <IMG src={ data } />
            </div>
        )
    })
}

export default Slide;

const IMG = styled.img `
    width: 350px;
    height: 350px;
    margin-left: 25px;
`