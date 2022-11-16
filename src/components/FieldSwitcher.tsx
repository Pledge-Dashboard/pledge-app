import { Button, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { FieldNames } from '../types';

interface FieldSwitcherProps {
  field: FieldNames;
  setField: (field: FieldNames) => void;
}

const FieldButton: FC<FieldSwitcherProps & { fieldName: FieldNames; label: string }> = ({
  setField,
  field,
  fieldName,
  label,
}) => {
  return (
    <Button
      onClick={() => setField(fieldName)}
      colorScheme={fieldName === field ? 'blue' : 'gray'}
      variant="outline"
      borderRadius="0"
    >
      {label}
    </Button>
  );
};

const FieldSwitcher: FC<FieldSwitcherProps> = ({ field, setField }) => {
  return (
    <Flex gap="10">
      <FieldButton
        fieldName="totalStaked"
        label="Staked"
        field={field}
        setField={setField}
      />
      <FieldButton
        fieldName="totalStakedUSD"
        label="TVL"
        field={field}
        setField={setField}
      />
      <FieldButton
        fieldName="priceMatic"
        label="Price (stMATIC/MATIC)"
        field={field}
        setField={setField}
      />
      <FieldButton
        fieldName="stakers"
        label="Stakers"
        field={field}
        setField={setField}
      />
    </Flex>
  );
};

export default FieldSwitcher;
