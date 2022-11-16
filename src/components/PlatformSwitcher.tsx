import { Button, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { PlatformNames, PLATFORM_NAME } from '../types';

interface PlatformSwitcherProps {
  platform: PlatformNames;
  setPlatform: (field: PlatformNames) => void;
  platformName?: PlatformNames;
}

const PlatformButton = ({ setPlatform, platform, platformName }: PlatformSwitcherProps) => {
  return (
    <Button
      onClick={() => setPlatform(platformName ?? 'lido')}
      colorScheme={platformName === platform ? 'blue' : 'gray'}
      variant="solid"
      borderRadius="0"
    >
      {PLATFORM_NAME[platformName || 'lido']}
    </Button>
  );
};

const PlatformSwitcher: FC<PlatformSwitcherProps> = ({ platform, setPlatform }) => {
  return (
    <Flex
      gap="10"
      mb="8"
      w="full"
    >
      <PlatformButton
        platformName="lido"
        platform={platform}
        setPlatform={setPlatform}
      />
      <PlatformButton
        platformName="ankr"
        platform={platform}
        setPlatform={setPlatform}
      />
      <PlatformButton
        platformName="stader"
        platform={platform}
        setPlatform={setPlatform}
      />
      <PlatformButton
        platformName="tenderize"
        platform={platform}
        setPlatform={setPlatform}
      />
    </Flex>
  );
};

export default PlatformSwitcher;
