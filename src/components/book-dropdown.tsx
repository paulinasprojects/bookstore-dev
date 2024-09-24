import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi';

import "@/styles/book-dropdown.scss";

const BookDropdown = () => {
  return (
    <Menu>
    <MenuButton className="menu-button">
      Category
      <BiChevronDown className='book-dropdown-chevron'/>
    </MenuButton>
    <MenuItems anchor="bottom" className="book-dropdown-menu-items">
      <MenuItem>
        <a className="book-dropdown-menu-item" href="#">
          Price asc
        </a>
      </MenuItem>
      <MenuItem>
        <a className="book-dropdown-menu-item" href="#" >
          Price desc
        </a>
      </MenuItem>
      <MenuItem>
        <a className="book-dropdown-menu-item" href="#" >
          Reviews
        </a>
      </MenuItem>
    </MenuItems>
  </Menu>
  )
}

export default BookDropdown