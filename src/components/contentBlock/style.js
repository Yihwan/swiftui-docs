import styled from '@emotion/styled';
import { COLORS, SPACER } from 'src/constants/style';

export const ContentBlockContainer = styled.div`
  border: 1px solid ${COLORS.greyD1};
  box-sizing: border-box;

  pre {
    margin: 0;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;


  background-color: ${COLORS.greyD1};
  height: ${SPACER.xlarge};
  padding: 0 ${SPACER.xsmall};
`;

export const TabButtonGroup = styled.div`
  display: flex; 
  align-items: center;
`;

export const Content = styled.div`
  position: relative; 
  overflow: hidden;
  background-color: lightyellow;
`;