function kq() {
    let a = Number(document.getElementById("numberA").value);
    let b = Number(document.getElementById("numberB").value);
    let c = Number(document.getElementById("numberC").value);
    let Delta = b*b-4*a*c;
    let x1 = (-b - Math.sqrt(Delta))/(2*a);
    let x2 = (-b + Math.sqrt(Delta))/(2*a);
    let x = (-b)/(2*a);
    if (a ==0) {
        alert("A phải khác 0");
    } else if (Delta > 0) {
        document.getElementById("nghiem1").value =x1;
        document.getElementById("nghiem2").value =x2;
    } else if (Delta == 0) {
        document.getElementById("nghiem1").value =x;
    } else {
        alert("Phương trình vô nghiệm");
    }
}