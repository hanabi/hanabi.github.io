// From: https://stackoverflow.com/questions/64425555/is-it-possible-to-detect-if-docusaurus-is-in-light-or-dark-mode

/*
import ImageSwitcher from '../src/pages/ImageSwitcher.js';

<ImageSwitcher
  lightImgSrc="/img/level_2/double_prompt.png"
  darkImgSrc="/img/level_2/double_prompt_dark.png"
  altText="Double Prompt"
/>
*/

/*
import Layout from '@theme/Layout';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useThemeContext from '@theme/hooks/useThemeContext'; // https://v2.docusaurus.io/docs/api/themes/configuration

const ImageSwitcher = ({lightImgSrc, darkImgSrc, altText}) => {
  const { isDarkTheme } = useThemeContext();
  const imgSrc = isDarkTheme ? darkImgSrc : lightImgSrc;
  const fullImgSrc = useBaseUrl(imgSrc);

  return (
    <Layout>
      <img src={fullImgSrc} alt={altText} />
    </Layout>
  )
}

export default ImageSwitcher;
*/
