import { Button, Flex } from '@chakra-ui/react';
import { FC, useContext, useEffect } from 'react';
import DataStoreContext from '../context/DataStore';
import { FieldNames, PlatformNames } from '../types';
import { PLATFORM_TOKEN } from '../constants';

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

const FieldSwitcher: FC<FieldSwitcherProps & { platform: PlatformNames | 'all' }> = ({ field, setField, platform }) => {
  const { current } = useContext(DataStoreContext);
  useEffect(() => {
    if (platform !== 'all') {
      if (field === 'apy' && !current?.[platform].apy) {
        setField('apr');
      } else if (field === 'apr' && !current?.[platform].apr) {
        setField('apy');
      }
    }
  }, [current, platform, setField]);
  return (
    <Flex
      justifyContent="start"
      rowGap="2"
      columnGap="4"
      wrap="wrap"
      mb="4"
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
        fieldName="stakers"
        label="Stakers"
        field={field}
        setField={setField}
      />
      {platform !== 'all' && (
        <>
          <FieldButton
            fieldName="priceMatic"
            label={`Price (${PLATFORM_TOKEN[platform]}/MATIC)`}
            field={field}
            setField={setField}
          />
          <FieldButton
            fieldName={current?.[platform].apy?.toString() ? 'apy' : 'apr'}
            label={current?.[platform]?.apy?.toString() ? 'APY' : 'APR'}
            field={field}
            setField={setField}
          />
        </>
      )}
    </Flex>
  );
};

export default FieldSwitcher;
