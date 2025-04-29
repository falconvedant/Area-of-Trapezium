document.getElementById("calc").addEventListener("click", calcFunc);



function calcFunc() {
    var b1 = +document.getElementById("base1").value;
    var b2 = +document.getElementById("base2").value;
    var h = +document.getElementById("hei").value;
    var unit = document.getElementById("drop").value;
    areaOut = 1/2* (b1 + b2)* h;
    fullOut = areaOut.toFixed(2);
    fullSpanOut = `${fullOut} ${unit}²`;
    document.getElementById("outAr").innerHTML = fullSpanOut;
    document.getElementById("check").src = "img/checkm.png";
    document.getElementById("check").classList.add("checkClass");
    document.getElementById("outAr").classList.add("calcBtnClick");
    document.getElementById("base1").value = " ";
    document.getElementById("base2").value = " ";
    document.getElementById("hei").value = " ";
}

