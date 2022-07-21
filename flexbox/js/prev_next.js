var img = new Array("images/image-1.jpg","images/image-2.jpg","images/image-3.jpg","images/image-4.jpg","images/image-5.jpg",
                    "images/image-6.jpg", "images/image-7.jpg","images/image-8.jpg","images/image-9.jpg","images/image-10.jpg");

var imgElement = document.getElementById("image-1");
var i = 0;
var imgLen = img.length;


        function next()
        {
            if(i < imgLen-1)
                {
                    i++;
                }
            else{
                    i=0;                
                }

                imgElement.src = img[i];                    
        }

        function prev()
        {
            if(i > 0)
                {
                    i--;
                }
            else
            {
                i = imgLen-1;
            }
                imgElement.src = img[i];                    
        }

