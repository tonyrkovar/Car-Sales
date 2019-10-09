export const ADD_FEATURE = 'ADD_FEATURE'

export const addFeature = feature => {
    console.log(`adding feature ${feature}`)
    return { type: ADD_FEATURE, payload: feature }
}