import React, {useRef} from 'react'
import {Box, Flex, Heading, Text, useMultiStyleConfig, Image, Stack} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
import DynamicImage from '../dynamic-image'

const PdpImageSlider = () => {
    const scrollStyle = useMultiStyleConfig('ImageSlider')

    return (
        <Stack {...scrollStyle.scroll}>
            <Box {...scrollStyle.productTileContainer}>
                <DynamicImage
                    widths={{xs: '405px', sm: '455px', md: '468px'}}
                    imageProps={{
                        // width: {xs: '405px', sm: '455px', md: '468px'},
                        height: {xs: '468px', sm: '531px', md: '585px'},
                        alt: 'Main picture'
                    }}
                    sx={{
                        minHeight: '100%',
                        marginLeft: '-30px'
                    }}
                    src={getAssetUrl('static/img/pr3.jpg')}
                />
            </Box>
        </Stack>
    )
}
export default PdpImageSlider
