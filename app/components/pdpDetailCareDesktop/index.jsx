/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {Box, useMultiStyleConfig, Text} from '@chakra-ui/react'
import {useIntl} from 'react-intl'

const PdpDetailCareDesktop = () => {
    const stylePdpProductDetail = useMultiStyleConfig('PdpProductDetail')
    const {formatMessage} = useIntl()

    return (
        <>
            <h2>
                <Box {...stylePdpProductDetail.careTitle} paddingBottom="-40px">
                    {formatMessage({
                        defaultMessage: 'Care',
                        id: 'product_detail.accordion.button.care'
                    })}
                </Box>
            </h2>
            {/* <Text fontSize="18px" fontWeight="bold">
                Material Information
            </Text> */}
            <Box {...stylePdpProductDetail.careItemsContainer}>
                <Text {...stylePdpProductDetail.careItemsContainerText}>Usage:</Text>
                <Text {...stylePdpProductDetail.careItemsOther}>
                    Apply a small amount of the fixator on well washed and slightly damp hair.Style
                    the curls by hand. Avoid contact with the eyes. Without rinsing.
                </Text>
            </Box>
        </>
    )
}

export default PdpDetailCareDesktop
