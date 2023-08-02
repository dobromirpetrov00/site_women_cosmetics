/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {Button} from '@chakra-ui/react'
//import {useIntl} from 'react-intl'
import withRegistration from '../../hoc/with-registration'

//const PdpAddToWishlistButton = ({handleWishlistItem, isWishlistLoading, canAddToWishlist}) => {
const PdpAddToWishlistButton = () => {
    const ButtonWithRegistration = withRegistration(Button)
    //const intl = useIntl()

    return (
        <ButtonWithRegistration
            key="wishlist-button"
            // onClick={handleWishlistItem}
            // disabled={isWishlistLoading || !canAddToWishlist}
            // isLoading={isWishlistLoading}
            variant="wishlist"
        >
            ♥
        </ButtonWithRegistration>
    )
}

export default PdpAddToWishlistButton
