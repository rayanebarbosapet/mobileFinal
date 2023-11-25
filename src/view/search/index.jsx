import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import api from "../../services";
import ListaPesquisa from "../../components/ListaPesquisa";

const Search = () => {
  const [novaPesquisa, setNovaPesquisa] = useState("");
  const [listaPesquisa, setListaPesquisa] = useState([]);
  const [estaEditando, setEstaEditando] = useState({
    status: false,
    id: 0,
  });
  const obterPesquisa = async () => {
    try {
      const { data } = await api.get("/pesquisa");
      setListaPesquisa(data);
    } catch (e) {
      console.log(e);
    }
  };

  const adicionarPesquisa = async () => {
    if (novaPesquisa == "") return;

    const pesquisa = {
      nome:" "
    };

    try {
      const { data } = await api.post("/Pesquisa", pesquisa);
      setListaPesquisa([...listaPesquisa, data]);
      setNovaPesquisa("");
    } catch (e) {
      console.log(e);
    }
  };

  const excluirPesquisa = async (id) => {
    try {
      const { data } = await api.delete("/Pesquisa/" + id);
      const novoArray = listaPesquisa.filter((pesquisa) => pesquisa.id != data.id);
      setListaPesquisa(novoArray);
    } catch (e) {
      console.log(e);
    }
  };

  const editarPesquisa = (item) => {
    setEstaEditando({ id: item.id });
    setNovaPesquisa(item.nome);
  };

  const salvarAlteracoes = () => {
    const tarefa = {
      id: estaEditando.id,
      nome: novaPesquisa
    };

    const arrayEditado = listaPesquisa.map((item) => {
      if (item.id == tarefa.id) {
        return tarefa;
      }
      return item;
    });

    setListaPesquisa(arrayEditado);
    setNovaPesquisa("");
    setEstaEditando({ id: 0 });
  };

  useEffect(() => {
    obterPesquisa();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>listaPesquisa</Text>
        <FontAwesome5
          style={{ paddingTop: 7 }}
          name="search"
          size={35}
          color="#000"
        />
      </View>

      <TextInput
        value={novaPesquisa}
        onChangeText={setNovaPesquisa}
        style={{
          backgroundColor: "#f1f1f1",
          borderRadius: 10,
          padding: 10,
          marginTop: 20,
          marginBottom: 15,
        }}
      />
      {!estaEditando.status ? (
        <Button title="Adicionar nova pesquisa" onPress={adicionarPesquisa} />
      ) : (
        <Button
          color="green"
          title="Salvar Pesquisa"
          onPress={salvarAlteracoes}
        />
      )}

<ListaPesquisa
        listaPesquisa={listaPesquisa}
        excluirPesquisa={excluirPesquisa}
        editarPesquisa={editarPesquisa}
      />
      
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  titulo: {
    color: "#000",
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
  },
});
