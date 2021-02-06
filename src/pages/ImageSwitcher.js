// From: https://stackoverflow.com/questions/64425555/is-it-possible-to-detect-if-docusaurus-is-in-light-or-dark-mode

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useThemeContext from '@theme/hooks/useThemeContext'; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext

const ImageSwitcher = ({lightImgSrc, darkImgSrc, altText}) => {
  const { isDarkTheme } = useThemeContext();
  const imgSrc = isDarkTheme ? darkImgSrc : lightImgSrc;
  const fullImgSrc = useBaseUrl(imgSrc);

  return (
    <img src={fullImgSrc} alt={altText} />
  )
}

export default ImageSwitcher;
