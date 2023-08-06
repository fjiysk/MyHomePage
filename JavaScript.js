

// ■トップイメージのスライドショー■

function showImage(imageNo){
    document.getElementById("TopImage").src = topImageList[imageNo];
    // var thumbImages = 
}
function changeImage(){
    showImage(currentImage) ; 
    currentImage++ ;
    if (currentImage == topImageList.length){
        currentImage = 0;
    }
        
}

var topImageList = ["Image/SlideShow001.JPG","Image/SlideShow002.JPG","Image/SlideShow003.JPG"] ;

var currentImage =0 ;
setInterval(changeImage,5000) ;


// ■トップイメージのスライドショー■