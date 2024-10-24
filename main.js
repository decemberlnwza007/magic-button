function handleSubmit(){
    try{
        const input = document.getElementById('input');
        const result = document.getElementById('result');

        input.innerHTML = input.value
        result.innerHTML = input.value;

        console.log(input.value);
    }catch(error){
        console.error(error);
    }
}