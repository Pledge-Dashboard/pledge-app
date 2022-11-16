import { Button, Flex } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import DataStoreContext from '../context/DataStore';
import { FieldNames, PlatformNames, PLATFORM_TOKEN } from '../types';

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
      fontSize="sm"
    >
      {label} {fieldName === field}
    </Button>
  );
};

const FieldSwitcher: FC<FieldSwitcherProps & { platform: PlatformNames }> = ({ field, setField, platform }) => {
  const { current } = useContext(DataStoreContext);
  return (
    <Flex
      justifyContent="start"
      rowGap="2"
      columnGap="4"
      wrap="wrap"
    >
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
        label={`Price (${PLATFORM_TOKEN[platform]}/MATIC)`}
        field={field}
        setField={setField}
      />
      <FieldButton
        fieldName="stakers"
        label="Stakers"
        field={field}
        setField={setField}
      />
      <FieldButton
        fieldName={current?.[platform].apy ? 'apy' : 'apr'}
        label={current?.[platform].apy ? 'APY' : 'APR'}
        field={field}
        setField={setField}
      />
    </Flex>
  );
};

export default FieldSwitcher;
