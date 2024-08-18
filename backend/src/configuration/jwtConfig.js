import crypto from 'crypto'

//generate a random secret key
const secretKey = crypto.randomBytes(10).toString('hex')

const exportedSecretKey = {
    secretKey: secretKey
}

export default exportedSecretKey