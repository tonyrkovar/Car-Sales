export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const addFeature = feature => {
    // console.log(`adding feature ${feature.name}`)
    return { type: ADD_FEATURE, payload: feature }
}

export const removeFeature = features => {
    console.log(features)
    return { type: REMOVE_FEATURE, payload: features }
}