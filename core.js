let btnGenerate = document.getElementById('loremButton');

btnGenerate.addEventListener('click', function btnIsClicked() {
    let inputText = document.getElementById('loremInput');
    let txtResult = document.getElementById('resultTxt');

    let loremObj = 
        {
            "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada sed sapien id vulputate. Fusce auctor elit in odio mattis, ut maximus urna elementum. Fusce eget blandit nunc. Mauris nec metus augue. Mauris accumsan hendrerit vulputate. Donec in pellentesque magna. Fusce vel mauris a dolor aliquet congue sit amet ut diam. Praesent rhoncus quam sapien, quis ullamcorper ligula accumsan a. Aliquam tempor tortor quis mi ultrices feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dictum lacus quis massa consectetur porta."
        };

    if (isNaN(inputText.value) || inputText.value == '') {
        txtResult.style.color = "red";
        txtResult.innerHTML = "A bevitelimező értéke nem megfelelő!";
        inputText.value = '';
        inputText.focus();
    } else {
        txtResult.style.color = "black"
        for (let i = 1; i <= inputText.value; i++) {
            txtResult.innerHTML += loremObj.text + "<br><br>";
        }
        inputText.value = '';   
    }
    
})
