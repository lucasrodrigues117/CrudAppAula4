import { API_URL } from "./configApi";

export async function getPeople() {
    try {
        const response = await fetch(`${API_URL}/people`);
        if (!response.ok) throw new Error(`Erro ao buscar: ${response.status}`);
        return await response.json();""
    } catch (error) {
        console.error("Erro na busca:", error);
        return [];
    }
}

export async function createPerson(person) {
    try {
        const response = await fetch(`${API_URL}/people`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(person)
        });
        if (!response.ok) throw new Error(`Erro ao criar: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Erro ao criar pessoa:", error);
        throw error; 
    }
}

export async function updatePerson(id, person) {
    try {
        const response = await fetch(`${API_URL}/people/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(person)
        });
        if (!response.ok) throw new Error(`Erro ao atualizar: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Erro ao atualizar pessoa:", error);
        throw error;
    }
}

export async function deletePerson(id) {
    try {
        const response = await fetch(`${API_URL}/people/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) throw new Error(`Erro ao deletar: ${response.status}`);
        return true;
    } catch (error) {
        console.error("Erro ao deletar pessoa:", error);
        throw error;
    }
}