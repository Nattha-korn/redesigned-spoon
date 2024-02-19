function speed_sound(value){
    let speed_sound_answer = 331 + 0.6 * value
    document.getElementById("speed_sound").innerHTML = speed_sound_answer
    
}

function calculate_speed(value)
{
    let tempurature = value      //สมการในการคำนวน V = 331 + 0.6 *t       V = ความเร็วเสียงในอากาศ เป็นค่าคงคงที่      t = อุณหภูมิ
    document.getElementById("tepurature_answer").innerHTML = "อุณหภูมิ : " + (tempurature) + "°C"
    document.getElementById("speed_sound1").innerHTML = "อัตราเร็วเสียง : " + (V = 331 + 0.6 * tempurature) + " m/s"
}
calculate_speed(value)


