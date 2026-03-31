import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },

  addButton: {
    backgroundColor: "#0f3460",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#000000",
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  card: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },

  infoContainer: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  email: {
    fontSize: 13,
    color: "rgba(255,255,255,0.6)",
    marginTop: 2,
  },

  actionButtons: {
    flexDirection: "row",
    gap: 8,
  },

  btnEdit: {
    backgroundColor: "#2196F3",
    padding: 8,
    borderRadius: 5,
    minWidth: 60,
    alignItems: "center",
  },

  btnDelete: {
    backgroundColor: "#e94560",
    padding: 8,
    borderRadius: 5,
    minWidth: 60,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "rgba(255,255,255,0.08)",
    height: 50,
    borderColor: "rgba(255,255,255,0.2)",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#fff",
  },

  btnSave: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  btnCancel: {
    backgroundColor: "#6c757d",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});