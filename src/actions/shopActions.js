export const ADD_FEATURE = 'ADD_FEATURE'

export const addFeature = feature => {
    console.log(`adding feature ${feature.name}`)
    return { type: ADD_FEATURE, payload: feature }
}