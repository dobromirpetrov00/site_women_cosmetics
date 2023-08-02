/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        container: {},
        heading: {
            borderBottom: '1px solid #f3f3f4',
            fontFamily:'FK Grotesk Regular, Arial'
        },
        nestedAccordion: {
            paddingLeft: 4
        },
        internalButton: {
            height:'60px',
            margin: '10px 15px'
        },
        internalButtonIcon: {
            color: 'grey',
            marginRight: 2
        },
        text: {
            padding:'0 10px 0 30px'
        }
    },
    parts: ['container', 'nestedAccordion', 'internalButton', 'leafButtonIcon', 'leafButton']
}
