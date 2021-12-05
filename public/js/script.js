class SelectCurrency {
    constructor() {
        this.leftSelect = document.querySelectorAll('select')[0];
        this.rightSelect = document.querySelectorAll('select')[1];

        this.disabledButton = document.querySelector("button");
    }

    allEventListeners() {
        this.leftSelect.addEventListener('change', this.leftSelectChange);
        this.rightSelect.addEventListener('change', this.rightSelectChange.bind(this));
    }

    leftSelectChange(e) {
        let selectedValue = e.target.value;

        console.log(e.target.value);

        let isDisabled = true;
    }

    rightSelectChange(e) {
        let selectedValue = e.target.value;

        console.log(e.target.value);

        this.checkDisabled(true, true);
    }


    checkDisabled(par1, par2) {
        if (par1 && par2 == true) {

            this.disabledButton.disabled = false;
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    let selectCurrency = new SelectCurrency();
    selectCurrency.allEventListeners();
})