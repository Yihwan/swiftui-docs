import styled from '@emotion/styled';
import { SPACER, COLORS } from 'src/constants/style';

export const RuntimePreviewContainer = styled.div`
  background-color: transparent;
  float: right; 
  margin: ${SPACER.xsmall};
  border-radius: 6px;
  ${({ state }) => ['entering', 'entered'].includes(state) && 'box-shadow: 0 0 3px 0 rgba(0,0,0,.4);'}


  .image-preview-container-enter {
    transform: scale(0);
    width: 0px;
    opacity: 0; 
    transform-origin: top right;
    border: 0;
  }
  .image-preview-container-enter-active {
    transform: scale(1);
    width: 278px;
    opacity: 1; 
    transition: all 300ms;
  }

  .image-preview-container-exit {
    width: 278px;
    transform: scale(1);
    transform-origin: top right;
    opacity: 1; 
  }
  .image-preview-container-exit-active {
    transform: scale(0);
    width: 0px;
    opacity: 0;
    transition: all 300ms;
  }
`;
  
export const ButtonContainer = styled.div`
  background-color: ${COLORS.greyD2};
  border-radius: ${({ isImageShown }) => isImageShown ? '6px 6px 0 0' : '6px'}};
  display: flex;
  align-items: center;
  ${({ isImageShown }) => !isImageShown && 'box-shadow: 0 0 3px 0 rgba(0,0,0,.4);'}
  `;
  
  export const PreviewButton = styled.button`
  color: ${COLORS.white};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  padding: 6px;
  width: 100%; 
  display: flex; 
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }

  > div {
    margin-right: ${SPACER.xlarge};
  }
`;


export const ImageContainer = styled.div`
  width: 278px;
  padding: ${SPACER.xsmall} 0;
  background-color: ${({ colorMode }) => colorMode === 'light' ? '#fff' : '#000'};
  border-radius: 0 0 6px 6px;

  img {
    ${({ colorMode }) => colorMode === 'dark' && 'filter: invert(100%);'}
  }
`;