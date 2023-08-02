/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Box, Heading, Image, Text, useMultiStyleConfig} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const Hero = ({title, img, actions, ...props}) => {
    const styles = useMultiStyleConfig('Hero')
    const {src, alt} = img

    return (
        <Box marginBottom="10" {...props}>
            <Box width="full" bg="pink.1">
                <Box {...styles.link}>
                    <Link to="/category/60797">
                        <Image
                            {...styles.image}
                            src={src}
                            alt={alt}
                            htmlWidth="1440px"
                            htmlHeight="700"
                        />
                    </Link>
                </Box>
                <Box align="center">
                    <Heading {...styles.heading}>{title}</Heading>
                    <Text {...styles.text}>Important accessory for everyone</Text>
                    <Box {...styles.button}>Shop now</Box>
                </Box>
            </Box>
        </Box>
    )
}

Hero.displayName = 'Hero'

Hero.propTypes = {
    /**
     * Hero component image
     */
    img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    /**
     * Hero component main title
     */
    title: PropTypes.string,
    /**
     * Call to action component(s)
     */
    actions: PropTypes.element
}

export default Hero
