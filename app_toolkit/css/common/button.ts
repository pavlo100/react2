import { css } from '@emotion/react';
import { small } from './typography';

export const button = css`
  ${small};
  display: block;
  width: 100%;
  padding: 0.75rem 1.25rem;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
  transition: 0.1s background-color ease;
`;

export const greenButton = css`
  ${button};
  color: var(--colorWhite);
  background: var(--colorSalem);
  border-color: var(--colorSalem);

  &:hover {
    background: var(--colorDarkerSalem);
    border-color: var(--colorDarkerSalem);
  }
`;
