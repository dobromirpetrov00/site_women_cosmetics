/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {Box, useMultiStyleConfig, Image, Text} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'

const PdpAvailabilityAndSmallIconsDesktop = (variantGot, stockLevel) => {
    const stylePdpSmallIcons = useMultiStyleConfig('PdpSmallIcons')
    return (
        <Box marginTop="-30px">
            <Box display={variantGot.variantGot === undefined ? 'none' : 'flex'}>
                Availability:
                <Text
                    style={{
                        marginLeft: '10px',
                        color: variantGot.stockLevel !== 0 ? 'green' : 'red',
                        fontWeight: '600',
                        display: variantGot.stockLevel !== 0 ? 'flex' : 'none'
                    }}
                >
                    In Stock
                </Text>
                <Text
                    style={{
                        marginLeft: '10px',
                        color: variantGot.stockLevel === 0 ? 'red' : 'green',
                        fontWeight: '600',
                        display: variantGot.stockLevel === 0 ? 'flex' : 'none'
                    }}
                >
                    PRODUCT IS SOLD OUT
                </Text>
            </Box>
            <Box display="flex" flexWrap="wrap">
                <Text>
                    <Image
                        {...stylePdpSmallIcons.smallImage}
                        alt="Small shirt picture"
                        src={getAssetUrl('static/img/truck.png')}
                    />
                </Text>
                <Text style={{marginLeft: '15px'}}>Free Delivery over €100</Text>
            </Box>
            <Box display="flex" flexWrap="wrap">
                <Text>
                    <Image
                        {...stylePdpSmallIcons.smallImage}
                        alt="Small shirt picture"
                        src={getAssetUrl('static/img/rocket.png')}
                    />
                </Text>
                <Text style={{marginLeft: '15px'}}>Free returns</Text>
            </Box>
            <Box display="flex" flexWrap="wrap">
                <Text>
                    <Image
                        {...stylePdpSmallIcons.smallImage}
                        alt="Small shirt picture"
                        src={getAssetUrl('static/img/secure.png')}
                    />
                </Text>
                <Text style={{marginLeft: '15px'}}>Secure payment</Text>
            </Box>
        </Box>
    )
}

export default PdpAvailabilityAndSmallIconsDesktop
