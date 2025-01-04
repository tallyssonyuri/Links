import React , {useState} from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Add(){
    // estado e função que atualizar o estado
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');

    function handleAdd (){
        if (!category){
            return Alert.alert('Categoria', 'Selecione a categoria')
        }

        // trim() remove espaços
        if (!name.trim()){
            return Alert.alert('Nome', 'Digite o nome')
        }

        if (!url.trim()){
            return Alert.alert('URL', 'Digite a URL')
        }

        console.log( {name, url})
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name='arrow-back' size={32} color={colors.gray[200]}/>
                </TouchableOpacity>

                <Text style={styles.title}>
                    Novo
                </Text>
            </View>

            <Text style={styles.label}>
                Selecione uma categoria
            </Text>
            < Categories onChange={setCategory} selected={category} />
            
            <View style={styles.form}>
                <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
                <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false} />
                <Button title="Adicionar" onPress={handleAdd}/>
            </View>
        </View>
    )
}