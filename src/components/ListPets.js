import React from 'react';
import { Text,StyleSheet, View, ScrollView} from 'react-native';
import CardPets from './CardPets';

const ListPets = props => {
    
    const { content, onPressItem } = props
   
    const items = content.map(item => {
        return <CardPets  item={item}
            onPressItem={onPressItem}
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

export default ListPets;