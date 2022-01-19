const image = document.getElementById("image"); // The image we want to classify
const result = document.getElementById("result"); // The result tag in the HTML
const probability = document.getElementById("probability"); // The probability tag in the HTML
const inp=document.getElementById('avatar')
const spinner=document.getElementsByClassName('loader')[0]
const reader = new FileReader();
// Initialize the Image Classifier method with MobileNet
reader.onload = (e) => {
  image.src = e.target.result;
};

inp.addEventListener('change',changeimg);
function changeimg(e){
console.log(e.target.files[0])
const f = e.target.files[0];
reader.readAsDataURL(f);
}
console.log(ml5)

function analyze(){
    
   spinner.style.display='block';

  ml5.imageClassifier("MobileNet")
  .then((classifier) => classifier.classify(image))
  .then((results) => {
      spinner.style.display = "none";
    result.innerText = results[0].label;
    probability.innerText = results[0].confidence.toFixed(4);
    console.log(result)
  });
}

  
