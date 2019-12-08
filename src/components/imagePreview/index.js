import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi';

import { 
  RuntimePreviewContainer, ButtonContainer, PreviewButton, ImageContainer 
} from './style';
import Image from './image';

const ImagePreview = ({ colorMode, imgName }) => {
  const [isImageShown, setIsImageShown] = useState(true);

  return(
    <CSSTransition
      in={isImageShown}
      timeout={300}
      classNames="runtime-preview-container"
    >
      {state => (
        <RuntimePreviewContainer state={state}>
          <ButtonContainer isImageShown={isImageShown}>
            <PreviewButton onClick={() => setIsImageShown(!isImageShown)}>
              <div>
                Preview
              </div>
              {isImageShown ? <FiArrowUpRight /> : <FiArrowDownLeft />}
            </PreviewButton>
          </ButtonContainer>
          <CSSTransition
            in={isImageShown}
            timeout={400}
            unmountOnExit
            onEnter={() => setIsImageShown(true)}
            onExited={() => setIsImageShown(false)}
            classNames="image-preview-container"
          >
            <ImageContainer colorMode={colorMode}><Image imgName={imgName} /></ImageContainer>
          </CSSTransition>
        </RuntimePreviewContainer>
      )}
    </CSSTransition>
  );
}

export default ImagePreview;