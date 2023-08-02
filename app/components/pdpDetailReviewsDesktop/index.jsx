/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {Box, useMultiStyleConfig, Text} from '@chakra-ui/react'
import {useIntl} from 'react-intl'

const PdpDetailReviewsDesktop = () => {
    const stylePdpProductDetail = useMultiStyleConfig('PdpProductDetail')
    const {formatMessage} = useIntl()

    return (
        <>
            <Box>
                <Text fontSize="22px" {...stylePdpProductDetail.reviewsTitle}>
                    {formatMessage({
                        defaultMessage: 'Reviews',
                        id: 'product_detail.accordion.button.reviews'
                    })}
                </Text>
            </Box>
            <Box>
                <Text {...stylePdpProductDetail.reviewsContent}>
                    {formatMessage({
                        defaultMessage: 'Coming Soon',
                        id: 'product_detail.accordion.message.coming_soon'
                    })}
                </Text>
            </Box>
        </>
    )
}
export default PdpDetailReviewsDesktop
