import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/index'


const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const storeReducers = (state = initialState, action) => {
    // console.log('this is in reducer', action, state)
    switch (action.type) {
        case ADD_FEATURE:
            console.log('fart')

            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                },
                additionalFeatures: [...state.additionalFeatures.filter(feature => {
                    return !(feature.id === action.payload.id)
                })]
            }

            break;
        case REMOVE_FEATURE:
            console.log('REMOVE_FEATURE FIRES')
            return {
                ...state,
                additionalPrice: state.additionalPrice = action.payload.price,
                car: {
                    ...state.car,
                    features: [...state.car.features.filter(feature => {
                        return !(feature.id === action.payload.id)
                    })]
                },
                additionalFeatures: [...state.additionalFeatures, action.payload]
            }
            break
        default:
            return state;
    }
}