import React from 'react';
import { Text,StyleSheet, ScrollView } from 'react-native';
import CardServicos from './CardServicos';

const ListServicos = props => {
    
    const { content, onPressItem, returnPage } = props
   
    const items = content.map(item => {
        return <CardServicos  item={item}
            onPressItem={onPressItem}
            return={returnPage}
        />
    })

    return (
        <ScrollView styles={styles.container} >
            {items}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B0B0B0',
    }
});

export default ListServicos;