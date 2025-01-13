import "@/styles/checkout-dropdown.scss";

import {Button,ListBox, ListBoxItem, Popover, Select, SelectValue, Label} from 'react-aria-components';
import { IoIosArrowDown } from "react-icons/io";



const CheckoutDropdown = () => {
  return (
    <Select placeholder="2-3 days (Default)" aria-label="select-group">
      <Label style={{display: "none"}} aria-label='radio-group'>Label</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true">
          <IoIosArrowDown/>
        </span>
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem>2-3 days</ListBoxItem>
          <ListBoxItem>5 - 6 days</ListBoxItem>
          <ListBoxItem>9 - 10 days</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  )
}

export default CheckoutDropdown