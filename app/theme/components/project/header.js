/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        textHeader: {
            height: '30px',
            backgroundColor: '#e8eae2',
            px: '5px',
            justify: 'center',
            align: 'center'
        },
        countryButton: {
            variant: 'unstyled',
            _hover: {borderBottom: '2px solid red'},
            borderRadius: 0,
            height: '100%',
            fontWeight: '400',
            fontSize: '12px',
            pl: {base: '0px', lg: '10px'},
            lineHeight: '12px',
            color: '#695a5d'
        },
        countryList: {
            position: 'absolute',
            backgroundColor: 'white',
            top: '60px',
            left: '-15px',
            zIndex: 1,
            padding: '17px 25px 25px',
            boxShadow: '0 2px 3px 0 rgb(0 0 0 / 10%)'
        },
        countryListItem: {
            padding: '5px'
        },
        countryText: {
            fontSize: '12px',
            lineHeight: '12px'
        },
        countryIcon: {
            width: '12px',
            height: '12px'
        },
        icon: {
            width: '12px',
            height: '12px',
            mx: '5px',
            display: 'inline-block'
        },
        container: {
            height: 'full',
            minWidth: 'xs',
            width: 'full',
            boxShadow: 'base',
            backgroundColor: 'white',
            padding: '15px'
        },
        searchContainer: {
            order: 'inherit',
            width: {xsm: 28, sm: 60},
            marginRight: [0, 0, 0, 4]
        },
        bodyContainer: {
            display: {xsm: 'none', xl: 'block'}
        },
        logo: {
            width: '100%',
            height: '100%',
            pl: {base: '0px', lg: '15px'}
        }
    },
    parts: []
}
