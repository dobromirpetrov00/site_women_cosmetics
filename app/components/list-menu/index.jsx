/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {Fragment, useRef, forwardRef} from 'react'
import PropTypes from 'prop-types'
import {useIntl} from 'react-intl'
import {Link as RouteLink} from 'react-router-dom'

// Project Components
import LinksList from '../links-list'

// Components
import {
    Box,
    Container,
    SimpleGrid,
    Flex,
    Stack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Center,
    Spinner,
    Heading,
    // Hooks
    useMultiStyleConfig,
    useTheme,
    useDisclosure
} from '@chakra-ui/react'
import Link from '../link'
// Others
import {categoryUrlBuilder} from '../../utils/url'

const MAXIMUM_NUMBER_COLUMNS = 5

const ChevronIconTrigger = forwardRef(function ChevronIconTrigger(props, ref) {
    return <Box {...props} ref={ref}></Box>
})

const ListMenuTrigger = ({item, name, isOpen, onOpen, onClose, hasItems}) => {
    const theme = useTheme()
    const {baseStyle} = theme.components.ListMenu

    const keyMap = {
        Escape: () => onClose(),
        Enter: () => onOpen()
    }

    return (
        <Box {...baseStyle.listMenuTriggerContainer} sx={{fontFamily: '"Five Year Later", Arial'}}>
            <Link
                sx={{
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    _hover: {color: 'red', borderBottom: '2px solid red'}
                }}
                as={RouteLink}
                to={categoryUrlBuilder(item)}
                onMouseOver={onOpen}
                {...baseStyle.listMenuTriggerLink}
                {...(hasItems ? {name: name + ' __'} : {name: name})}
                {...(!hasItems ? baseStyle.listMenuTriggerLinkWithIcon : {})}
                {...(isOpen ? baseStyle.listMenuTriggerLinkActive : {})}
            >
                {name}
            </Link>

            {hasItems && (
                <Link
                    as={RouteLink}
                    to={'#'}
                    onMouseOver={onOpen}
                    onKeyDown={(e) => {
                        keyMap[e.key]?.(e)
                    }}
                    {...baseStyle.listMenuTriggerLinkIcon}
                >
                    <PopoverTrigger>
                        <ChevronIconTrigger {...baseStyle.selectedButtonIcon} />
                    </PopoverTrigger>
                </Link>
            )}
        </Box>
    )
}
ListMenuTrigger.propTypes = {
    item: PropTypes.object,
    name: PropTypes.string,
    isOpen: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    hasItems: PropTypes.bool
}

const ListMenuContent = ({maxColumns, items, itemsKey, onClose, initialFocusRef}) => {
    const styles = useMultiStyleConfig('ListMenu')
    const theme = useTheme()
    const {baseStyle} = theme.components.ListMenu
    const {locale} = useIntl()
    let newItems = []
    let linkItems = []

    items.map((item, index) => {
        if (index > 12) return
        const {id, name} = item
        const items = item[itemsKey]

        const heading = {
            href: categoryUrlBuilder(item, locale),
            text: name,
            styles: {
                fontSize: 'md',
                marginBottom: 2
            }
        }

        const links = items
            ? items.map((item, index) => {
                  const {name} = item
                  return {
                      href: categoryUrlBuilder(item, locale),
                      text: name,
                      styles: {
                          fontSize: 'md',
                          paddingTop: 3,
                          paddingBottom: 3
                      }
                  }
              })
            : []
        if (links.length > 0) {
            linkItems.push(
                <LinksList
                    headingProps={{
                        mb: '20px',
                        fontSize: '16',
                        fontFamily: 'FK Grotesk Regular, Arial',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        color: 'black'
                    }}
                    key={id}
                    color={'#695a5d'}
                    heading={heading}
                    links={links}
                    onLinkClick={onClose}
                    {...(index === 0 ? {headingLinkRef: initialFocusRef} : {})}
                />
            )
            return
        }
        newItems.push(
            <LinksList
                headingProps={{fontWeight: '400'}}
                key={id}
                color={'#695a5d'}
                heading={heading}
                links={links}
                onLinkClick={onClose}
                {...(index === 0 ? {headingLinkRef: initialFocusRef} : {})}
            />
        )
    })

    return (
        <PopoverContent data-testid="popover-menu" {...baseStyle.popoverContent}>
            <PopoverBody>
                <Container as={Stack} {...baseStyle.popoverContainer} sx={{padding: '40px 80px'}}>
                    <SimpleGrid
                        spacing={8}
                        justifyContent={'left'}
                        gridTemplateColumns={`repeat(${
                            items.length > maxColumns ? maxColumns : items.length
                        }, minmax(0, 21%))`}
                        marginInlineStart={{lg: '68px', xl: '96px'}}
                    >
                        <Box {...styles.category}>
                            <Heading {...styles.heading}>Shop by Category</Heading>
                            {newItems.map((item) => item)}
                        </Box>
                        {linkItems.length > 0 && (
                            <Box {...styles.category}>{linkItems.map((item) => item)}</Box>
                        )}
                    </SimpleGrid>
                </Container>
            </PopoverBody>
        </PopoverContent>
    )
}
ListMenuContent.propTypes = {
    items: PropTypes.array,
    maxColumns: PropTypes.number,
    itemsKey: PropTypes.string,
    onClose: PropTypes.func,
    initialFocusRef: PropTypes.object
}

