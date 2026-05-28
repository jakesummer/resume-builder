import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm.jsx";

export default function Sidebar({
  data,
  onPersonalInfoChange,
  onAddItem,
  onItemChange,
  onDeleteItem,
}) {
  return (
    <>
      <PersonalInfoForm
        data={data.personalInfo}
        onChange={onPersonalInfoChange}
      />
    </>
  );
}
