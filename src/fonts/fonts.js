import {useFonts} from 'expo-font'

export function shelter() {
    const fonts = useFonts({
        'shelter': require('../../assets/fonts/shelter.otf')
    })

    return fonts
}