import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../styles/styles";
import { createPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {
    const person = route.params?.person;

    const [firstName, setFirstName] = useState(person?.firstName || "");
    const [lastName, setLastName] = useState(person?.lastName || "");
    const [email, setEmail] = useState(person?.email || "");
    const [phone, setPhone] = useState(person?.phone || "");

    async function save() {
        const data = { firstName, lastName, email, phone };

        if (person) {
            await updatePerson(person.id, data);
        } else {
            await createPerson(data);
        }
        navigation.goBack();
    }

    return (
        <LinearGradient colors={["#1a1a2e", "#16213e", "#0f3460"]} style={styles.container}>
            <Text style={styles.title}>
                {person ? "Editar Pessoa" : "Nova Pessoa"}
            </Text>

            <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="rgba(255,255,255,0.4)"
                value={firstName}
                onChangeText={setFirstName}
            />

            <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="rgba(255,255,255,0.4)"
                value={lastName}
                onChangeText={setLastName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,0.4)"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Phone"
                placeholderTextColor="rgba(255,255,255,0.4)"
                value={phone}
                onChangeText={setPhone}
            />

            <TouchableOpacity style={styles.btnSave} onPress={save}>
                <Text style={styles.buttonText}>SALVAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCancel} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>CANCELAR</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}