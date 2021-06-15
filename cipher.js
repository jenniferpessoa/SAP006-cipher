const cipher = {


    encode: function (mensage, offset) {
        let encrypt = 0
        let replaced = []
        let encryptword = ""

        for (let c = 0; c < mensage.length; c++) {
            let word = mensage.charAt(c)
            let codigoAsc = word.charCodeAt()
            
            if (codigoAsc >= 65 && codigoAsc <= 90) {
                encrypt = (((codigoAsc - 65 + offset) % 26) + 65)
                encryptword = String.fromCharCode(encrypt)

            } else if (codigoAsc >= 97 && codigoAsc <= 122) {
                encrypt = (((codigoAsc - 97 + offset) % 26) + 97)
                encryptword = String.fromCharCode(encrypt)

            } else {
                encryptword = String.fromCharCode(codigoAsc)
            }

            replaced.push(encryptword)
        }
        
        let answer = replaced.join('')
        return answer
      
    }

,
    decode: function (mensage, offset) {
        let encrypt = 0
        let replaced = []
        let encryptword = ""

        for (let c = 0; c < mensage.length; c++) {
            let word = mensage.charAt(c)
            let codigoAsc = word.charCodeAt()

            if (codigoAsc >= 65 && codigoAsc <= 90) {
                encrypt = (((codigoAsc - 90 - offset) % 26) + 90)
                encryptword = String.fromCharCode(encrypt)

            } else if (codigoAsc >= 97 && codigoAsc <= 122) {
                encrypt = (((codigoAsc - 122 - offset) % 26) + 122)
                encryptword = String.fromCharCode(encrypt)
            
            } else {
                encryptword = String.fromCharCode(codigoAsc)
            }    
            replaced.push(encryptword)            
        }
        let answer = replaced.join('')
        return answer
    }
}
export default cipher;
