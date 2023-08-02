/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        imgWrapper: {
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap'
        },
        hoverZoom: {
            transition: 'all 0.3s ease 0s',
            // width: '100%',
            height: 'auto',
            width: '50%',
            display: 'block',
            maxWidth: '440px',
            _hover: {
                transform: 'scale(1.2)'
            }
        }
    },
    parts: ['imgWrapper', 'hoverZoom']
}
