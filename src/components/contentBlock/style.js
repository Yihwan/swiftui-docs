import styled from '@emotion/styled';
import * as COLORS from 'src/gatsby-theme-docz/theme/colors';

export const ContentBlockContainer = styled.div`
  border: 1px solid ${COLORS.grayDark};
  box-sizing: border-box;
  background-color: ${({ colorMode }) => colorMode === 'light' ? '#f6f8fa' : '#12151e'};
`;

export const TabButtonGroup = styled.div`
  display: flex; 
  align-items: center;
`;

export const CodeContent = styled.div`
  position: relative; 
  overflow: hidden;
`;