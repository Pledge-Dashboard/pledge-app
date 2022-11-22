import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from '../components/NavLink';

export const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const closeWithDelay = () => {
    setTimeout(() => {
      onClose();
    }, 1000);
  };
  return (
    <>
      <IconButton
        icon={
          <HamburgerIcon
            w={{ base: 8 }}
            h={{ base: 8 }}
          />
        }
        colorScheme="blackAlpha"
        variant="unstyled "
        onClick={onOpen}
        aria-label={'Open Sidedrawer'}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          bg={'none'}
          bgColor="blackAlpha.300"
          backdropFilter={'auto'}
          backdropBlur={'xl'}
        >
          <DrawerCloseButton
            top="8"
            right="8"
            fontSize="md"
          />

          <DrawerBody
            as={Flex}
            flexDirection="column"
            justifyContent="center"
            gap="2"
          >
            <NavLink
              w="full"
              p="2"
              py="4"
              bg="whiteAlpha.50"
              href="/#Statistics"
              displayString="Statistics"
              onClick={closeWithDelay}
            />

            <NavLink
              w="full"
              p="2"
              py="4"
              bg="whiteAlpha.50"
              href="/#Platforms"
              displayString="Platforms"
              onClick={closeWithDelay}
            />

            <NavLink
              w="full"
              p="2"
              py="4"
              bg="whiteAlpha.50"
              href="/#LiquidStaking"
              displayString="Liquid Staking"
              onClick={closeWithDelay}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
