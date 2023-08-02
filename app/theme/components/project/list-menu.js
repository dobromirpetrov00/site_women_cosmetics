/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        container: {
            minWidth: 'xs',
            width: 'full',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: {base:0,'2xl':'210px'},
            display: {base: 'none', lg: 'flex'}
        },
        stackContainer: {
            whiteSpace: 'nowrap',
            flexWrap: 'wrap'
        },
        popoverContent: {
            top:'25px',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: 0, 
            minWidth: '100%',
            borderRadius: 0,
            position: 'absolute'
        },
        popoverContainer: {
            paddingTop: 0,
            paddingBottom: 8,
            maxWidth: 'container.xxxl'
        },
        listMenuTriggerContainer: {
            display: 'flex',
            alignItems: 'center'
        },
        listMenuTriggerLink: {
            display: 'block',
            whiteSpace: 'nowrap',
            position: 'relative',
            paddingTop: 3,
            paddingRight: 1,
            paddingBottom: 2,
            paddingLeft: 1,
            marginLeft: 3,
            _hover: {
                textDecoration: 'none'
            }
        },
        listMenuTriggerLinkWithIcon: {marginRight: 3},
        listMenuTriggerLinkActive: {
            textDecoration: 'none',
            _before: {
                position: 'absolute',
                content: 'attr(name)',
                height: '2px',
                color: 'transparent',
                bottom: '0px'
            }
        },
        listMenuTriggerLinkIcon: {
            marginTop: 3,
            marginRight: 3,
            marginBottom: 2,
            marginLeft: 0,
            _hover: {
                textDecoration: 'none'
            }
        },
        heading: {
            mb:'20px',
            fontSize:'16',
            fontFamily:'FK Grotesk Regular, Arial',
            textTransform:'uppercase'
        },
        category: {
            borderLeft: '1px solid #F3F3F4',
            pl:'30px',
            mb:'40px'
        }
    },
    parts: [
        'container',
        'stackContainer',
        'popoverContent',
        'popoverContainer',
        'listMenuTriggerContainer',
        'listMenuTriggerLink',
        'listMenuTriggerLinkActive',
        'listMenuTriggerIcon'
    ]
}
