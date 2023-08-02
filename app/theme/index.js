/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {extendTheme} from '@chakra-ui/react'

// Foundational style overrides
import styles from './foundations/styles'
import colors from './foundations/colors'
import gradients from './foundations/gradients'
import sizes from './foundations/sizes'
import space from './foundations/space'
import layerStyles from './foundations/layerStyles'
import shadows from './foundations/shadows'

// Base component style overrides
import Alert from './components/base/alert'
import Accordion from './components/base/accordion'
import Badge from './components/base/badge'
import Button from './components/base/button'
import Checkbox from './components/base/checkbox'
import Container from './components/base/container'
import Drawer from './components/base/drawer'
import FormLabel from './components/base/formLabel'
import Icon from './components/base/icon'
import Input from './components/base/input'
import Modal from './components/base/modal'
import Radio from './components/base/radio'
import Select from './components/base/select'
import Skeleton from './components/base/skeleton'
import Tooltip from './components/base/tooltip'
import Popover from './components/base/popover'

// Project Component style overrides
import App from './components/project/_app'
import Breadcrumb from './components/project/breadcrumb'
import Header from './components/project/header'
import ListMenu from './components/project/list-menu'
import Footer from './components/project/footer'
import CheckoutFooter from './components/project/checkout-footer'
import LinksList from './components/project/links-list'
import DrawerMenu from './components/project/drawer-menu'
import NestedAccordion from './components/project/nested-accordion'
import LocaleSelector from './components/project/locale-selector'
import OfflineBanner from './components/project/offline-banner'
import Pagination from './components/project/pagination'
import ProductTile from './components/project/product-tile'
import SocialIcons from './components/project/social-icons'
import SwatchGroup from './components/project/swatch-group'
import ImageGallery from './components/project/image-gallery'
import breakpoints from './foundations/breakpoints'
import ProductScroller from './components/project/product-scroller'
import HomeStory from './components/project/homestory'
import Hero from './components/project/hero'
import FooterTopContainer from './components/project/footer-top-container'
import FooterNewsLetter from './components/project/footer-news-letter'
import FooterBottomContainer from './components/project/footer-bottom-container'
import FooterAccordion from './components/project/footer-accordion'

import PdpImageSlider from './components/project/pdp-image-slider'
import ImageSlider from './components/project/image-slider'
import PdpImageZoom from './components/project/pdp-image-zoom'
import PdpSmallIcons from './components/project/pdp-small-icons'
import PdpColorSlider from './components/project/pdp-color-slider'
import PdpSwatchGroup from './components/project/pdp-swatchgroup'
import PdpProductDetail from './components/project/pdp-product-detail'
import PdpDetailDetailsDesktop from './components/project/pdpdetail-details-desktop'

// Please refer to the Chakra-Ui theme customization docs found
// here https://chakra-ui.com/docs/theming/customize-theme to learn
// more about extending and overriding themes for your project.
const overrides = {
    fonts: {
        heading: `Five Year Later, Arial`,
        body: `"FK Grotesk Regular", Arial`
    },
    styles,
    layerStyles,
    colors,
    sizes,
    space,
    gradients,
    shadows,
    breakpoints,
    components: {
        // base components
        Accordion,
        Alert,
        Badge,
        Button,
        Checkbox,
        Container,
        Drawer,
        FormLabel,
        Icon,
        Input,
        Modal,
        Popover,
        Radio,
        Select,
        Skeleton,
        Tooltip,

        // project components
        App,
        Breadcrumb,
        Header,
        Footer,
        CheckoutFooter,
        LinksList,
        ListMenu,
        DrawerMenu,
        NestedAccordion,
        LocaleSelector,
        OfflineBanner,
        SocialIcons,
        Pagination,
        ProductTile,
        SwatchGroup,
        ImageGallery,
        PdpImageSlider,
        ImageSlider,
        PdpImageZoom,
        PdpSmallIcons,
        PdpColorSlider,
        PdpSwatchGroup,
        PdpProductDetail,
        ProductScroller,
        HomeStory,
        Hero,
        FooterTopContainer,
        FooterNewsLetter,
        FooterBottomContainer,
        FooterAccordion,
        PdpDetailDetailsDesktop
    }
}

export default extendTheme(overrides)
