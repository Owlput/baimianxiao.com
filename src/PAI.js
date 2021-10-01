const apiUrl = "http://localhost:7000"
export default function APIGet(target) {
  switch (target.type) {
      case thumbs : {
          return fetch(`${apiUrl}/data/imageAllThumbs`)
      }
      case artwork :{
          return fetch(`${apiUrl}/image/${target.payload.pri}`)
      }
      default : {
        throw new Error('Invalid request type!')
      }
    }
}
