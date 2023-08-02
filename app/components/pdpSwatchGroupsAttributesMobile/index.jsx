import React, {useState} from 'react'
import {Box, Image, HStack, Switch, FormLabel} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
import SwatchGroup from '../swatch-group'
import Swatch from '../swatch-group/swatch'
import {useHistory} from 'react-router-dom'

const PdpSwatchGroupsAttributesMobile = (showLoading, variationAttributes) => {
    const [checked, setChecked] = useState(false)
    const history = useHistory()
    const varAttr = showLoading.variationAttributes

    let prSize = 0

    return (
        <>
            {/* Attribute Swatches */}
            {varAttr.map((variationAttribute) => {
                const handleAvailableCheck = () => {
                    setChecked(!checked)
                }

                const {id, name, selectedValue, values = []} = variationAttribute

                if (id === 'size') {
                    return (
                        <SwatchGroup
                            key={id}
                            onChange={(_, href) => {
                                if (!href) return
                                history.replace(href)
                            }}
                            variant="square"
                            value={selectedValue?.value}
                            //displayName={selectedValue?.name || ''}
                            label={name === 'Colors' ? 'Select colors' : 'Select sizes'}
                            style={{position: 'relative'}}
                        >
                            {name === 'Sizes' ? (
                                values.map(({href, name, image, value, orderable}) => {
                                    prSize += 50
                                    return (
                                        <Swatch
                                            key={value}
                                            href={href}
                                            disabled={!orderable}
                                            value={value}
                                            name={name}
                                            display={
                                                !orderable ? (checked ? 'none' : 'flex') : 'flex'
                                            }
                                        >
                                            <Box
                                                height="100%"
                                                width="100%"
                                                minWidth="32px"
                                                backgroundRepeat="no-repeat"
                                                backgroundSize="cover"
                                                backgroundColor={name.toLowerCase()}
                                            >
                                                <span>{prSize}ml</span>
                                            </Box>
                                        </Swatch>
                                    )
                                })
                            ) : (
                                <></>
                            )}
                        </SwatchGroup>
                    )
                }
            })}
        </>
    )
}

export default PdpSwatchGroupsAttributesMobile
