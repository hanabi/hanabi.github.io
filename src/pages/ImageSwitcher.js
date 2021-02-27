// From: https://stackoverflow.com/questions/64425555/is-it-possible-to-detect-if-docusaurus-is-in-light-or-dark-mode

import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useThemeContext from '@theme/hooks/useThemeContext'; // https://v2.docusaurus.io/docs/api/themes/configuration

const ImageSwitcher = ({src, altText}) => {
  return (
    <BrowserOnly fallback={<img src={useBaseUrl(src)} alt={altText}/>}>
      {() => {
        const { isDarkTheme } = useThemeContext();
        const filenameExtensionLength = 4; // e.g. ".png"
        const filenameExtension = src.slice(src.length - filenameExtensionLength);
        const srcWithoutExtension = src.slice(0, -1 * filenameExtensionLength);
        const darkSrc = `${srcWithoutExtension}-dark${filenameExtension}`;
        const imgSrc = isDarkTheme ? darkSrc : src;
        const fullImgSrc = useBaseUrl(imgSrc);

        return (
          <img src={fullImgSrc} alt={altText} className="ss" />
        )
      }}
    </BrowserOnly>
  )
}

export default ImageSwitcher;
