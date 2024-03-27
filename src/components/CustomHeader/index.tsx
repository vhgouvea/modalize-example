import React, { useCallback, useMemo, useRef, useState } from "react";

import { 
  Container, 
  Content, 
  ContentBottomSheet, 
  ContentButtonBottomSheet, 
  HeaderText, 
  Icon, 
  IconButton, 
  Img,
  TitleBottomSheet
} from "./styles";

import { useBottomSheet } from "../../context/useBottomSheet";


export function CustomHeader() {
  const { setOpen } = useBottomSheet();

  const handlePresentModalPress = useCallback(() => {
    setOpen(true);
    console.log('Botão da engrenagem clicado');
  }, [setOpen]);


  return (
    <Container>

      <Content>
        <HeaderText>modalize-teste</HeaderText>
      </Content>

      <IconButton onPress={handlePresentModalPress}>
        <Icon name="gear"/>
      </IconButton>

    </Container>
  );
}