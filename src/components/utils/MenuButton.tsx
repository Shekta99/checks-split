import { Button, Text } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface MenuButtonProps {
  Icon: ReactJSXElement;
  text: string;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  Icon,
  text,
}: {
  Icon: ReactJSXElement;
  text: string;
}) => {
  return (
    <Button leftIcon={Icon} colorScheme="blue" variant="outline">
      <Text>{text}</Text>
    </Button>
  );
};
