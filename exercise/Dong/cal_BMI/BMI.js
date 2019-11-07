let weight = parseFloat(prompt('nhập vào cân nặng - kg'));
let height = parseFloat(prompt('nhập vào chiều cao - m'));
let BMI = weight / Math.pow(height,2);
function calBMI() {
    // console.log(weight);
    let result;
    if (BMI < 18.5) {
        result = 'underweight';
    } else if (BMI < 25 && BMI >= 18.5) {
        result = 'normal';
    } else if (BMI < 30 && BMI >= 25) {
        result = 'overweight';
    } else {
        result = 'obese';
    }
    alert(result);
}