const ListMenuPopover = ({items, item, name, itemsKey, maxColumns}) => {
    const initialFocusRef = useRef()
    const {isOpen, onClose, onOpen} = useDisclosure()
    return (
        <Box onMouseLeave={onClose}>
            <Popover
                isLazy
                placement={'bottom-start'}
                initialFocusRef={initialFocusRef}
                onOpen={onOpen}
                onClose={onClose}
                isOpen={isOpen}
                variant="fullWidth"
            >
                <Fragment>
                    <ListMenuTrigger
                        item={item}
                        name={name}
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                        hasItems={!!items}
                    />
                    {items && (
                        <ListMenuContent
                            items={items}
                            itemsKey={itemsKey}
                            initialFocusRef={initialFocusRef}
                            onClose={onClose}
                            maxColumns={maxColumns}
                        />
                    )}
                </Fragment>
            </Popover>
        </Box>
    )
}

ListMenuPopover.propTypes = {
    items: PropTypes.array,
    item: PropTypes.object,
    name: PropTypes.string,
    maxColumns: PropTypes.number,
    itemsKey: PropTypes.string
}

/**
 * This is the navigation component used for desktop devices. Holds the site navigation,
 * providing users with a way to access all product categories and other important pages.
 * The submenus are open when the user moves the mouse over the trigger and for A11y when
 * users use the keyboard Tab key to focus over the chevron icon and press Enter.
 *
 * @param root The root category in your commerce cloud back-end.
 * @param maxColumns The maximum number of columns that we want to use per row inside the ListMenu.
 */
const ListMenu = ({root, maxColumns = MAXIMUM_NUMBER_COLUMNS}) => {
    const theme = useTheme()
    const {baseStyle} = theme.components.ListMenu

    const itemsKey = 'categories'
    const items = root ? root[itemsKey] : false

    const filter = (item) => !!item['c_showInMenu']
    return (
        <nav aria-label="main">
            <Flex {...baseStyle.container}>
                {items ? (
                    <Stack direction={'row'} {...baseStyle.stackContainer}>
                        {items.filter(filter).map((item) => {
                            const {id, name} = item
                            //const items = item[itemsKey]

                            // Apparel, Accessories, Footwear , Outlet, Sustainability, Collections

                            if (name === 'Apparel') {
                                return (
                                    <ListMenuPopover
                                        key={id}
                                        maxColumns={maxColumns}
                                        item={item}
                                        name="New collections"
                                        //items={items}
                                        itemsKey={itemsKey}
                                    />
                                )
                            }

                            if (name === 'Accessories') {
                                return (
                                    <ListMenuPopover
                                        key={id}
                                        maxColumns={maxColumns}
                                        item={item}
                                        name="Old but gold"
                                        //items={items}
                                        itemsKey={itemsKey}
                                    />
                                )
                            }

                            if (name === 'Footwear ') {
                                return (
                                    <ListMenuPopover
                                        key={id}
                                        maxColumns={maxColumns}
                                        item={item}
                                        name="For Men"
                                        //items={items}
                                        itemsKey={itemsKey}
                                    />
                                )
                            }

                            if (name === 'Sustainability') {
                                return (
                                    <ListMenuPopover
                                        key={id}
                                        maxColumns={maxColumns}
                                        item={item}
                                        name="For Women"
                                        //items={items}
                                        itemsKey={itemsKey}
                                    />
                                )
                            }
                        })}
                    </Stack>
                ) : (
                    <Center p="2">
                        <Spinner size="lg" />
                    </Center>
                )}
            </Flex>
        </nav>
    )
}

ListMenu.displayName = 'ListMenu'

ListMenu.propTypes = {
    /**
     * The root category in your commerce cloud back-end.
     */
    root: PropTypes.object,
    /**
     * The maximum number of columns that we want to use per row in the menu.
     */
    maxColumns: PropTypes.number
}

export default ListMenu
