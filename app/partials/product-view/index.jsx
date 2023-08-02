import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
//import {useIntl} from 'react-intl'

// import chakra components
import {Flex, Box, VStack, HStack, Link} from '@chakra-ui/react'
import {useProduct} from '../../hooks'
import {useAddToCartModalContext} from '../../hooks/use-add-to-cart-modal'

// project components
import {Skeleton as ImageGallerySkeleton} from '../../components/image-gallery'
import {HideOnDesktop, HideOnMobile} from '../../components/responsive'

// import custom components
import PdpImageSlider from '../../components/pdpImageSlider'
import PdpDynamicImages from '../../components/pdpDynamicImages'
import PdpAvailabilityAndSmallIconsDesktop from '../../components/pdpAvailabilityAndSmallIconsDesktop'
import PdpAvailabilityAndSmallIconsMobile from '../../components/pdpAvailabilityAndSmallIconsMobile'
import PdpSwatchGroupsAttributes from '../../components/pdpSwatchGroupsAttributes'
import PdpSwatchGroupsAttributesMobile from '../../components/pdpSwatchGroupsAttributesMobile'
import PdpQuantityPicker from '../../components/pdpQuantityPicker'
import PdpQuantityPickerMobile from '../../components/pdpQuantityPickerMobile'
import PdpProductViewHeader from '../../components/pdpProductViewHeader'
import PdpProductCategory from '../../components/pdpProductCategory'
import PdpSelectAllOptions from '../../components/pdpSelectAllOptions'
import PdpSkeletonBeforeItemsLoaded from '../../components/pdpSkeletonBeforeItemsLoaded'
import PdpAddToCartButton from '../../components/pdpAddToCartButton'
import PdpAddToWishlistButton from '../../components/pdpAddToWishlistButton'

