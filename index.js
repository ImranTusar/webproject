var circle = document.getElementById("circle");
        var up = document.getElementById("up");
        var dn = document.getElementById("dn");

        var rotateValue =circle.style.transform;
        var rotateSum;
        up.onclick=function(){
            rotateSum = rotateValue +"rotate(-90deg)";
            circle.style.transform=rotateSum;
            rotateValue=rotateSum;
        }
        dn.onclick=function(){
            rotateSum = rotateValue +"rotate(90deg)";
            circle.style.transform=rotateSum;
            rotateValue=rotateSum;
        }