/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import QuantityPicker from '../quantity-picker'
import {useProduct} from '../../hooks'

const PdpQuantityPickerMobile = ({stepQuantity, quantity, minOrderQuantity, product}) => {
    const {setQuantity} = useProduct(product)
    return (
        <>
            <label htmlFor="quantity-mobile">&#8203;</label>
            <QuantityPicker
                id="quantity-mobile"
                step={stepQuantity}
                value={quantity}
                min={minOrderQuantity}
                onChange={(stringValue, numberValue) => {
                    if (numberValue >= 0) {
                        setQuantity(numberValue)
                    } else if (stringValue === '') {
                        setQuantity(stringValue)
                    }
                }}
                onBlur={(e) => {
                    const value = e.target.value
                    if (parseInt(value) < 0 || value === '') {
                        setQuantity(minOrderQuantity)
                    }
                }}
                onFocus={(e) => {
                    e.target.select()
                }}
            />
        </>
    )
}

export default PdpQuantityPickerMobile
