import React, { useState } from "react";

import { Container, Content, ContentFlatList } from "./styles";
import { useBottomSheet } from "../../context/useBottomSheet";
import { CustomBottomSheet } from "../../components/CustomBottomSheet";

export function Home() {
  const { isOpen, setOpen } = useBottomSheet();

  return (
    <Container>
      {isOpen && <CustomBottomSheet />}
    </Container>
  )
}