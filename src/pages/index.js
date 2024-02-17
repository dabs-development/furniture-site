import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Image,
  background
} from '@chakra-ui/react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

const codeStyles = {
    display: 'flex',
    height: '100px',
    background: 'linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db',
   
}

const navbar = {
  marginRight: 'auto',
    display: 'flex',
    marginLeft: '20px',
    fontSize: '20px',
    fontWeight: '500',
}

const link = {
  fontWeight: '400',
  textDecoration: "none",
}

const IndexPage = () => {

  return (
    <header style={codeStyles}>
    <Breadcrumb fontWeight='medium' fontSize='sm' style={navbar}>
  <BreadcrumbItem >
    <BreadcrumbLink href='#' style={link}>Кухни</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem >
  <Menu>
  <MenuButton >
    Шкафы
  </MenuButton>
  <MenuList>
    <MenuItem >Распашные шкафы</MenuItem>
    <MenuItem >Шкафы купэ</MenuItem>
    <MenuItem >Элитные шкафы</MenuItem>
  </MenuList>
</Menu>
</BreadcrumbItem>
  <BreadcrumbItem >
    <BreadcrumbLink href='#' style={link}>Гардеробные</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem >
    <BreadcrumbLink href='#' style={link}>Ванная</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem >
    <BreadcrumbLink href='#' style={link}>Спальня</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem >
    <BreadcrumbLink href='#' style={link}>Техника</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem >
    <BreadcrumbLink href='#' style={link}>Все для мебели</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem >
  <Menu>
  <MenuButton>
    О нас
  </MenuButton>
  <MenuList >
    <MenuItem >О компании</MenuItem>
    <MenuItem >Отзывы</MenuItem>
  </MenuList>
</Menu>
</BreadcrumbItem>
<BreadcrumbItem >
  <Menu>
  <MenuButton >
    Покупателю
  </MenuButton>
  <MenuList >
    <MenuItem >Гарантия</MenuItem>
    <MenuItem >Сборка</MenuItem>
    <MenuItem >Доставка</MenuItem>
    <MenuItem >Дизайн замер</MenuItem>
    <MenuItem >Оплата</MenuItem>
    <MenuItem >Акции</MenuItem>
  </MenuList>
</Menu>
</BreadcrumbItem>
  <BreadcrumbItem >
    <BreadcrumbLink href='#' style={link}>Контакты</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
<StaticImage 
src="../images/fur.avif"
width={100}

quality={95}
style={{backgroundSize:'cover'}}
/>
</header>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
