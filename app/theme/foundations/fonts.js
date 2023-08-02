import React from 'react'
import {Global} from '@emotion/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
const Fonts = () => {
    const fKGroteskANTIfont = getAssetUrl('static/fonts/FKGroteskANTI-Regular.woff')
    const fKGroteskANTIfont2 = getAssetUrl('static/fonts/FKGroteskANTI-Regular.woff2')
    const fiveYearLaterRegular = getAssetUrl('static/fonts/FiveYearsLaterRegular.woff')
    return (
        <Global
            styles={`
                @font-face {
                  font-family: 'Five Year Later';
                  src: url(${fiveYearLaterRegular}) format('woff');
                  font-weight: 400;
                  font-style: normal;
                  font-display: swap; 
                }
                @font-face {
                  font-family: 'FK Grotesk Regular';
                  src: url(${fKGroteskANTIfont}) format('woff'), 
                        url(${fKGroteskANTIfont2}) format('woff2');
                  font-weight: 400;
                  font-style: normal;
                  font-display: swap; 
                }
            `}
        />
    )
}

export default Fonts
