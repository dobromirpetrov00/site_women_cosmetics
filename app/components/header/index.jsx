/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {useIntl} from 'react-intl'
import {
    useMultiStyleConfig,
    Box,
    Flex,
    IconButton,
    Button,
    Text,
    useDisclosure,
    useMediaQuery,
    UnorderedList,
    ListItem,
    Image
} from '@chakra-ui/react'

import useBasket from '../../commerce-api/hooks/useBasket'
import useCustomer from '../../commerce-api/hooks/useCustomer'

import Link from '../link'
import Search from '../search'
import {BrandLogo, BasketIcon, HamburgerIcon} from '../icons'

import {noop} from '../../utils/utils'
import useNavigation from '../../hooks/use-navigation'
import LoadingSpinner from '../loading-spinner'

import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'

/**
 * The header is the main source for accessing
 * navigation, search, basket, and other
 * important information and actions. It persists
 * on the top of your application and will
 * respond to changes in device size.
 *
 * To customize the styles, update the themes
 * in theme/components/project/header.js
 * @param  props
 * @param   {func} props.onMenuClick click event handler for menu button
 * @param   {func} props.onLogoClick click event handler for menu button
 * @param   {object} props.searchInputRef reference of the search input
 * @param   {func} props.onMyAccountClick click event handler for my account button
 * @param   {func} props.onMyCartClick click event handler for my cart button
 * @return  {React.ReactElement} - Header component
 */
const Header = ({
    children,
    onMenuClick = noop,
    onMyAccountClick = noop,
    onLogoClick = noop,
    onMyCartClick = noop,
    onWishlistClick = noop,
    ...props
}) => {
    const intl = useIntl()

    const [showLoading, setShowLoading] = useState(false)
    // tracking if users enter the popover Content,
    // so we can decide whether to close the menu when users leave account icons
    const hasEnterPopoverContent = useRef()

    const styles = useMultiStyleConfig('Header')

    const [country, setCountry] = useState('Europe')
    const [countryBox, setCountryBox] = useState('none')

    const showCountryBox = () => {
        if (countryBox == 'none') {
            setCountryBox('block')
            return
        }
        setCountryBox('none')
    }
    return (
        <Box>
            <Flex {...styles.textHeader}>
                <Image
                    htmlWidth="18px"
                    htmlHeight="14px"
                    src={getAssetUrl('static/img/shipping-truck.svg')}
                    alt="car"
                />
                <Text sx={{ml: '5px', fontSize: '12px', lineHeight: '17px', color: '#000000'}}>
                    Free standard shipping above €100 | 30 days free return
                </Text>
            </Flex>
            <Flex
                sx={{height: '30px', px: '15px', display: {xsm: 'none', lg: 'flex'}}}
                justify="space-between"
            >
                <Flex align="center" sx={{}}>
                    <Button onClick={showCountryBox} {...styles.countryButton}>
                        Choose your country
                        <Box
                            {...styles.icon}
                            sx={{
                                bgImage: getAssetUrl('static/img/header-icons-sprite.svg'),
                                backgroundPosition: '0px -60px'
                            }}
                        />
                        {country}
                    </Button>
                    <Box
                        sx={{
                            display: `${countryBox}`
                        }}
                        {...styles.countryList}
                    >
                        <UnorderedList sx={{listStyleType: 'none', pl: '40px'}}>
                            <ListItem {...styles.countryListItem}>
                                <Link
                                    to="/"
                                    {...styles.icon}
                                    sx={{
                                        bgImage: getAssetUrl('static/img/header-icons-sprite.svg'),
                                        backgroundPosition: '0px -60px'
                                    }}
                                />
                                <Link to="/" {...styles.countryText}>
                                    Europe
                                </Link>
                            </ListItem>
                            <ListItem {...styles.countryListItem}>
                                <Link
                                    to="/"
                                    {...styles.icon}
                                    sx={{
                                        bgImage: getAssetUrl('static/img/header-icons-sprite.svg'),
                                        backgroundPosition: '0px -72px'
                                    }}
                                />
                                <Link to="/" {...styles.countryText}>
                                    United Kingdom
                                </Link>
                            </ListItem>
                            <ListItem {...styles.countryListItem}>
                                <Link
                                    to="/"
                                    {...styles.icon}
                                    sx={{
                                        bgImage: getAssetUrl('static/img/header-icons-sprite.svg'),
                                        backgroundPosition: '0px -84px'
                                    }}
                                />
                                <Link to="/" {...styles.countryText}>
                                    Norge
                                </Link>
                            </ListItem>
                            <ListItem {...styles.countryListItem}>
                                <Link
                                    to="/"
                                    {...styles.icon}
                                    sx={{
                                        bgImage: getAssetUrl('static/img/header-icons-sprite.svg'),
                                        backgroundPosition: '0px -96px'
                                    }}
                                />
                                <Link to="/" {...styles.countryText}>
                                    Sverige
                                </Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
                <Flex align="center" sx={{fontWeight: '400', fontSize: '12px', lineHeight: '12px'}}>
                    <Link to="/" sx={{mr: '10px'}}>
                        <Box
                            sx={{
                                bgImage: getAssetUrl('static/img/header-icons-sprite.svg'),
                                backgroundPosition: '0px -12px'
                            }}
                            {...styles.icon}
                        />
                        Login
                    </Link>
                    <Link to="/" sx={{ml: '10px'}}>
                        <Box
                            sx={{
                                bgImage: getAssetUrl('static/img/header-icons-sprite.svg'),
                                backgroundPosition: '0px -120px'
                            }}
                            {...styles.icon}
                        />
                        Help
                    </Link>
                </Flex>
            </Flex>

            <Box {...styles.container} {...props}>
                <Box>
                    {showLoading && <LoadingSpinner wrapperStyles={{height: '100vh'}} />}
                    <Flex wrap="wrap" justify="space-between" flexWrap="inherit">
                        <IconButton
                            aria-label={intl.formatMessage({
                                id: 'header.button.assistive_msg.logo',
                                defaultMessage: 'Logo'
                            })}
                            icon={<BrandLogo {...styles.logo} />}
                            variant="unstyled"
                            onClick={onLogoClick}
                        />
                        <Box {...styles.bodyContainer}>{children}</Box>
                        <Flex>
                            <Box {...styles.searchContainer}>
                                <Search
                                    placeholder={intl.formatMessage({
                                        id: 'header.field.placeholder.search_for_products',
                                        defaultMessage: 'Search for products...'
                                    })}
                                    {...styles.search}
                                />
                            </Box>

                            <IconButton
                                aria-label={intl.formatMessage({
                                    id: 'header.button.assistive_msg.my_cart',
                                    defaultMessage: 'My cart'
                                })}
                                icon={
                                    <BasketIcon
                                        sx={{width: '18px', height: '20px', verticalAlign: 'sub'}}
                                    />
                                }
                                sx={{height: 'auto'}}
                                variant="unstyled"
                                onClick={onMyCartClick}
                            />
                            <IconButton
                                aria-label={intl.formatMessage({
                                    id: 'header.button.assistive_msg.menu',
                                    defaultMessage: 'Menu'
                                })}
                                icon={<HamburgerIcon />}
                                variant="unstyled"
                                display={{xl: 'none'}}
                                onClick={onMenuClick}
                            />
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

Header.propTypes = {
    children: PropTypes.node,
    onMenuClick: PropTypes.func,
    onLogoClick: PropTypes.func,
    onMyAccountClick: PropTypes.func,
    onWishlistClick: PropTypes.func,
    onMyCartClick: PropTypes.func,
    searchInputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({current: PropTypes.elementType})
    ])
}

export default Header
