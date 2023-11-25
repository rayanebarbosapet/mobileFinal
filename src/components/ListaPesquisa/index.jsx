import { Text, FlatList, View, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";


const ListaPesquisa = ({ listaPesquisa, excluirPesquisa, editarPesquisa }) => {
  return (
    <FlatList
      data={listaPesquisa}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text maxLength="10" style={{ color: "#f1f1f1", fontSize: 35 }}>
            {item.nome}
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "baseline", gap: 6 }}
          >
            <TouchableOpacity onPress={() => editarPesquisa(item)}>
              <Feather name="edit" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => excluirPesquisa(item.id)}>
              <EvilIcons name="trash" size={35} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default ListaPesquisa;
