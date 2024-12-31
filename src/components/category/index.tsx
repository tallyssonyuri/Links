import React from "react";
import { Text, Pressable, PressableProps } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

// PressableProps + adicionais
type Props =  PressableProps & {
    name: string
    icon: keyof typeof MaterialIcons.glyphMap // tipagem específica da biblioteca
    isSelected: boolean
}

 // ...rest usa todas as propriedades possíves
export function Category({ name, icon, isSelected, ...rest }: Props){
    const color = isSelected ? colors.green[300] : colors.gray[400]

       return (
        <Pressable style={styles.container} {...rest}>
            <MaterialIcons name={icon} size={16} color={colors.gray[400]} />
            <Text style={[styles.name, { color }]}>
                {name}
            </Text>
        </Pressable>
    )
}