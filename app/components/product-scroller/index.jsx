/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {forwardRef, useRef} from 'react'
import PropTypes from 'prop-types'
import {AspectRatio, Box, Heading, IconButton, Skeleton, Stack, useMultiStyleConfig} from '@chakra-ui/react'
import ProductTile from '../../components/product-tile'
import {ChevronLeftIcon, ChevronRightIcon} from '../icons'

/**
 * Renders a scrollable, horizontal container of products with native scroll
 * snapping and manual button controls.
 */
const ProductScroller = forwardRef(
    (
        {
            header,
            title,
            products,
            isLoading,
            scrollProps,
            itemWidth = {base: '70%', md: '40%', lg: 'calc(25% - 10px)'},
            productTileProps,
            ...props
        },
        ref
    ) => {
        const scrollRef = useRef()
        const styles = useMultiStyleConfig('ProductScroller')
        // Renders nothing if we aren't loading and have no products.
        if ((!products || products.length < 1) && !isLoading) {
            return null
        }

        // Scroll the container left or right by 100%. Passing no args or `1`
        // scrolls to the right, and passing `-1` scrolls left.
        const scroll = (direction = 1) => {
            scrollRef.current?.scrollBy({
                top: 0,
                left: direction * window.innerWidth,
                behavior: 'smooth'
            })
        }

        return (
            <Box position="relative" data-testid="product-scroller" ref={ref}>
                <Stack spacing={6} {...props}>
                    {isLoading && <Skeleton height={6} width="150px" m="auto" />}

                    {title && !header && !isLoading && <Heading {...style.title}>{title}</Heading>}

                    {!title && !isLoading && header}

                    <Stack ref={scrollRef} {...styles.scroll} {...scrollProps}>
                        {(isLoading ? [0, 1, 2, 4] : products).map((product, idx) => {
                            return (
                                <Box key={product?.id || idx} {...styles.productTileContainer}>
                                    {isLoading ? (
                                        <Stack data-testid="product-scroller-item-skeleton">
                                            <AspectRatio ratio={1}>
                                                <Skeleton />
                                            </AspectRatio>
                                            <Stack spacing={2}>
                                                <Skeleton width="150px" height={5} />
                                                <Skeleton width="75px" height={5} />
                                            </Stack>
                                        </Stack>
                                    ) : (
                                        <ProductTile
                                            data-testid="product-scroller-item"
                                            product={product}
                                            {...(typeof productTileProps === 'function'
                                                ? {...productTileProps(product)}
                                                : {...productTileProps})}
                                        />
                                    )}
                                </Box>
                            )
                        })}
                    </Stack>
                </Stack>

                {products?.length > 4 && (
                    <>
                        <Box {...styles.leftArrow}>
                            <IconButton
                                data-testid="product-scroller-nav-left"
                                aria-label="Scroll products left"
                                icon={<ChevronLeftIcon color="red" />}
                                borderRadius="full"
                                variant="unstyled"
                                onClick={() => scroll(-1)}
                                _hover={{backgroundColor: 'transparent'}}
                            />
                        </Box>

                        <Box {...styles.rightArrow}>
                            <IconButton
                                data-testid="product-scroller-nav-right"
                                aria-label="Scroll products right"
                                icon={<ChevronRightIcon color="red" bg="transparent" />}
                                borderRadius="full"
                                variant="unstyled"
                                onClick={() => scroll(1)}
                                _hover={{backgroundColor: 'transparent'}}
                            />
                        </Box>
                    </>
                )}
            </Box>
        )
    }
)

ProductScroller.displayName = 'ProductScroller'

ProductScroller.propTypes = {
    header: PropTypes.any,
    title: PropTypes.any,
    products: PropTypes.array,
    isLoading: PropTypes.bool,
    scrollProps: PropTypes.object,
    itemWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    productTileProps: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}

export default ProductScroller
