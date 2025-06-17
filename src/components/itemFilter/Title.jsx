import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h4`
  font-size:18px;
  padding: 1rem 0 0 0;
`;

export function Title({ title }) {
    return (
        <div>
            <Titulo>{title}</Titulo>
        </div>
    );
}
