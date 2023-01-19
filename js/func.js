let img1 = document.querySelector('#img-1');
let img2 = document.querySelector('#img-2');
let img3 = document.querySelector('#img-3');
let img4 = document.querySelector('#img-4');

let btnDownload1 = document.getElementsByClassName('buy1')[0]
let btnDownload2 = document.getElementsByClassName('buy2')[0]
let btnDownload3 = document.getElementsByClassName('buy3')[0]
let btnDownload4 = document.getElementsByClassName('buy4')[0]
btnDownload1.addEventListener('click', () => {
    let imgPath = img1.getAttribute('src');
    let fileName = getFileName(imgPath);

    saveAs(imgPath, fileName);
    alert('Downloading...')
});

btnDownload2.addEventListener('click', () => {
    let imgPath = img2.getAttribute('src');
    let fileName = getFileName(imgPath);

    saveAs(imgPath, fileName);
    alert('Downloading...')
});

btnDownload3.addEventListener('click', () => {
    let imgPath = img3.getAttribute('src');
    let fileName = getFileName(imgPath);

    saveAs(imgPath, fileName);
    alert('Downloading...')
});

btnDownload4.addEventListener('click', () => {
    let imgPath = img4.getAttribute('src');
    let fileName = getFileName(imgPath);

    saveAs(imgPath, fileName);
    alert('Downloading...')
});


function getFileName(str){
    return str.substring(str.lastIndexOf('/')+1)
}