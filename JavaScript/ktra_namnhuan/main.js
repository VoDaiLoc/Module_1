let N = parseInt(prompt('Nhập vào 1 năm bất kỳ:'))
if ((N%400==0)|| (N%4==0 && N%100!=0)) {
    alert(N+ " Là năm nhuận")
} else {
    alert(N+ ' Không phải là năm nhuận')
}