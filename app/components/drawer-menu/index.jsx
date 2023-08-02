/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useIntl} from 'react-intl'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
// Project Components
import NestedAccordion from '../nested-accordion'
import SocialIcons from '../social-icons'

// Components
import {
    Box,
    AccordionButton,
    AccordionItem,
    Button,
    Center,
    Divider,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Fade,
    IconButton,
    Flex,
    Spinner,
    Text,

    // Hooks
    useBreakpointValue,
    useMultiStyleConfig
} from '@chakra-ui/react'
import Link from '../../components/link'
// Icons
import {BrandLogo, LocationIcon, SignoutIcon, UserIcon} from '../icons'

// Others
import {noop} from '../../utils/utils'
import {getPathWithLocale, categoryUrlBuilder} from '../../utils/url'
import useCustomer from '../../commerce-api/hooks/useCustomer'
import LoadingSpinner from '../loading-spinner'

import useNavigation from '../../hooks/use-navigation'
import useSite from '../../hooks/use-site'

// The FONT_SIZES and FONT_WEIGHTS constants are used to control the styling for
// the accordion buttons as their current depth. In the below definition we assign
// values for depths 0 - 3, any depth deeper than that will use the default styling.
const FONT_SIZES = ['18px', '16px', '16px']
const FONT_WEIGHTS = ['400', '400', '400']
const PHONE_DRAWER_SIZE = 'xs'
const TABLET_DRAWER_SIZE = 'xs'

/**
 * This is the navigation component used for mobile devices (phone and tablet). It's
 * main usage is to navigate from one category to the next, but also homes links to
 * support, log in and out actions, as support links.
 */
const DrawerMenu = ({isOpen, onClose = noop, onLogoClick = noop, root}) => {
    const intl = useIntl()
    const customer = useCustomer()
    const navigate = useNavigation()
    const styles = useMultiStyleConfig('DrawerMenu')
    const drawerSize = useBreakpointValue({sm: PHONE_DRAWER_SIZE, md: TABLET_DRAWER_SIZE})
    const socialIconVariant = useBreakpointValue({base: 'flex', md: 'flex-start'})
    const site = useSite()
    const {l10n} = site
    const [showLoading, setShowLoading] = useState(false)
    const onSignoutClick = async () => {
        setShowLoading(true)
        await customer.logout()
        navigate('/login')
        setShowLoading(false)
    }

    const supportedLocaleIds = l10n?.supportedLocales.map((locale) => locale.id)
    const showLocaleSelector = supportedLocaleIds?.length > 1

    return (
        <Drawer isOpen={isOpen} onClose={onClose} placement="right" size={drawerSize}>
            <DrawerOverlay>
                <DrawerContent>
                    {/* Header Content */}
                    <DrawerHeader>
                        <IconButton
                            icon={<BrandLogo {...styles.logo} />}
                            variant="unstyled"
                            onClick={onLogoClick}
                        />

                        <DrawerCloseButton />
                    </DrawerHeader>

                    {/* Main Content */}
                    <DrawerBody>
                        {showLoading && <LoadingSpinner />}

                        {/* Category Navigation */}
                        {root ? (
                            <Fade in={true}>
                                <NestedAccordion
                                    allowMultiple={true}
                                    item={root}
                                    itemsKey="categories"
                                    itemsFilter="c_showInMenu"
                                    fontSizes={FONT_SIZES}
                                    fontWeights={FONT_WEIGHTS}
                                    urlBuilder={categoryUrlBuilder}
                                />
                            </Fade>
                        ) : (
                            <Center p="8">
                                <Spinner size="xl" />
                            </Center>
                        )}

                        {/* Application Actions */}
                        <Flex flexDirection="column" mt={4}>
                            <Link to="/" sx={{mr: '10px', mb: '15px'}}>
                                <Box
                                    {...styles.icons}
                                    sx={{
                                        bgImage: getAssetUrl('static/img/header-icons-sprite.svg'),
                                        backgroundPosition: '0px -16px'
                                    }}
                                />
                                My Account
                            </Link>
                            <Flex justify="space-between">
                                <Link to="/" {...styles.accountContainer}>
                                    <Text sx={{fontSize: '13px'}}>Already Registered?</Text>
                                    <Button {...styles.accountButton}>
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/" {...styles.accountContainer}>
                                    <Text sx={{fontSize: '13px'}}>New to Kari Traa?</Text>
                                    <Button {...styles.accountButton}>
                                        Register
                                    </Button>
                                </Link>
                            </Flex>
                            <Link to="/" sx={{mr: '10px', mt: '15px'}}>
                                <Box
                                    {...styles.icons}
                                    sx={{
                                        bgImage: getAssetUrl('static/img/header-icons-sprite.svg'),
                                        backgroundPosition: '0px -160px'
                                    }}
                                />
                                Help
                            </Link>
                        </Flex>
                        {/* Support Links */}
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}

DrawerMenu.displayName = 'DrawerMenu'

DrawerMenu.propTypes = {
    /**
     * The root category in your commerce cloud back-end.
     */
    root: PropTypes.object,
    /**
     * The opened state of the drawer.
     */
    isOpen: PropTypes.bool,
    /**
     * Function called when the drawer is dismissed.
     */
    onClose: PropTypes.func,
    /**
     * Function called when the drawer logo is clicked.
     */
    onLogoClick: PropTypes.func
}

export default DrawerMenu
