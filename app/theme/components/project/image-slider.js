/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        title: {
            as: 'h2',
            fontSize: 'xl',
            textAlign: 'center'
        },
        scroll: {
            direction: 'row',
            overflowX: 'scroll',
            overflow: {sm: 'auto', xl: 'hidden'}
        },
        productTileContainer: {
            flex: '0 0 auto',
            width: {
                xsm: '320px',
                sm: '370px',
                md: '380px',
                lg: '340px',
                xl: '360px'
            },
            ms: '0 !important'
        },
        leftArrow: {
            display: {
                base: 'none',
                xl: 'block'
            },
            position: 'absolute',
            top: '50%',
            left: '0px',
            transform: 'translateY(-50%)'
        },
        rightArrow: {
            display: {
                base: 'none',
                xl: 'block'
            },
            position: 'absolute',
            top: '50%',
            right: '0px',
            transform: 'translateY(-50%)'
        }
    },
    parts: ['title', 'scroll', 'productTileContainer', 'leftArrow', 'rightArrow']
}
