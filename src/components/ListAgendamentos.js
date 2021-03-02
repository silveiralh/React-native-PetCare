import React from 'react';
import { Text, StyleSheet, View, ScrollView, FlatList  } from 'react-native';
import CardAgendamento from './CardAgendamento';

const ListAgendamentos = props => {
    const completeContent = props
    
    const { content, onPressItem } = props

    const items = content.map(item => {
        return <CardAgendamento  item={item}
        onPressItem={onPressItem}/>
    })

    return (
        <ScrollView styles={styles.container}
          >
           {items}
  </ScrollView>
    )
    }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B0B0B0',
    }
});

export default ListAgendamentos;