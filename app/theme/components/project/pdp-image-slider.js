/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        container: {
            position: 'relative',
            'data-testid': 'product-scroller',
            bgColor: '#fff',
            py: '45px',
            maxWidth: '100%',
            color: '#695a5d',
            borderTop: '2px solid #f9f9f9'
        },
        scrollerItem: {
            textAlign: 'center',
            padding: '0 4.5%',
            flex: '0 0 auto',
            width: '256px',
            ms: '0 !important'
        },
        image: {
            backgroundRepeat: 'no-repeat',
            height: '59px',
            backgroundPosition: 'center'
        },
        heading: {
            fontSize: '13px',
            textTransform: 'uppercase',
            margin: '5px 0 10px',
            textDecoration: 'uppercase',
            color: '#000',
            fontWeight: '700'
        },
        text: {
            my: '13px',
            lineHeight: '1.66em',
            fontSize: '13px'
        },
        rating: {},
        variations: {}
    },
    parts: []
}
