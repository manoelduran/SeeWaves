import React, { useEffect } from 'react';
import BrandSvg from '../../assets/whitewave.svg';
import LogoSvg from '../../assets/whitelogo.svg';
import { useNavigation } from '@react-navigation/native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    interpolate,
    Extrapolate,
    runOnJS
} from 'react-native-reanimated';
import {
    Container

} from './styles';


export function Splash() {
    const navigation = useNavigation<any>();
    const splashAnimation = useSharedValue(0);

    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [0, -50],
                        Extrapolate.CLAMP
                    )
                }
            ],
        }
    })
    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [-50, 0],
                        Extrapolate.CLAMP
                    )
                }
            ]
        }
    })

    function startApp() {
        navigation.navigate('Home')
    }

    useEffect(() => {
        splashAnimation.value = withTiming(
            50,
            { duration: 1000 },
            () => {
                'worklet'
                runOnJS(startApp)();
            }
        );
    }, []);

    return (
        <Container>
            <Animated.View style={[brandStyle, { position: 'absolute' }]} >
                <BrandSvg width={180} height={180} />
            </Animated.View>
            <Animated.View style={[logoStyle, { position: 'absolute' }]}  >
                <LogoSvg width={180} height={20} />
            </Animated.View>
        </Container>
    );
}
