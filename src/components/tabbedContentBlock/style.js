import styled from '@emotion/styled';
import * as COLORS from 'src/gatsby-theme-docz/theme/colors';

export const ContentBlockContainer = styled.div`
  border: 1px solid ${COLORS.grayDark};
  box-sizing: border-box;
  background-color: ${({ colorMode }) => colorMode === 'light' ? '#f6f8fa' : '#12151e'};

  .react-tabs__tab-list {
    border-bottom: 1px solid ${COLORS.grayDark};
    font-size: 1rem;
    letter-spacing: 0.03em;
    font-weight: 700;
    
    .react-tabs__tab--selected {
      border: none;
      border-bottom: 5px solid ${({ colorMode }) => colorMode === 'light' ? COLORS.blue : COLORS.skyBlue};
      color: ${({ colorMode }) => colorMode === 'light' ? COLORS.grayDark : '#fff'};
      background-color: transparent;
    }
  }

`;

export const TabButtonGroup = styled.div`
  display: flex; 
  align-items: center;
`;

export const CodeContent = styled.div`
  position: relative; 
  overflow: hidden;
`;