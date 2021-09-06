import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, FlatList, ScrollView, TouchableOpacity } from 'react-native';
// Não possuem valor semântico (significado)
// Não possuem estilização própria
// Todos componentes possuem por padrão "display: flex"

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3
import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
      console.log('passei por aqui')
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Alan Shishido'
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159b4' />
      <SafeAreaView style={styles.container} >
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>

      </SafeAreaView>

      {/* < View style={styles.container}>
        {projects.map(project => (
          <Text style={styles.project} key={project.id}>{project.title}</Text>
        ))}
      </ View> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold'
  },
  project: {
    color: '#FFF',
    fontSize: 30
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})