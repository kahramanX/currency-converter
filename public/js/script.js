class SelectCurrency {
    constructor() {
        this.leftSelect = document.querySelectorAll('select')[0];
        this.rightSelect = document.querySelectorAll('select')[1];
    }

    allEventListeners() {
        this.leftSelect.addEventListener('change', this.leftSelectChange);
        this.rightSelect.addEventListener('change', this.rightSelectChange);
    }

    leftSelectChange(e) {
        console.log(e.target.value);
    }
    rightSelectChange(e) {
        console.log(e.target.value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let selectCurrency = new SelectCurrency;
    selectCurrency.allEventListeners();
})