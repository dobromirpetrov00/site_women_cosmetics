/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {isServer} from '../../../utils/utils'
// Components
import {Box, Heading, Flex, Text, Fade} from '@chakra-ui/react'

// Project Components
import Breadcrumb from '../../../components/breadcrumb'
import {HideOnMobile} from '../../../components/responsive'

const PageHeader = ({category, productSearchResult, isLoading, searchQuery, ...otherProps}) => {
    return (
        <Box {...otherProps} data-testid="sf-product-list-breadcrumb">
            {/* Breadcrumb */}
            <HideOnMobile>
                {category && <Breadcrumb categories={category.parentCategoryTree} />}
                {searchQuery && <Text>Search Results for</Text>}
                {/* Category Title */}
            </HideOnMobile>
            <Flex>
                <Heading as="h2" size="lg" marginRight={2}>
                    {/* `${category?.name || searchQuery || ''}` */}
                    {`${searchQuery || ''}`}
                </Heading>
                {/*
                <HideOnMobile>
                    <Heading as="h2" size="lg" marginRight={2}>
                        {isServer ? (
                            <Fragment>({productSearchResult?.total})</Fragment>
                        ) : (
                            // Fade in the total when available. When it's changed or not available yet, do not render it
                            !isLoading && <Fade in={true}>({productSearchResult?.total})</Fade>
                        )}
                    </Heading>
                </HideOnMobile>
                */}
            </Flex>
        </Box>
    )
}

PageHeader.propTypes = {
    category: PropTypes.object,
    productSearchResult: PropTypes.object,
    isLoading: PropTypes.bool,
    searchQuery: PropTypes.string
}

export default PageHeader
