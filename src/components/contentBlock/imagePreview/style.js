import styled from '@emotion/styled';
import { SPACER, COLORS } from 'src/constants/style';

export const RuntimePreviewContainer = styled.div`
  float: right; 
  margin: ${SPACER.xsmall};
  border-radius: 6px;
  ${({ state }) => ['entering', 'entered'].includes(state) && 'box-shadow: 0 0 3px 0 rgba(0,0,0,.4);'}
  ${({ state }) => ['entering'].includes(state) && `background-color: ${COLORS.white};`}


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
    transition: all 400ms;
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
    transition: all 400ms;
  }
`;
  
export const ButtonContainer = styled.div`
  background-color: ${COLORS.greyD1};
  border-radius: ${({ isImageShown }) => isImageShown ? '6px 6px 0 0' : '6px'}};
  display: flex;
  align-items: center;
  ${({ isImageShown }) => !isImageShown && 'box-shadow: 0 0 3px 0 rgba(0,0,0,.4);'}
`;
  
export const PreviewButton = styled.button`
  font-size: 0.75rem;
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
  background-color: ${COLORS.white};
  border-radius: 0 0 6px 6px;
`;