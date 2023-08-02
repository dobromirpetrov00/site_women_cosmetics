import React from 'react'
import {Box, Flex, Text, Link, useBreakpointValue, useMultiStyleConfig} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'

const FooterBottomContainer = () => {
    const style = useMultiStyleConfig('FooterBottomContainer')
    const floatRight = useBreakpointValue({lg: {float: 'right'}})

    return (
        <Box {...style.container}>
            <Flex {...style.flex}>
                <Text as="p" fontSize="15px">
                    © 2022 CosmeticsForYou
                </Text>
            </Flex>
            <Link mr="10px">Terms</Link>
            <Link mr="10px">Privacy </Link>
            <Link>SiteMap</Link>
            <Box
                sx={floatRight}
                p={{xsm: '25px 15px 25px 0'}}
                display={{xsm: 'block', lg: 'inline-block'}}
            >
                <Box
                    mr="15px"
                    width="72px"
                    height="17px"
                    bgImage={`url(${getAssetUrl('static/img/secure-payment.svg')})`}
                    {...style.logo}
                />
                <Box
                    width="36px"
                    height="12px"
                    bgImage={`url(${getAssetUrl('static/img/visa.svg')})`}
                    mr="15px"
                    {...style.logo}
                />
                <Box
                    width="62px"
                    height="12px"
                    bgImage={`url(${getAssetUrl('static/img/mastercard.svg')})`}
                    mr="15px"
                    {...style.logo}
                />
                <Box
                    width="42px"
                    height="12px"
                    bgImage={`url(${getAssetUrl('static/img/klarna.svg')})`}
                    {...style.logo}
                />
            </Box>
        </Box>
    )
}
export default FooterBottomContainer
