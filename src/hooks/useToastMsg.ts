import { useCallback } from "react"
import { useToast } from "@chakra-ui/react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const useToastMsg = () => {
  const toast = useToast();

  const showToastMsg = useCallback((props: Props) => {
    const { title, status } = props;

    toast({
      title,
      status,
      position: "top",
      duration: 2000,
      isClosable: true
    });
  }, [toast]);

  return { showToastMsg };
};
