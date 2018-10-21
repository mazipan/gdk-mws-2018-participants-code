var summary = function () {
    let fisrtNumber = document.querySelector('input[name=first-number]').value;
    let lastNumber = document.querySelector('input[name=last-number]').value;

    if (isNaN(fisrtNumber) || isNaN(lastNumber)) {
        alert("You must insert number for equals");
        return 0;
    }

    document.getElementsByTagName('textarea')[0].value = Number(fisrtNumber) + Number(lastNumber);
    return 1;
}