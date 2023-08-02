/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {Box, useMultiStyleConfig, Text} from '@chakra-ui/react'

const PdpDetailCareMobile = () => {
    const stylePdpProductDetail = useMultiStyleConfig('PdpProductDetail')

    return (
        <>
            {/* <Box>
                <Text {...stylePdpProductDetail.careMainTextMobile}>Material Information</Text>
            </Box> */}
            <Box {...stylePdpProductDetail.careItemsContainerMobile}>
                <Text {...stylePdpProductDetail.careItemsContainerText}>Usage:</Text>
                <Text {...stylePdpProductDetail.careItemsOther}>
                    Apply a small amount of the fixator on well washed and slightly damp hair.Style
                    the curls by hand. Avoid contact with the eyes. Without rinsing.
                </Text>
            </Box>
        </>
    )
}

export default PdpDetailCareMobile
