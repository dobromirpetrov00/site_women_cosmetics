/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {HeartIcon, HeartSolidIcon} from '../icons'

// Components
import {
    AspectRatio,
    Box,
    Skeleton as ChakraSkeleton,
    Text,
    Stack,
    useMultiStyleConfig,
    IconButton,
    Flex
} from '@chakra-ui/react'
import DynamicImage from '../dynamic-image'

// Hooks
import {useIntl} from 'react-intl'

// Other
import {productUrlBuilder} from '../../utils/url'
import Link from '../link'
import withRegistration from '../../hoc/with-registration'
import {useCurrency} from '../../hooks'

const IconButtonWithRegistration = withRegistration(IconButton)

// Component Skeleton
export const Skeleton = () => {
    const styles = useMultiStyleConfig('ProductTile')
    return (
        <Box data-testid="sf-product-tile-skeleton">
            <Stack spacing={2}>
                <Box {...styles.imageWrapper}>
                    <AspectRatio ratio={1} {...styles.image}>
                        <ChakraSkeleton />
                    </AspectRatio>
                </Box>
                <ChakraSkeleton width="80px" height="20px" />
                <ChakraSkeleton width={{base: '120px', md: '220px'}} height="12px" />
            </Stack>
        </Box>
    )
}

/**
 * The ProductTile is a simple visual representation of a
 * product object. It will show it's default image, name and price.
 * It also supports favourite products, controlled by a heart icon.
 */
