import "@/styles/add-new-address-modal.scss";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewAddressSchema } from "@/lib/schemas";
import InputField from "./input-field";
import Label from "./label";
import TextArea from "./textarea";

interface AddNewAddressModalProps {
  setOpen: () => void;
}

const AddNewAddressModal = ({ setOpen }: AddNewAddressModalProps) => {
  const { register, handleSubmit, reset,  formState: { errors } } = useForm<z.infer<typeof NewAddressSchema>>({
    resolver: zodResolver(NewAddressSchema),
    defaultValues: {
      name: "",
      addressLabel: "",
      address: "",
      city: "",
      note: "",
      phone: undefined,
    }
  });

  const onSubmit = async (values: z.infer<typeof NewAddressSchema>) => {
    console.log(values);
    reset();
    setOpen();
  }


  return (
    <div className="add-new-address-modal-background">
      <div className="add-new-address-modal-container">
        <div className="add-new-address-modal-title-container">
          <h1 className="add-new-address-modal-title">Add New Address</h1>
        </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="add-new-address-form-container">
            <div className="add-new-address-column-container">
              <Label
                labelTitle="Recipient's Name"
                className="add-new-address-form-label"
              />
              <InputField
                register={register}
                name="name"
                placeholer="Chelsea Cutler"
                error={errors.name}
                className="add-new-address-form-input"
              />
            </div>
            <div className="add-new-address-column-container">
              <Label
                labelTitle="Address Label"
                className="add-new-address-form-label"
              />
              <InputField
                register={register}
                name="addressLabel"
                placeholer="Second House"
                error={errors.addressLabel}
                className="add-new-address-form-input"
              />
            </div>
            <div className="add-new-address-column-container">
              <Label
                className="add-new-address-form-label"
                labelTitle="Phone Number"
              />
              <InputField
                register={register}
                name="phone"
                placeholer="081234567890"
                error={errors.phone}
                className="add-new-address-form-input"
              />
            </div>
          </div>
          <div className="add-new-address-form-container">
            <div className="add-new-address-column-container">
              <Label
                labelTitle="City"
                className="add-new-address-form-label"
              />
              <InputField
                register={register}
                name="city"
                placeholer="Your City"
                error={errors.city}
                className="add-new-address-form-input"
              />
            </div>
            <div className="add-new-address-column-container">
              <Label
                labelTitle="Address"
                className="add-new-address-form-label"
              />
              <TextArea
                register={register}
                name="address"
                placeholder="2 Soundview Cir, White Plains, New York 10606."
                className="add-new-address-form-address"
                error={errors.address}
              />
            </div>
            <div className="add-new-address-column-container">
              <Label
                className="add-new-address-form-label"
                labelTitle="Note (Optional)"
              />
              <InputField
                register={register}
                name="note"
                placeholer="House colors, benchmarks, etc."
                error={errors.note}
                className="add-new-address-form-input"
              />
            </div>
          </div>
          <div className="add-new-address-modal-terms-container">
            <span>By clicking “Save”, you agree to the <b>Terms and Conditions</b> and <b>Privacy Policy.</b></span>
          </div>
          <div className="add-new-address-modal-button-container">
            <button onClick={setOpen} className="add-new-address-modal-cancel-button">Cancel</button>
            <button type="submit" className="add-new-address-modal-save-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNewAddressModal