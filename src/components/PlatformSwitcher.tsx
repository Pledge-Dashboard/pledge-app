import { Button, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { PlatformNames, PLATFORM_NAME } from '../types';

interface PlatformSwitcherProps {
  platform: PlatformNames | 'all';
  setPlatform: (field: PlatformNames | 'all') => void;
  platformName?: PlatformNames | 'all';
}

const PlatformButton = ({ setPlatform, platform, platformName }: PlatformSwitcherProps) => {
  return (
    <Button
      onClick={() => setPlatform(platformName ?? 'lido')}
      variant="solid"
      border="2px solid"
      borderColor={platformName === platform ? '#ee0b7bdf' : 'whiteAlpha.400'}
      bg={platformName === platform ? '#ee0b7b20' : 'whiteAlpha.200'}
      _hover={{
        bg: platformName === platform ? '#ee0b7b40' : 'whiteAlpha.500',
      }}
      borderRadius="0"
    >
      {PLATFORM_NAME?.[platformName || 'lido']}
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
        platformName="all"
        platform={platform}
        setPlatform={setPlatform}
      />
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
