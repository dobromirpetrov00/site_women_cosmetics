/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {  
        logo: {
            width: 12,
            height: 8
        },
        actions: {
            paddingLeft: 4,
            paddingRight: 4
        },
        actionsItem: {
            paddingTop: 3,
            paddingBottom: 3
        },
        signout: {
            width: '100%',
            paddingLeft: 8,
            paddingTop: 2,
            paddingBottom: 2,
            _focus: {
                borderRadius: 0,
                boxShadow: 'outline'
            }
        },
        signoutText: {
            marginLeft: 2,
            fontSize: 14,
            fontWeight: 'normal'
        },
        accountContainer: {
            width:'calc(50% - 5px)'
        },
        icons: {
            mx:'5px',
            display:'inline-block', 
            backgroundRepeat:'no-repeat',
            backgroundSize:'16px 176px',
            width:'16px',
            height:'16px'
        },
        accountButton: {
            variant:'outline',
            width: '100%',
            color: 'black'
        }
    },
    parts: [
        'actions',
        'actionsItem',
        'container',
        'icon',
        'localeSelector',
        'socials',
        'socialsItem',
        'signout',
        'accountContainer',
        'icons',
        'accountButton',
    ]
}
