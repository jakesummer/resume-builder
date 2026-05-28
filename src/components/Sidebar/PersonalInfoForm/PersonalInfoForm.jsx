import LabeledInput from "../../LabeledInput/LabeledInput.jsx";

export default function PersonalInfoForm({ data, onChange }) {
  return (
    <form>
      <LabeledInput
        label="Full Name"
        name="fullName"
        value={data.fullName}
        onChange={onChange}
        required={true}
      />
      <LabeledInput
        label="Phone Number"
        name="phoneNumber"
        value={data.phoneNumber}
        type="tel"
        onChange={onChange}
      />
      <LabeledInput
        label="Email"
        name="email"
        value={data.email}
        type="email"
        onChange={onChange}
      />
      <LabeledInput
        label="LinkedIn"
        name="linkedIn"
        value={data.linkedIn}
        type="url"
        onChange={onChange}
      />
      <LabeledInput
        label="GitHub"
        name="github"
        value={data.github}
        type="url"
        onChange={onChange}
      />
    </form>
  );
}
