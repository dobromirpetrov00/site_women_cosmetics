/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {Button} from '@chakra-ui/react'
import {useIntl} from 'react-intl'

const PdpAddToCartButton = ({handleCartItem, showInventoryMessage, updateCart}) => {
    const intl = useIntl()

    return (
        <Button
            key="cart-button"
            onClick={handleCartItem}
            disabled={showInventoryMessage}
            variant="pdp"
        >
            {updateCart
                ? intl.formatMessage({
                      defaultMessage: 'Update',
                      id: 'product_view.button.update'
                  })
                : intl.formatMessage({
                      defaultMessage: 'Add to bag',
                      id: 'product_view.button.add_to_bag'
                  })}
        </Button>
    )
}

export default PdpAddToCartButton
