import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from '../components/NavLink';

export const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          bgColor="bg.translucent"
          backdropFilter={'auto'}
          backdropBlur={'lg'}
        >
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box onClick={onClose}>
              <NavLink
                href="/#Statistics"
                displayString="Statistics"
              />
            </Box>
            <Box onClick={onClose}>
              <NavLink
                href="/#Platforms"
                displayString="Platforms"
              />
            </Box>
            <Box onClick={onClose}>
              <NavLink
                href="/#LiquidStaking"
                displayString="Liquid Staking"
              />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
