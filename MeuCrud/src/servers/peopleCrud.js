import { API_URL } from "./configApi";
export async function getPeople() {
    try {
        const response = await fetch(`${API_URL}/people`);
        const text = await response.text(); 
        console.log("Resposta do Servidor:", text); 
        
        return JSON.parse(text); 
    } catch (error) {
        console.error("Erro na busca:", error);
        return [];
    }
}
export async function createPerson(person){
    const response = await fetch(`${API_URL}/people`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });

    return response.json();
}

export async function updatePerson(id, person){
    const response = await fetch(`${API_URL}/people/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });

    return response.json();
}

export async function deletePerson(id) {
    await fetch(`${API_URL}/people/${id}`, {
        method: "DELETE"
    });
}