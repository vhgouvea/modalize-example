import { useCallback, useEffect, useMemo, useRef } from "react";
import { ContentBottomSheet, ContentButtonBottomSheet, TitleBottomSheet } from "./styles";
import { CustomInput } from "../CustomInput";
import { Button, Dimensions, StyleSheet, View } from "react-native";
import { useBottomSheet } from "../../context/useBottomSheet";
import { Modalize, ModalizeProps } from "react-native-modalize";
import { useTheme } from "styled-components";

export function CustomBottomSheet() { 
  const { isOpen, setOpen } = useBottomSheet();
  const { colors } = useTheme();

  const modalizeRef = useRef<Modalize>(null);

  useEffect(() => {
    console.log('cheguei no useEffect')
    if(isOpen) {
      modalizeRef.current?.open();
    }
  }, [isOpen])


  return (
    <Modalize
      ref={modalizeRef}
      handlePosition="inside"
      adjustToContentHeight={true}
      HeaderComponent={
        <View style={{height: 50}}>

        </View>
      }
      FooterComponent
      modalStyle={{ height: '60%'}}
      handleStyle={{margin: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20}}
      onClose={() => {
        setOpen(false)
      }}
    >
      <ContentBottomSheet>
        <TitleBottomSheet>Alterar usuário selecionado</TitleBottomSheet>
        <CustomInput 
          onChangeText={() => {}}
          value={""}
          placeholder="Nome do usuário"
          keyboardType="default"
        />
        <ContentButtonBottomSheet>
          <Button title="teste" onPress={() => modalizeRef.current?.close()} />
        </ContentButtonBottomSheet>
      </ContentBottomSheet>
    </Modalize>
  );
}

