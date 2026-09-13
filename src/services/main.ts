export default function passwordGenerate (){
    let password : string = "";
    let characterss : string = "Aa@$#123456789abcdefghijFfGHIJKkLMNOPpZz!";
    let passwordLength = 8;

    for (let i = 0; i < passwordLength; i++) {
        password += characterss.charAt(
            Math.floor(Math.random() * characterss.length)
        )
    }
    console.log(password);
    return password;
}