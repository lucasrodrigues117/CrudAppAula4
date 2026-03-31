import React, { useState, useCallback } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, RefreshControl } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../styles/styles";
import { getPeople, deletePerson } from "../servers/peopleCrud";

export default function HomeScreen({ navigation }){
    const [people, setPeople] = useState([]);
    const [allPeople, setAllPeople] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    async function loadPeople() {
        const data = await getPeople();
        setPeople(data);
        setAllPeople(data);
    }

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await loadPeople();
        setRefreshing(false);
    }, []);

    const handleSearch = (text) => {
        setSearchText(text);

        if (text.trim() === '') {
            setPeople(allPeople);
            return;
        }

        const filtered = allPeople.filter((item) => {
            const nomeCompleto = `${item.firstName} ${item.lastName}`.toLowerCase();
            return nomeCompleto.includes(text.toLowerCase());
        });

        setPeople(filtered);
    };

    useFocusEffect(
        useCallback(() => {
            setSearchText('');
            loadPeople();
        }, [])
    );

    return (
        <LinearGradient colors={["#1a1a2e", "#16213e", "#0f3460"]} style={styles.container}>
            <Text style={styles.title}>Cadastro de Pessoas</Text>

            <TextInput
                style={styles.input}
                placeholder="Pesquisar por nome..."
                placeholderTextColor="rgba(255,255,255,0.4)"
                value={searchText}
                onChangeText={handleSearch}
            />

            <TouchableOpacity 
                style={styles.addButton}
                onPress={() => navigation.navigate("AddEdit")}
            >
                <Text style={styles.addButtonText}>Adicionar Pessoas</Text>
            </TouchableOpacity>

            <FlatList 
                data={people}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                renderItem={({item}) => (
                    <CardPersonal 
                        item={item}
                        navigation={navigation}
                        refresh={loadPeople}
                    />
                )}
            />
        </LinearGradient>
    );
}

function CardPersonal({item, navigation, refresh}) {
    return(
        <View style={styles.card}>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>
                    {item?.firstName} {item?.lastName}
                </Text>
                <Text style={styles.email}>
                    {item?.email}
                </Text>
                <Text style={styles.email}>
                    {item?.phone}
                </Text>
            </View>

            <View style={styles.actionButtons}>
                <TouchableOpacity 
                    style={styles.btnEdit}
                    onPress={() => navigation.navigate("AddEdit", { person: item })}
                >
                    <Text style={styles.btnText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnDelete}
                    onPress={async () => {
                        await deletePerson(item.id);
                        refresh();
                    }}
                >
                    <Text style={styles.btnText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}