/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useIntl} from 'react-intl'

// Components
import {Box, Text, Link, Button} from '@chakra-ui/react'

// Project Components
import Hero from '../../components/hero'
import Seo from '../../components/seo'
import ProductScroller from '../../components/product-scroller'
import HomeStory from '../../components/homeStory'
// Others
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'

// Constants
import {HOME_SHOP_PRODUCTS_CATEGORY_ID, HOME_SHOP_PRODUCTS_LIMIT} from '../../constants'

/**
 * This is the home page for Retail React App.
 * The page is created for demonstration purposes.
 * The page renders SEO metadata and a few promotion
 * categories and products, data is from local file.
 */
const Home = ({productSearchResult, bestSellers, isLoading}) => {
    const intl = useIntl()

    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true})

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Box
            data-testid="home-page"
            layerStyle="page"
            py="0px !important"
            px={{base: 0}}
            maxW="1440px"
        >
            <Seo title="Homepage" description="Cosmetics for YOU" keywords="Cosmetics for YOU" />

            {/* scroll to top button */}
            {scrollPosition > 500 && (
                <Link href="/#top">
                    <Box
                        position="fixed"
                        bottom="60px"
                        right={['16px', '84px']}
                        zIndex={1}
                        fontWeight="bold"
                        fontSize="40px"
                        outline="none"
                        backgroundColor="white"
                        color="#555"
                        cursor="pointer"
                        border="2px solid #555"
                        borderRadius="30px"
                        padding="0px 17px 4px 17px"
                    >
                        ↑{/* <Image src="images/icons/top.svg" w="60px" h="60px" /> */}
                    </Box>
                </Link>
            )}

            <Text align={'center'} my="10px" fontWeight="400" color="black" fontSize="18px">
                The best cosmetic items you can find are here!
            </Text>
            <Hero
                title={intl.formatMessage({
                    defaultMessage: 'BECAUSE PERFUMES ARE...',
                    id: 'home.title'
                })}
                img={{
                    src: getAssetUrl('static/img/homepage1.jpg'),
                    alt: 'Hero picture'
                }}
            />

            {productSearchResult && (
                <ProductScroller
                    products={productSearchResult?.hits}
                    isLoading={isLoading}
                    mb="10px"
                />
            )}
        </Box>
    )
}

Home.getTemplateName = () => 'home'

Home.shouldGetProps = ({previousLocation, location}) =>
    !previousLocation || previousLocation.pathname !== location.pathname

Home.getProps = async ({res, api}) => {
    // Since the home page is static, it is safe to set max age to a high value
    // we set it to a year here, but you can set the value that is suitable for your project
    if (res) {
        res.set('Cache-Control', 'max-age=31536000')
    }

    const productSearchResult = await api.shopperSearch.productSearch({
        parameters: {
            refine: [`cgid=${HOME_SHOP_PRODUCTS_CATEGORY_ID}`, 'htype=master'],
            limit: HOME_SHOP_PRODUCTS_LIMIT
        }
    })
    const bestSellers = await api.shopperSearch.productSearch({
        parameters: {
            refine: [`cgid=14837`, 'htype=master'],
            limit: 8
        }
    })

    return {productSearchResult, bestSellers}
}

Home.propTypes = {
    /**
     * The search result object showing all the product hits, that belong
     * in the supplied category.
     */
    productSearchResult: PropTypes.object,
    /**
     * The current state of `getProps` when running this value is `true`, otherwise it's
     * `false`. (Provided internally)
     */
    isLoading: PropTypes.bool
}

export default Home
