import React from 'react';
import {Grid, GridItem, Link, Text, Heading, Box, Image, useMultiStyleConfig} from '@chakra-ui/react'

const HomeStory = (props) => {
    const {bgColor, picture, heading, text, textColor, buttonColor, buttonTextColor, href, ...rest} = props;
    const styles = useMultiStyleConfig('HomeStory')
return (
    <Grid templateColumns={{xsm:'repeat(1, 1fr)', lg:'repeat(6, 1fr)'}} bg={bgColor} {...rest}>
      <GridItem colSpan={{xsm:6, lg:4}}>
          <Link href={href} _hover={{opacity:'0.8'}} transition='all 0.3s'>
              <Image
                  src={picture}
                  alt='story'
                  {...styles.image}
              />
          </Link>
      </GridItem>
      <GridItem colSpan={{xsm:6, lg:2}} textAlign='center' pt={{lg:'50%'}} textColor={textColor}>
          <Heading {...styles.heading}>
              {heading}
          </Heading>
          <Text {...styles.text}>
              {text}
          </Text>
          <Link href={href}>
            <Box 
                {...styles.button}
                bg={buttonColor}
                color={buttonTextColor}
            >
                Explore
            </Box>
          </Link>
      </GridItem>
    </Grid>
  )}

export default HomeStory