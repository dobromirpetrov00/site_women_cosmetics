/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        borderRadius: 'base'
    },
    variants: {
        solid: (props) =>
            props.colorScheme === 'blue'
                ? {
                      backgroundColor: 'blue.600',
                      color: 'white',
                      _hover: {bg: 'blue.700', _disabled: {bg: 'blue.300'}},
                      _active: {bg: 'blue.800'},
                      _disabled: {bg: 'blue.300'}
                  }
                : {},
        outline: (props) =>
            props.colorScheme === 'black'
                ? {color: 'gray.900', _hover: {bg: 'gray.50'}, borderColor: 'gray.200'}
                : {color: 'blue.600', _hover: {bg: 'gray.50'}},
        footer: {
            fontSize: 'sm',
            backgroundColor: 'gray.100',
            color: 'black',
            _hover: {bg: 'gray.200'},
            _active: {bg: 'gray.300'},
            paddingLeft: 3,
            paddingRight: 3
        },
        pdp: {
            marginRight: '5vw',
            width: '60%',
            maxWidth: '210px',
            color: 'white',
            backgroundColor: '#e4002b',
            borderRadius: '3px',
            borderStyle: 'none',
            borderWidth: '0px',
            fontSize: '14px',
            fontWeight: '400',
            fontWeight: 'bold',
            fontHeight: '46px',
            marginBottom: '0px',
            _hover: {bg: 'red.500', _disabled: {bg: 'red.800'}},
            _active: {bg: 'red.800'},
            _disabled: {bg: 'red.800'}
        },
        wishlist: {
            fontSize: '30px',
            color: 'black',
            borderWidth: '1px',
            borderRadius: '50%',
            borderColor: 'black'
            // _hover: {bg: 'gray.50'}
        },
        link: (props) => ({
            color: props.colorScheme === 'red' ? 'red.500' : 'blue.600',
            fontWeight: 'normal',
            minWidth: '1em',
            lineHeight: 4
        }),
        'menu-link': {
            color: 'black',
            justifyContent: 'flex-start',
            fontSize: 'sm',
            _hover: {bg: 'gray.50', textDecoration: 'none'},
            _activeLink: {
                bg: 'gray.50',
                textDecoration: 'none'
            }
        },
        'menu-link-mobile': {
            color: 'black',
            justifyContent: 'flex-start',
            fontSize: 'sm',
            _hover: {bg: 'gray.50', textDecoration: 'none'},
            _activeLink: {
                bg: 'gray.100',
                textDecoration: 'none'
            }
        },
        'search-link': {
            color: 'black',
            justifyContent: 'flex-start',
            fontSize: 'sm',
            _hover: {textDecoration: 'none'}
        }
    },
    sizes: {
        md: {
            height: 11,
            minWidth: 11
        }
    },
    defaultProps: {
        colorScheme: 'blue'
    }
}
