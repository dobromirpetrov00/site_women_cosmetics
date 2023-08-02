/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        switch: {
            position: 'relative',
            display: 'inline-block',
            width: '60px',
            height: '34px'
        },
        switchInput: {
            opacity: '0',
            width: '0',
            height: '0',
            _checked: {
                slider: {
                    backgroundColor: '#e4002b',
                    _before: {
                        '-webkit-transform': 'translateX(26px)',
                        '-ms-transform': 'translateX(26px)',
                        transform: 'translateX(26px)'
                    }
                }
            },
            _focus: {
                slider: {
                    'box-shadow': '0 0 1px #2196F3'
                }
            }
        },
        slider: {
            position: 'absolute',
            cursor: 'pointer',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'black',
            '-webkit-transition': '.4s',
            transition: '.4s',
            _before: {
                position: 'absolute',
                content: '',
                height: '26px',
                width: '26px',
                left: '4px',
                bottom: '4px',
                backgroundColor: 'white',
                '-webkit-transition': '.4s',
                transition: '.4s'
            }
        },
        round: {
            borderRadius: '34px',
            _before: {
                borderRadius: '50%'
            }
        }
    },
    parts: ['switch', 'switchInput', 'slider', 'round']
}
