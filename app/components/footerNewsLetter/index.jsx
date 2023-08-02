/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Text,
    Input,
    Stack,
    Checkbox,
    Link,
    useMultiStyleConfig
} from '@chakra-ui/react'

const FooterNewsLetter = () => {
    const style = useMultiStyleConfig('FooterNewsLetter')
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const [input, setInput] = useState('')
    const [isEmpty, setEmptyError] = useState(false)

    const handleInputChange = (e) => {
        setInput(e.target.value)
        if (e.target.value === '') {
            setEmptyError(true)
        } else {
            setEmptyError(false)
        }
    }

    return (
        <Box {...style.container}>
            <Box position="relative">
                <FormControl
                    id="emailFormControl"
                    isRequired
                    isInvalid={(input !== '' && !emailRegex.test(input)) || isEmpty}
                >
                    <FormLabel {...style.formLabel}>Newsletter</FormLabel>
                    <Text as="p" fontSize="15px">
                        Sign up for emails and get special news and offers from CosmeticsForYou.
                    </Text>
                    <Input
                        id="email"
                        type="email"
                        value={input}
                        onInput={handleInputChange}
                        {...style.input}
                    />
                    <Box as="button" {...style.button}>
                        Join now
                    </Box>
                    {input !== '' && !emailRegex.test(input) && (
                        <FormErrorMessage>Enter a valid Email address</FormErrorMessage>
                    )}
                    {isEmpty && <FormErrorMessage>Email is required</FormErrorMessage>}
                </FormControl>
                <Stack direction="row" margin="48px 24px 48px 0px">
                    <Checkbox id="checkbox" border="black" />
                    <Text as="label" htmlFor="checkbox" fontSize="12px">
                        Yes, I would like to get newsletters from CosmeticsForYou. You can
                        unsubscribe any time.
                    </Text>
                </Stack>

                <Text as="h2" textTransform="uppercase" fontSize="15px" fontWeight="bold">
                    Follow us
                </Text>
                <Stack direction="row" justify={{base: 'center', lg: 'start'}} py="12px">
                    <Link>
                        <Box
                            {...style.bgImageStyle}
                            bgImage={`url(${getAssetUrl('static/img/facebook.svg')})`}
                        />
                    </Link>
                    <Link>
                        <Box
                            {...style.bgImageStyle}
                            bgImage={`url(${getAssetUrl('static/img/instagram.svg')})`}
                        />
                    </Link>
                    <Link>
                        <Box
                            {...style.bgImageStyle}
                            bgImage={`url(${getAssetUrl('static/img/youtube.svg')})`}
                        />
                    </Link>
                </Stack>
            </Box>
        </Box>
    )
}

export default FooterNewsLetter
