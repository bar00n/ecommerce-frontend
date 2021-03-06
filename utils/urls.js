export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://ecommerce-backend-barun-hafidz.herokuapp.com'

/**
 * 
 * 
 * @param {any} image 
 */
export const fromImageToUrl = (image) => {
    if (!image) {
        return "/vercel.svg"
    }

    if (image.url.indexOf("/") === 0){
        return `${API_URL}${image.url}`
    }

    return image.url
}