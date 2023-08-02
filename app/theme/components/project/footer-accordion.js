/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
  baseStyle: {
      accordion: {
        width:{base: '100%', lg: '60%'},
        display:{base: 'block', lg: 'inline-block'},
      },
      accordionItem: {
        margin:"0 20px",
        border:"none",
        display:{base: 'block', lg: 'inline-grid'},
        borderTop:{base:'0.5px solid rgba(151, 153, 155, 0.3)', lg: 'none'},
        borderBottom:{base:'0.5px solid rgba(151, 153, 155, 0.3)', lg: 'none'}
      },
      text: {
        flex:"1",
        textAlign:"Left",
        fontSize:"15px",
        textTransform:"uppercase",
        fontWeight:"bold",
        color:"black",
      },
      listItem: {
        fontSize:"15px",
        margin:"0",
      },
      link: {
        lineHeight:"30px",
        _hover:{
          textDecoration: 'none',
          color: '#ccc',
          opacity: 0.8
        }
      }
  },
  parts: []
}