const ProductTile = (props) => {
    const intl = useIntl()
    const {
        product,
        enableFavourite = false,
        isFavourite,
        onFavouriteToggle,
        dynamicImageProps,
        ...rest
    } = props
    const {currency, image, price, productName, productId, variationAttributes} = product
    const {currency: activeCurrency} = useCurrency()
    const [isFavouriteLoading, setFavouriteLoading] = useState(false)
    // const [tilePicture, setTilePicture] = useState(getAssetUrl('static/img/test-picture.webp'))
    const [tilePicture1, setTilePicture1] = useState(getAssetUrl('static/img/pr1.webp'))
    const [tilePicture2, setTilePicture2] = useState(getAssetUrl('static/img/pr2.png'))
    const [tilePicture3, setTilePicture3] = useState(getAssetUrl('static/img/pr3.jpg'))
    const [tilePicture4, setTilePicture4] = useState(getAssetUrl('static/img/pr4.jpg'))
    const styles = useMultiStyleConfig('ProductTile')
    let imageAlt = 'Product Image'

    if (image != undefined) {
        imageAlt = image.alt
    }

    if (productId === '622651') {
        return (
            <Box data-testid="product-tile" {...styles.container} {...rest}>
                <Box {...styles.imageWrapper}>
                    {/* Must be commented until we have images in catalog  image.disBaseLink || image.link*/}
                    <Link to={`/product/${productId}`}>
                        <DynamicImage
                            {...styles.image}
                            src={tilePicture1}
                            imageProps={{
                                alt: imageAlt,
                                htmlWidth: '275px',
                                htmlHeight: '340px',
                                ...dynamicImageProps?.imageProps
                            }}
                            height="100%"
                            width="100%"
                        />
                    </Link>
                </Box>

                {/* Title */}
                <Link
                    data-testid="product-tile"
                    to={productUrlBuilder({id: productId}, intl.local)}
                    {...styles.title}
                >
                    <Text>Cake Beauty</Text>
                </Link>

                {/* Price */}
                <Text {...styles.price}>
                    {intl.formatNumber(price, {
                        style: 'currency',
                        currency: currency || activeCurrency
                    })}
                </Text>
            </Box>
        )
    } else if (productId === '622822') {
        return (
            <Box data-testid="product-tile" {...styles.container} {...rest}>
                <Box {...styles.imageWrapper}>
                    {/* Must be commented until we have images in catalog  image.disBaseLink || image.link*/}
                    <Link to={`/product/${productId}`}>
                        <DynamicImage
                            {...styles.image}
                            src={tilePicture2}
                            imageProps={{
                                alt: imageAlt,
                                htmlWidth: '275px',
                                htmlHeight: '340px',
                                ...dynamicImageProps?.imageProps
                            }}
                            height="100%"
                            width="100%"
                        />
                    </Link>
                </Box>

                {/* Title */}
                <Link
                    data-testid="product-tile"
                    to={productUrlBuilder({id: productId}, intl.local)}
                    {...styles.title}
                >
                    <Text>Decadent Creamy Mousse Locking</Text>
                </Link>

                {/* Price */}
                <Text {...styles.price}>
                    {intl.formatNumber(price, {
                        style: 'currency',
                        currency: currency || activeCurrency
                    })}
                </Text>
            </Box>
        )
    } else if (productId === '622859') {
        return (
            <Box data-testid="product-tile" {...styles.container} {...rest}>
                <Box {...styles.imageWrapper}>
                    {/* Must be commented until we have images in catalog  image.disBaseLink || image.link*/}
                    <Link to={`/product/${productId}`}>
                        <DynamicImage
                            {...styles.image}
                            src={tilePicture3}
                            imageProps={{
                                alt: imageAlt,
                                htmlWidth: '275px',
                                htmlHeight: '340px',
                                ...dynamicImageProps?.imageProps
                            }}
                            height="100%"
                            width="100%"
                        />
                    </Link>
                </Box>

                {/* Title */}
                <Link
                    data-testid="product-tile"
                    to={productUrlBuilder({id: productId}, intl.local)}
                    {...styles.title}
                >
                    <Text>Fixating Fluid with Snail Extract</Text>
                </Link>

                {/* Price */}
                <Text {...styles.price}>
                    {intl.formatNumber(price, {
                        style: 'currency',
                        currency: currency || activeCurrency
                    })}
                </Text>
            </Box>
        )
    } else if (productId === '622862') {
        return (
            <Box data-testid="product-tile" {...styles.container} {...rest}>
                <Box {...styles.imageWrapper}>
                    {/* Must be commented until we have images in catalog  image.disBaseLink || image.link*/}
                    <Link to={`/product/${productId}`}>
                        <DynamicImage
                            {...styles.image}
                            src={tilePicture4}
                            imageProps={{
                                alt: imageAlt,
                                htmlWidth: '275px',
                                htmlHeight: '340px',
                                ...dynamicImageProps?.imageProps
                            }}
                            height="100%"
                            width="100%"
                        />
                    </Link>
                </Box>

                {/* Title */}
                <Link
                    data-testid="product-tile"
                    to={productUrlBuilder({id: productId}, intl.local)}
                    {...styles.title}
                >
                    <Text>Conditioner for Curly Hair</Text>
                </Link>

                {/* Price */}
                <Text {...styles.price}>
                    {intl.formatNumber(price, {
                        style: 'currency',
                        currency: currency || activeCurrency
                    })}
                </Text>
            </Box>
        )
    }
}

ProductTile.displayName = 'ProductTile'

ProductTile.propTypes = {
    /**
     * The product search hit that will be represented in this
     * component.
     */
    product: PropTypes.shape({
        currency: PropTypes.string,
        image: PropTypes.shape({
            alt: PropTypes.string,
            disBaseLink: PropTypes.string,
            link: PropTypes.string
        }),
        price: PropTypes.number,
        productName: PropTypes.string,
        productId: PropTypes.string
    }),
    /**
     * Enable adding/removing product as a favourite.
     * Use case: wishlist.
     */
    enableFavourite: PropTypes.bool,
    /**
     * Display the product as a faviourite.
     */
    isFavourite: PropTypes.bool,
    /**
     * Callback function to be invoked when the user
     * interacts with favourite icon/button.
     */
    onFavouriteToggle: PropTypes.func,
    dynamicImageProps: PropTypes.object
}

export default ProductTile
