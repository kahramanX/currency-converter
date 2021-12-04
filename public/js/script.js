class SelectCurrency {
    constructor() {
        this.select = document.querySelectorAll('select')[0];
        console.log(this.select);
    }

    allEventListeners() {
        console.log(this.select);
        this.select.addEventListener('change', this.selectChange);
    }

    selectChange(e) {
        console.log(e.target.value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let selectCurr = new SelectCurrency;
    selectCurr.allEventListeners();
})