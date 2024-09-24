import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi';

interface BookDropDownProps  {
  menuButtonName: string;
}

import "@/styles/dropdown-mobile.scss";

const BookDropdownMobile = ({menuButtonName}: BookDropDownProps) => {
  return (
    <Menu>
    <MenuButton className="menu-button-mobile">
      {menuButtonName}
      <BiChevronDown className='book-dropdown-chevron'/>
    </MenuButton>
    <MenuItems anchor="bottom" className="book-dropdown-menu-items">
      <MenuItem>
        <a className="book-dropdown-menu-item-mobile" href="#">
          Price asc
        </a>
      </MenuItem>
      <MenuItem>
        <a className="book-dropdown-menu-item-mobile" href="#" >
          Price desc
        </a>
      </MenuItem>
      <MenuItem>
        <a className="book-dropdown-menu-item-mobile" href="#" >
          Reviews
        </a>
      </MenuItem>
    </MenuItems>
  </Menu>
  )
}

export default BookDropdownMobile