import { TextFilter, InputFilter, ContactFilterDiv } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <ContactFilterDiv>
      <TextFilter> Find contacts by name </TextFilter>
      <InputFilter
        type="text"
        value={filter}
        onChange={evt => onChange(evt.target.value)}
        // onChange={evt => onChange(console.log(evt.target.value))}
      />
    </ContactFilterDiv>
  );
};
