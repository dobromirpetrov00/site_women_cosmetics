import React, {useRef} from 'react'
import {Box, Flex, Heading, Text, useMultiStyleConfig} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'

const FooterTopContainer = () => {
    const scrollRef = useRef()
    const scrollStyle = useMultiStyleConfig('ProductScroller')
    const style = useMultiStyleConfig('FooterTopContainer')

    return (
        <Box {...style.container}>
            <Flex ref={scrollRef} {...scrollStyle.scroll} margin="0 auto" maxWidth="1024px">
                <Box data-testid="product-scroller-item" {...style.scrollerItem}>
                    <Heading
                        bgImage={`url(${getAssetUrl('static/img/shipping.svg')})`}
                        {...style.image}
                    >
                        <Text as="title" display="none">
                            FREE STANDARD SHIPPING ABOVE €100 | 30 DAYS FREE RETURN
                        </Text>
                    </Heading>
                    <Heading {...style.heading}>Free Shipping</Heading>
                    <Text my="13px" lineHeight="1.66em" fontSize="13px">
                        Free standard shipping above €100
                    </Text>
                </Box>
                <Box data-testid="product-scroller-item" {...style.scrollerItem}>
                    <Heading
                        bgImage={`url(${getAssetUrl('static/img/track.svg')})`}
                        {...style.image}
                    >
                        <Text as="title" display="none">
                            FREE STANDARD SHIPPING ABOVE €100 | 30 DAYS FREE RETURN
                        </Text>
                    </Heading>
                    <Heading {...style.heading}>Delivery</Heading>
                    <Text {...style.text}>Delivery between 3-5 days after ordering</Text>
                </Box>
                <Box data-testid="product-scroller-item" {...style.scrollerItem}>
                    <Heading
                        bgImage={`url(${getAssetUrl('static/img/certificate.svg')})`}
                        {...style.image}
                    >
                        <Text as="title" display="none">
                            FREE STANDARD SHIPPING ABOVE €100 | 30 DAYS FREE RETURN
                        </Text>
                    </Heading>
                    <Heading {...style.heading}>Free Return</Heading>
                    <Text {...style.text}>Free Return 30 days</Text>
                </Box>
                <Box data-testid="product-scroller-item" {...style.scrollerItem}>
                    <Heading
                        bgImage={`url(${getAssetUrl('static/img/secured-payment.svg')})`}
                        {...style.image}
                    >
                        <Text as="title" display="none">
                            FREE STANDARD SHIPPING ABOVE €100 | 30 DAYS FREE RETURN
                        </Text>
                    </Heading>
                    <Heading {...style.heading}>Secured Payment</Heading>
                    <Text {...style.text}>
                        Payment procedure on our website is totally secured and can be done by card.
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}
export default FooterTopContainer
