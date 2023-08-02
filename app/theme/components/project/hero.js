/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
  baseStyle: {
      image: {
        width: '100%',
        height: '100%',
      },
      link: {
        transition: 'all 0.3s',
        _hover: {opacity: 0.8},
      },
      heading: {
        as: 'h2',
        my: '25px', 
        color: 'white', 
        fontSize: '30px', 
        fontWeight: '400',
      },
      text: {
        my: '1em', 
        color: 'white',
        fontSize: '14px',
      },
      button: {
        as:'button', 
        transition:'all 0.3s', 
        _hover:{opacity:'0.8'}, 
        fontWeight:'700',
        p:'10px 38px',
        bg:"#F7F4EE", 
        mb:'15px !important',
        fontSize:'14px',
        textColor:'#7F0449',
      }
  },
  parts: []
}
