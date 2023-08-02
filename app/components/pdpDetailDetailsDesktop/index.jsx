/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {Box, useMultiStyleConfig, UnorderedList, ListItem, Text} from '@chakra-ui/react'
import {useIntl} from 'react-intl'

const PdpDetailDetailsDesktop = ({product}) => {
    const stylePdpProductDetail = useMultiStyleConfig('PdpProductDetail')
    const stylePdpDetailDetailsDesktop = useMultiStyleConfig('PdpDetailDetailsDesktop')
    const {formatMessage} = useIntl()

    return (
        <>
            <h2>
                <Box {...stylePdpProductDetail.productDetailsTitle}>
                    {formatMessage({
                        defaultMessage: 'Product details',
                        id: 'product_detail.accordion.button.product_detail'
                    })}
                </Box>
            </h2>
            <Box {...stylePdpProductDetail.productDetailsLongDescription}>
                <div>
                    Fixating and styling fluid with a garden snail extract operates simultaneously
                    in three directions - shapes the curls, revitalizes and protects the hair,
                    provides it with volume, shine and strength. The fluid is not greasy and does
                    not make the hair heavy. Contains UV filter for additional protection.
                </div>
            </Box>
            <Box {...stylePdpProductDetail.productDetailsItemsContainer}>
                <UnorderedList sx={{listStyleType: 'disc', columns: '2'}}>
                    <ListItem {...stylePdpDetailDetailsDesktop.itemInList}>
                        <Text {...stylePdpDetailDetailsDesktop.itemInListText}>
                            Fixating fluid with a garden snail extract
                        </Text>
                    </ListItem>
                    <ListItem {...stylePdpDetailDetailsDesktop.itemInList}>
                        <Text {...stylePdpDetailDetailsDesktop.itemInListText}>
                            Enriched with vitamin F
                        </Text>
                    </ListItem>
                    <ListItem {...stylePdpDetailDetailsDesktop.itemInList}>
                        <Text {...stylePdpDetailDetailsDesktop.itemInListText}>
                            Contains UV-filters
                        </Text>
                    </ListItem>
                    <ListItem {...stylePdpDetailDetailsDesktop.itemInList}>
                        <Text {...stylePdpDetailDetailsDesktop.itemInListText}>
                            Styles the curls, revitalizes and protects the hair
                        </Text>
                    </ListItem>
                    <ListItem {...stylePdpDetailDetailsDesktop.itemInList}>
                        <Text {...stylePdpDetailDetailsDesktop.itemInListText}>
                            Suitable for all hair types
                        </Text>
                    </ListItem>
                    <ListItem {...stylePdpDetailDetailsDesktop.itemInList}>
                        <Text {...stylePdpDetailDetailsDesktop.itemInListText}>
                            Does not make it greasy
                        </Text>
                    </ListItem>
                </UnorderedList>
            </Box>
        </>
    )
}

export default PdpDetailDetailsDesktop
