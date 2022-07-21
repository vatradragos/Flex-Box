var images = new Array();

    images[0]="images/image-1.jpg";
    images[1]="images/image-2.jpg";
    images[2]="images/image-3.jpg";
    images[3]="images/image-4.jpg";
    images[4]="images/image-5.jpg";
    images[5]="images/image-6.jpg";
    images[6]="images/image-7.jpg";
    images[7]="images/image-8.jpg";
    images[8]="images/image-9.jpg";
    images[9]="images/image-10.jpg";

  var counter = 0;

  function changeImage(){
    
    document.getElementById("image-1").src = images[counter++ % images.length];

  }