const form = document.getElementById("adoptForm");
const submitButton = document.getElementById("submitButton");

form.addEventListener("input", function (){

     const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("Telephone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const addressType = document.getElementById("addressType").value;
    const amount = document.getElementById("amount").value;
    const place = document.querySelector('input[name="place"]:checked')?.value;
    if(firstName && lastName && phone && email && address && addressType && amount && place){
        submitButton.disabled = false;
    }else{
        submitButton.disabled = true;
    }

});

form.addEventListener("submit", function(e){

    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("Telephone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const addressType = document.getElementById("addressType").value;
    const amount = document.getElementById("amount").value;
    const place = document.querySelector('input[name="place"]:checked')?.value;
    const agree = document.getElementById("agree").checked;
    
    if (amount < 0 || amount > 100){
        alert("กรุณากรอกจำนวนสัตว์เลี้ยง 0-100 เท่านั้น");
        return;
    }
    if(!agree){
        alert("การส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข ทางเราจะมีการติดต่อกลับไปยังช่องทางที่ท่านได้ระบุไว้หากดำเนินการสำเร็จ");
        return;
    }

    alert(
        "ดำเนินการสำเร็จ\n\n" +
        "ชื่อ: " + firstName + " " + lastName + "\n" +
        "เบอร์โทร: " + phone + "\n" +
        "อีเมล์: " + email + "\n" +
        "ที่อยู่: " + address + "\n" +
        "ประเภทที่อยู่อาศัย: " + addressType + "\n" +
        "สัตว์เลี้ยงที่มีอยู่: " + amount + "\n" +
        "ประเภทที่เลี้ยงสัตว์: " + place
    );

});