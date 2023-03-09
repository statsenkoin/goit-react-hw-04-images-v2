import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  ${props => {
    switch (props.mode) {
      case 'loadMore':
        return css`
          display: inline-block;
          width: 200px;
          min-width: 180px;
          margin-left: auto;
          margin-right: auto;
          padding: 8px 16px;

          border: 0;
          border-radius: 2px;
          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
            0px 2px 2px 0px rgba(0, 0, 0, 0.14),
            0px 1px 5px 0px rgba(0, 0, 0, 0.12);
          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

          background-color: #3f51b5;
          color: #fff;
          font-family: inherit;
          font-size: 18px;
          line-height: 24px;
          font-style: normal;
          font-weight: 500;
          text-align: center;
          text-decoration: none;
          cursor: pointer;

          &:hover,
          &:focus {
            background-color: #303f9f;
          }
        `;
      case 'modalClose':
        return css`
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          font-size: 28px;
          color: rgba(255, 0, 0, 0.4);
          background-color: transparent;
          border: none;
          cursor: pointer;

          &:hover,
          &:focus {
            color: red;
            scale: 1.1;
          }
        `;

      default:
        return css`
          background-color: #fff;
          color: #000;
          font-family: inherit;
          font-size: 18px;
          cursor: pointer;
        `;
    }
  }}
`;
