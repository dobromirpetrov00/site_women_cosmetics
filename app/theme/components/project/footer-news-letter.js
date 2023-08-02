/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
  baseStyle: {
      container: {
        p:{base:"20px", lg:'50px 50px 0 30px'},
        maxWidth:{base:'100%', xl:'570px'},
        display:{base:'block', lg:'inline-flex'},
      },
      formLabel: {
        fontSize:'15px',
        textTransform:'uppercase' ,
        margin:{xsm:0, lg:'0 0 24px'},
      },
      input: {
        bg:'white',
        placeholder:'Enter your Email Address',
        fontFamily:'Arial',
        fontSize:'13px',
        mt:'5px',
        mr:'6%',
        width:{xsm:'100%', md:'60%'},
      },
      button: {
        mt:'11px',
        bg:'white', 
        fontSize:'12px',
        width:{base:'180px', md:'30%'}, 
        height:'40px', 
        padding:'0', 
        border:'2px solid black',
      },
      bgImageStyle: {
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center', 
        width:'40px',
        height:'40px' ,
      }
  },
  parts: []
}
