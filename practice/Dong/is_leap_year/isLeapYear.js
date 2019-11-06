function isLeapYear() {
    let year = parseInt(prompt('nhập vào năm bạn muốn kiểm tra '));
    if(year%4===0 && year%100!==0){
        alert(year + ' là năm nhuận');
    }else if(year%100===0 && year%400!==0 ){
        alert(year+ " không phải năm nhuận");
    }else if(year%100===0 && year%400===0){
        alert(year+ ' là năm nhuận');
    }
}