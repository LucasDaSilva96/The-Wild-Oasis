import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useEditSettings from "./useEditSettings";
import useSettings from "./useSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookLength,
      maxBookLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { isUpdateting, updateSetting } = useEditSettings();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const value = e.target.value;

    if (!value) return;

    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input type="number" id="min-nights" defaultValue={minBookLength} />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookLength}
          disabled={isLoading}
          onBlur={(e) => {
            return handleUpdate(e, "maxBookLength");
          }}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isLoading}
          onBlur={(e) => {
            return handleUpdate(e, "maxGuestsPerBooking");
          }}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isLoading}
          onBlur={(e) => {
            return handleUpdate(e, "breakfastPrice");
          }}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
