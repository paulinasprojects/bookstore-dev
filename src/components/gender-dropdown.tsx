import "@/styles/gender-dropdown.scss";

import {Button,ListBox, ListBoxItem, Popover, Select, SelectValue, Label} from 'react-aria-components';
import { IoIosArrowDown } from "react-icons/io";



const GenderDropdown = () => {
  return (
    <Select placeholder="Choose Gender" aria-label="select-group">
      <Label style={{display: "none"}} aria-label='radio-group'>Label</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true">
          <IoIosArrowDown/>
        </span>
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem>Male</ListBoxItem>
          <ListBoxItem>Female</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  )
}

export default GenderDropdown