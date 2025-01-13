import {Button,ListBox, ListBoxItem, Popover, Select, SelectValue, Label} from 'react-aria-components';
import { BiChevronDown } from 'react-icons/bi';

import "@/styles/book-dropdown.scss";

const BookDropdown = () => {
  return (
    <Select placeholder='Category' aria-label='select-group'>
      <Label style={{display: "none"}} aria-label='radio-group'>Label</Label>
      <Button>
        <SelectValue/>
        <span aria-hidden="true">
          <BiChevronDown/>
        </span>
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem>Price asc</ListBoxItem>
          <ListBoxItem>Price desc</ListBoxItem>
          <ListBoxItem>Reviews</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  )
}

export default BookDropdown