import React from 'react';
import { css } from '@emotion/react';
import MoonLoader from 'react-spinners/MoonLoader';

const override = css`
  display: block;
  margin: auto;
`;

export default function Spinner() {
  return <MoonLoader color="#0575e6" size="60" css={override}></MoonLoader>;
}