const ProductView = ({
    product,
    category,
    //showFullLink = false,
    isWishlistLoading = false,
    addToCart,
    updateCart,
    addToWishlist,
    updateWishlist,
    isProductLoading
}) => {
    //const intl = useIntl()
    const location = useLocation()
    const {
        isOpen: isAddToCartModalOpen,
        onOpen: onAddToCartModalOpen,
        onClose: onAddToCartModalClose
    } = useAddToCartModalContext()
    const [showOptionsMessage, toggleShowOptionsMessage] = useState(false)
    const {
        showLoading,
        showInventoryMessage,
        quantity,
        minOrderQuantity,
        variant,
        variationAttributes,
        stockLevel,
        stepQuantity
    } = useProduct(product)
    const canAddToWishlist = !isProductLoading
    const canOrder =
        !isProductLoading &&
        variant?.orderable &&
        parseInt(quantity) > 0 &&
        parseInt(quantity) <= stockLevel

    const renderActionButtons = () => {
        const buttons = []

        const handleCartItem = async () => {
            if (!canOrder) {
                toggleShowOptionsMessage(true)
                return null
            }
            if (!addToCart && !updateCart) return null
            if (updateCart) {
                await updateCart(variant, quantity)
                return
            }
            await addToCart(variant, quantity)
            onAddToCartModalOpen({product, quantity})
        }

        const handleWishlistItem = async () => {
            if (!updateWishlist && !addToWishlist) return null
            if (updateWishlist) {
                updateWishlist(variant, quantity)
                return
            }
            addToWishlist(variant, quantity)
        }

        if (addToCart || updateCart) {
            buttons.push(
                <PdpAddToCartButton
                    key="addToCartButton"
                    handleCartItem={handleCartItem}
                    showInventoryMessage={showInventoryMessage}
                    updateCart={updateCart}
                />
            )
        }

        if (addToWishlist || updateWishlist) {
            buttons.push(
                <PdpAddToWishlistButton
                    key="addToWishlistButton"
                    handleWishlistItem={handleWishlistItem}
                    isWishlistLoading={isWishlistLoading}
                    canAddToWishlist={canAddToWishlist}
                />
            )
        }
        return buttons
    }

    useEffect(() => {
        if (isAddToCartModalOpen) {
            onAddToCartModalClose()
        }
    }, [location.pathname])

    useEffect(() => {
        if (canOrder) {
            toggleShowOptionsMessage(false)
        }
    }, [variant?.productId])

    const [scrollPosition, setScrollPosition] = useState(0)

    return (
        <Flex direction={'column'} data-testid="product-view">
            {/* category */}
            {/* <HideOnMobile>
                <PdpProductCategory category={category} />
            </HideOnMobile> */}

            {/* scroll to top button */}
            {scrollPosition > 500 && (
                <Link href="/#top">
                    <Box
                        position="fixed"
                        bottom="60px"
                        right={['16px', '84px']}
                        zIndex={10000}
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

            {/* id */}
            <HideOnMobile>
                <Box marginRight="6vw" textAlign="right" fontSize="15px" color="#97999b">
                    ID: {product?.id}
                </Box>
            </HideOnMobile>

            {/* product name, price, category, currency */}
            <HideOnMobile>
                <Box marginRight="5vw" display={['block', 'block', 'block', 'none']}>
                    <PdpProductViewHeader
                        name={product?.name}
                        price={product?.price}
                        currency={product?.currency}
                        category={category}
                    />
                </Box>
            </HideOnMobile>
            <Flex
                align="space-between"
                maxWidth="1440px"
                direction={['column', 'column', 'column', 'row']}
            >
                <Box flex={1}>
                    {product ? (
                        <>
                            <HideOnMobile>
                                <PdpDynamicImages />
                            </HideOnMobile>
                            <HideOnDesktop>
                                <PdpImageSlider />
                            </HideOnDesktop>
                            <HideOnDesktop>
                                <Box display={['block', 'block', 'block', 'none']}>
                                    <PdpProductViewHeader
                                        name={product?.name}
                                        price={product?.price}
                                        currency={product?.currency}
                                        category={category}
                                    />
                                </Box>
                                <VStack align="stretch" spacing={4}>
                                    {showLoading ? (
                                        <PdpSkeletonBeforeItemsLoaded />
                                    ) : (
                                        <PdpSwatchGroupsAttributesMobile
                                            showLoading={showLoading}
                                            variationAttributes={variationAttributes}
                                        />
                                    )}

                                    <PdpSelectAllOptions
                                        showLoading={showLoading}
                                        showOptionsMessage={showOptionsMessage}
                                    />
                                </VStack>
                                <Box display="block">
                                    {/* Quantity Selector */}
                                    <HStack
                                        marginBottom="15px"
                                        marginTop="-30px"
                                        align="stretch"
                                        maxWidth={'350px'}
                                    >
                                        <PdpQuantityPickerMobile
                                            stepQuantity={stepQuantity}
                                            quantity={quantity}
                                            minOrderQuantity={minOrderQuantity}
                                            product={product}
                                        />
                                        {renderActionButtons()}
                                    </HStack>
                                </Box>
                                <PdpAvailabilityAndSmallIconsMobile
                                    variantGot={variant}
                                    stockLevel={product?.inventory?.stockLevel}
                                />
                            </HideOnDesktop>
                        </>
                    ) : (
                        <>
                            <ImageGallerySkeleton />
                            <HideOnDesktop>
                                <Box display={['block', 'block', 'block', 'none']}>
                                    <PdpProductViewHeader
                                        name={product?.name}
                                        price={product?.price}
                                        currency={product?.currency}
                                        category={category}
                                    />
                                </Box>
                            </HideOnDesktop>
                        </>
                    )}
                </Box>

                {/* Variations & Quantity Selector */}
                {/* <HideOnMobile> */}
                <VStack
                    maxWidth="33%"
                    align="stretch"
                    spacing={8}
                    flex={1}
                    marginBottom={[16, 16, 16, 0, 0]}
                >
                    <HideOnMobile>
                        <Box
                            // marginRight="5vw"
                            display={['none', 'none', 'none', 'block']}
                        >
                            <PdpProductViewHeader
                                name={product?.name}
                                price={product?.price}
                                currency={product?.currency}
                                category={category}
                            />
                        </Box>
                    </HideOnMobile>

                    <HideOnMobile>
                        <VStack align="stretch" spacing={4}>
                            {showLoading ? (
                                <PdpSkeletonBeforeItemsLoaded />
                            ) : (
                                // <></>
                                <PdpSwatchGroupsAttributes
                                    showLoading={showLoading}
                                    variationAttributes={variationAttributes}
                                />
                            )}

                            <PdpSelectAllOptions
                                showLoading={showLoading}
                                showOptionsMessage={showOptionsMessage}
                            />
                        </VStack>
                    </HideOnMobile>

                    <HideOnMobile>
                        <Box display="block">
                            {/* Quantity Selector */}
                            <HStack marginTop="-60px" align="stretch" maxWidth={'350px'}>
                                <PdpQuantityPicker
                                    stepQuantity={stepQuantity}
                                    quantity={quantity}
                                    minOrderQuantity={minOrderQuantity}
                                    product={product}
                                />
                                {renderActionButtons()}
                            </HStack>
                        </Box>
                    </HideOnMobile>

                    <HideOnMobile>
                        <PdpAvailabilityAndSmallIconsDesktop
                            variantGot={variant}
                            stockLevel={product?.inventory?.stockLevel}
                        />
                    </HideOnMobile>
                </VStack>

                {/* </HideOnMobile> */}
            </Flex>
        </Flex>
    )
}

ProductView.propTypes = {
    product: PropTypes.object,
    category: PropTypes.array,
    isProductLoading: PropTypes.bool,
    isWishlistLoading: PropTypes.bool,
    addToCart: PropTypes.func,
    addToWishlist: PropTypes.func,
    updateCart: PropTypes.func,
    updateWishlist: PropTypes.func,
    showFullLink: PropTypes.bool,
    imageSize: PropTypes.oneOf(['sm', 'md'])
}

export default ProductView
