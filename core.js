(function () {
    let btnGenerate = document.querySelector('#loremButton');
    let btnRemove = document.querySelector('#btnRemove');
    let inputText = document.querySelector('#loremInput');
    
    let createParagraph = () => {
        if (isNaN(inputText.value) || inputText.value == '') {
            alert('A megadott érték nem szám, ezért nem felel meg.');
            inputText.value = '';
            inputText.focus();
        } else {
            for (let i = 1; i <= inputText.value; i++) {
                const para = document.createElement('p');
                para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada sed sapien id vulputate. Fusce auctor elit in odio mattis, ut maximus urna elementum. Fusce eget blandit nunc. Mauris nec metus augue. Mauris accumsan hendrerit vulputate. Donec in pellentesque magna. Fusce vel mauris a dolor aliquet congue sit amet ut diam. Praesent rhoncus quam sapien, quis ullamcorper ligula accumsan a. Aliquam tempor tortor quis mi ultrices feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dictum lacus quis massa consectetur porta.";
                document.body.append(para);
            }
        }
    }
    
    let removeParagraph = () => {
        const paras = document.querySelectorAll('p');
        for (let i = 0; i < paras.length; i++) {
            paras[i].parentNode.removeChild(paras[i]);
        }
        inputText.value = '';
        inputText.focus();
    }
    
    btnRemove.addEventListener('click', removeParagraph);
    btnGenerate.addEventListener('click', createParagraph);
})();