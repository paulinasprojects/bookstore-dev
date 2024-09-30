import "@/styles/modal.scss";
import { FaArrowLeft } from "react-icons/fa6";
import cards from '/cards.png';
import {useForm} from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./input-field";


interface ModalProps {
  setOpen: () => void;
}

const cardSchema = z.object({
  cardNumber: z.number().min(1, {message: "Card Number is required"}).max(12, {message: "Card number is invalid."}),
  cardValidity: z.number().min(1, {message: "Card Validity is required"}).max(4, {message: "Card validity is invalid"}),
  cardCvv: z.number().min(1,{message: "Card Cvv is required"}).max(3, {message: "Card cvv is invalid"}),
})



const AddNewCardModal = ({setOpen}: ModalProps) => {
  const {register, handleSubmit, formState: {errors}} = useForm<z.infer<typeof cardSchema>>({
    resolver: zodResolver(cardSchema),
    defaultValues: {
      cardNumber: 0,
      cardValidity: 0,
      cardCvv: 0,
    }
  });

  const onSubmit = async (values: z.infer<typeof cardSchema>) => {
    console.log(values);
  };

  return (
    <div className='modal-background'>
      <div className="modal-container">
        <div className="modal-title-container">
            <FaArrowLeft onClick={setOpen} className="arrow-icon"/>
          <span className="add-new-card-title">
            Add New Card
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-number-input-container">
            <span className="modal-title">Card Number</span>
            <InputField
              className='card-number-input'
              placeholer="Example: 1234 5678 9012"
              name="cardNumber"
              register={register}
              error={errors?.cardNumber}
              type="number"
            />
            <img src={cards} alt="" />
          </div>
          <div className="card-number-input-container">
            <span className="modal-title">Validity Period</span>
            <InputField
              className='card-number-input'
              placeholer="ex: 11 / 25"
              name="cardValidity"
              register={register}
              error={errors?.cardValidity}
            />
          </div>
          <div className="card-number-input-container">
            <span className="modal-title">CVV</span>
            <InputField
              className='card-number-input'
              placeholer="ex: 123"
              name="cardCvv"
              register={register}
              error={errors?.cardCvv}
              type="number"
            />
          </div>
          <div className="modal-privacy-policy">
            <span>By registering, I agree Terms and <br /> Conditions and Privacy Policy</span>
          </div>
          <div className="modal-button-container">
            <button className="modal-save-new-card-button" type="submit">Save New Card</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNewCardModal