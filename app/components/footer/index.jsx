/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Box, Stack} from '@chakra-ui/react'
import {useIntl} from 'react-intl'

import LinksList from '../links-list'

import FooterAccordion from '../footerAccordion'
import FooterNewsLetter from '../footerNewsLetter'
import FooterBottomContainer from '../footerBottomContainer'
import FooterTopContainer from '../footerTopContainer'

const Footer = () => {
    return (
        <Box as="footer">
            <FooterTopContainer />
            <Box bg="#e8eae2" pt="20px">
                <Stack maxWidth="1440px" margin="0 auto" width="100%">
                    <Stack direction={{base: 'column', xl: 'row'}}>
                        <FooterAccordion />
                        <FooterNewsLetter />
                    </Stack>
                    <FooterBottomContainer />
                </Stack>
            </Box>
        </Box>
    )
}

export default Footer

const LegalLinks = ({variant}) => {
    const intl = useIntl()
    return (
        <LinksList
            links={[
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.terms_conditions',
                        defaultMessage: 'Terms & Conditions'
                    })
                },
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.privacy_policy',
                        defaultMessage: 'Privacy Policy'
                    })
                },
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.site_map',
                        defaultMessage: 'Site Map'
                    })
                }
            ]}
            color="gray.200"
            variant={variant}
        />
    )
}
LegalLinks.propTypes = {
    variant: PropTypes.oneOf(['vertical', 'horizontal'])
}
