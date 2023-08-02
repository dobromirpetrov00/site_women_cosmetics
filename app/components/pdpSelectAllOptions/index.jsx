/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {useIntl} from 'react-intl'
import {Box, Text, Fade} from '@chakra-ui/react'

const PdpSelectAllOptions = ({showLoading, showOptionsMessage}) => {
    const intl = useIntl()

    return (
        <Box>
            {!showLoading && showOptionsMessage && (
                <Fade in={true}>
                    <Text color="orange.600" fontWeight={600} marginBottom={8}>
                        {intl.formatMessage({
                            defaultMessage: 'Please select all your options above'
                        })}
                    </Text>
                </Fade>
            )}
        </Box>
    )
}

export default PdpSelectAllOptions
