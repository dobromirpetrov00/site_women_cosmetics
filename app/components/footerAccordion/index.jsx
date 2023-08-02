import React, {useEffect, useState} from 'react'
import {
    useBreakpointValue,
    Accordion,
    AccordionItem,
    AccordionPanel,
    AccordionButton,
    AccordionIcon,
    Text,
    List,
    ListItem,
    Link,
    Box,
    useMultiStyleConfig
} from '@chakra-ui/react'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
//this must be out of the function to work properly.
const breakpoints = {
    base: [],
    lg: [0, 1, 2]
}

const FooterAccordion = () => {
    const style = useMultiStyleConfig('FooterAccordion')
    const defaultIndicesForBreakpoint = useBreakpointValue(breakpoints)
    const [indices, setIndices] = useState(defaultIndicesForBreakpoint)

    useEffect(() => {
        setIndices(defaultIndicesForBreakpoint)
    }, [defaultIndicesForBreakpoint])

    return (
        <Accordion
            allowMultiple
            allowToggle
            index={indices}
            onChange={setIndices}
            {...style.accordion}
        >
            <AccordionItem padding={{base: '18px 0', xl: '50px 0 0 95px'}} {...style.accordionItem}>
                <h2>
                    <AccordionButton padding="0">
                        <Text {...style.text}>About CosmeticsForYou</Text>
                        <AccordionIcon display={{base: 'block', lg: 'none'}} />
                    </AccordionButton>
                </h2>
                <AccordionPanel px="0">
                    <List py={4}>
                        <ListItem {...style.listItem}>
                            <Link {...style.link}>Our Story</Link>
                        </ListItem>
                        <ListItem {...style.listItem}>
                            <Link {...style.link}>
                                <Text>Social Responsibility</Text>
                            </Link>
                        </ListItem>
                        <ListItem {...style.listItem}>
                            <Link {...style.link}>Blog</Link>
                        </ListItem>
                        <ListItem {...style.listItem}>
                            <Link {...style.link}>SiteMap</Link>
                        </ListItem>
                        <ListItem {...style.listItem}>
                            <Link {...style.link}>Affiliate</Link>
                        </ListItem>
                    </List>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem
                padding={{base: '18px 0', xl: '50px 60px 0 60px'}}
                {...style.accordionItem}
            >
                <h2>
                    <AccordionButton padding="0">
                        <Text {...style.text}>Customer Service</Text>
                        <AccordionIcon display={{base: 'block', lg: 'none'}} />
                    </AccordionButton>
                </h2>
                <AccordionPanel px="0">
                    <List py={4}>
                        <ListItem {...style.listItem}>
                            <Link {...style.link}>Help</Link>
                        </ListItem>
                        <ListItem {...style.listItem}>
                            <Link {...style.link}>Shipping Information</Link>
                        </ListItem>
                        <ListItem {...style.listItem}>
                            <Link {...style.link}>Return & Exchanges</Link>
                        </ListItem>
                        <ListItem {...style.listItem}>
                            <Link {...style.link}>Order Status</Link>
                        </ListItem>
                        <ListItem {...style.listItem}>
                            <Link {...style.link}>Size Chart</Link>
                        </ListItem>
                    </List>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem padding="18px 0" {...style.accordionItem}>
                <h2>
                    <AccordionButton padding="0">
                        <Text {...style.text}>Contact</Text>
                        <AccordionIcon display={{base: 'block', lg: 'none'}} />
                    </AccordionButton>
                </h2>
                <AccordionPanel px="0">
                    <List py={4}>
                        <ListItem {...style.listItem}>
                            <Link {...style.link}>
                                <Box
                                    sx={{display: 'inline-block', height: '15px', width: '23px'}}
                                    backgroundRepeat="no-repeat"
                                    bgImage={getAssetUrl('static/img/envelope.svg')}
                                />
                                Contact us
                            </Link>
                        </ListItem>
                    </List>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
export default FooterAccordion
