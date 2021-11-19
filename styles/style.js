import { Montserrat_100Thin, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { BackHandler, StyleSheet} from 'react-native';

export const gStyle = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        paddingTop: 60
    },
    title: {
        fontSize: 20,
        color: '#333',
        fontFamily: 'Montserrat_600SemiBold',
        textAlign: 'center'
    }
})