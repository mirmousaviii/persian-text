function replaceChar(search, replace, subject) {
    let length = search.length;
    subject = subject.toString();

    for (let i = 0; i < length; i++) {
        subject = subject.split(search[i]).join(replace[i]);
    }

    return subject;
}

function persianNumbers(str) {
    let enums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let pnums = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return replaceChar(enums, pnums, str);
}

function persianPrice(num) {
    let str = Math.floor(num).toLocaleString();
    
    return this.persianNumbers(str);
}
