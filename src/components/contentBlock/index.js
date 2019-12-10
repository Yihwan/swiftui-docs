import React from 'react';
import { useColorMode } from 'theme-ui'

import ImagePreview from '../imagePreview';
import {
  ContentBlockContainer,
} from './style';

const ContentBlock = ({ imgName, children }) => {
  const [colorMode] = useColorMode();
  if (colorMode === 'dark') {
    const split = imgName.split('.png');
    imgName = split[0] + '-dark.png';
  }

  return (
    <ContentBlockContainer colorMode={colorMode}>
      {children}
      <ImagePreview colorMode={colorMode} imgName={imgName} />
    </ContentBlockContainer>
  );
}

export default ContentBlock;