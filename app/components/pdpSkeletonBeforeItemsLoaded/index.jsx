/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {Skeleton} from '@chakra-ui/react'

const PdpSkeletonBeforeItemsLoaded = () => {
    return (
        <>
            {/* First Attribute Skeleton */}
            <Skeleton height={6} width={32} />
            <Skeleton height={20} width={64} />

            {/* Second Attribute Skeleton */}
            <Skeleton height={6} width={32} />
            <Skeleton height={20} width={64} />
        </>
    )
}

export default PdpSkeletonBeforeItemsLoaded
