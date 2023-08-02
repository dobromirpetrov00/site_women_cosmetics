/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {Box, useMultiStyleConfig} from '@chakra-ui/react'
import DynamicImage from '../dynamic-image'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'

const PdpDynamicImages = () => {
    const stylePdpImageZoom = useMultiStyleConfig('PdpImageZoom')
    return (
        <Box {...stylePdpImageZoom.imgWrapper}>
            <DynamicImage
                {...stylePdpImageZoom.hoverZoom}
                src={getAssetUrl('static/img/pr3.jpg')}
                imageProps={{
                    alt: 'Main picture',
                    htmlHeight: '...',
                    htmlWidth: '...',
                    padding: '0px 5px 5px 0px'
                }}
            />
            {/* <DynamicImage
                {...stylePdpImageZoom.hoverZoom}
                src={getAssetUrl('static/img/shirtBack.jpg')}
                imageProps={{
                    alt: 'Main picture',
                    htmlHeight: '...',
                    htmlWidth: '...',
                    padding: '0px 0px 5px 5px'
                }}
            />
            <DynamicImage
                {...stylePdpImageZoom.hoverZoom}
                src={getAssetUrl('static/img/shirtOnly.jpg')}
                imageProps={{
                    alt: 'Main picture',
                    htmlHeight: '...',
                    htmlWidth: '...',
                    padding: '5px 5px 0px 0px'
                }}
            />
            <DynamicImage
                {...stylePdpImageZoom.hoverZoom}
                src={getAssetUrl('static/img/shirtOnlyBack.jpg')}
                imageProps={{
                    alt: 'Main picture',
                    htmlHeight: '...',
                    htmlWidth: '...',
                    padding: '5px 0px 0px 5px'
                }}
            /> */}
        </Box>
    )
}

export default PdpDynamicImages
