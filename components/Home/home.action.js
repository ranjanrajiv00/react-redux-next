import * as actionType from './home.action.type'

export function loadImage() {
    return {
        type: actionType.LOAD_IMAGE
    }
}

export function loadImageSucess() {
    return {
        type: actionType.LOAD_IMAGE_SUCCESS
    }
}

export function loadImageFailure() {
    return {
        type: actionType.LOAD_IMAGE_FAILURE
    }
}