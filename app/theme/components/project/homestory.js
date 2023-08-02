/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
  baseStyle: {
      image:{
        width:'100%',
        height: '100%'
      },
      heading:{
        as:'h2',
        my:'25px',
        fontSize:'30px',
        fontWeight: 400,
      },
      text:{
        as:'p',
        fontSize:'14px',
        py:'14px',
      },
      button:{
        as:'button',
        transition:'all 0.3s' ,
        _hover:{opacity:'0.8'}, 
        fontWeight:700,
        p:'10px 38px',
        fontSize:'14px',
        mb:'15px !important',
      }
  },
  parts: ['image', 'heading', 'text', 'button']
}
