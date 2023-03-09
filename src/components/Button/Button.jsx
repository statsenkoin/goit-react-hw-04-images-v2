import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export function Button({ onClick, mode, children }) {
  return (
    <StyledButton type="button" mode={mode} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  mode: PropTypes.string,
  children: PropTypes.node,
};
