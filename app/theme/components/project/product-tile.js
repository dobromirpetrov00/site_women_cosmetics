/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        container: {
            margin: '0 43px',
        },
        favIcon: {
            position: 'absolute',
            variant: 'unstyled',
            top: 2,
            right: 2
        },
        imageWrapper: {
            position: 'relative',
            marginBottom: 2
        },
        image: {
            ratio: 1,
            transition:'all 0.3s',
            _hover: {opacity: 0.8}

        },
        price: {
            fontSize: '14px'
        },
        title: {
            fontWeight: 600,
            transition:'all 0.3s',
            _hover:{color:'red', opacity:'0.8'},
            textDecoration:'none !important'
        },
        variantCircles:{
            width: "12px",
            height: "12px",
            borderRadius:  "50%",
            position:  "relative",
            top:   "3px",
            left:  "3px",
        },
        rating: {},
        variations: {}
    },
    parts: ['container', 'imageWrapper', 'image', 'price', 'title', 'rating', 'variations']
}
