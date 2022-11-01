import {
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
  Text,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

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
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</Text>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
