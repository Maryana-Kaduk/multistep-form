const global = {
    currentPage: 0,
    
    buttonStepNumber: [...document.querySelectorAll('nav .step__number')],
    nameInput: document.querySelector('form#personal__info input#name'),
    emailInput: document.querySelector('form#personal__info input#email'),
    phoneNumberInput: document.querySelector('form#personal__info input#phoneNumber'),

    form: document.querySelector('.form__wrapper form>div'),

    nextStep: document.querySelector('.nextStep'),
    previousStep: document.querySelector('.previousStep'),

    selectInfoYearlyFree: [],
    selectInfoBillingInputsRadio: [],
    selectInfoBillingPlanRadios: [],
    selectInfoBillingText: [],
    selectInfoPriceNumbers: [],
    selectInfoPricePlan: [],
    checkboxes: [],
    checkboxesPrice: [],
    choosedPrice: [],
    choosedPriceWithEnding: [],
    changeButton: document.querySelector('form#summary button.change')
}

const checkingPage = () => {
    if(global.currentPage === 0) {
        global.nextStep.disabled = true
        global.buttonStepNumber[0].classList.add('step__number-selected')
        global.buttonStepNumber[1].classList.remove('step__number-selected')
        global.buttonStepNumber[2].classList.remove('step__number-selected')
        global.buttonStepNumber[3].classList.remove('step__number-selected')

        global.form.parentNode.parentNode.classList.add('first-step')
        global.form.parentNode.parentNode.classList.remove('second-step')
        global.form.parentNode.parentNode.classList.remove('third-step')
        global.form.parentNode.parentNode.classList.remove('fourth-step')

        global.form.parentNode.setAttribute('id', 'personal__info')
        global.form.innerHTML = `<article class="form__text">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        </article>
        <article class="form__content">
        <div class="input__wrapper">
            <label for="name" class="input__text">Name</label>
            <input type="text" class="input" id="name" name="name" placeholder="e.g. Stephen King">

            <span class="error__text"></span>
        </div>
        <div class="input__wrapper">
            <label for="email" class="input__text">Email Address</label>
            <input type="email" class="input" id="email" name="email" placeholder="e.g. stephenking@lorem.com">

            <span class="error__text"></span>
        </div>
        <div class="input__wrapper">
            <label for="phoneNumber" class="input__text">Phone Number</label>
            <input type="tel" class="input" id="phoneNumber" name="phoneNumber" placeholder="e.g. +1 234 567 890">

            <span class="error__text"></span>
        </div>
        </article>`

        global.previousStep.textContent = ''
        
        global.nextStep.classList.remove('confirmButton')
        global.nextStep.classList.add('nextStep')

        global.nextStep.textContent = 'Next Step'

        global.nameInput = document.querySelector('form#personal__info input#name')
        global.emailInput = document.querySelector('form#personal__info input#email')
        global.phoneNumberInput = document.querySelector('form#personal__info input#phoneNumber')

        inputsInputEvent()
        
    } else if(global.currentPage === 1) {
        global.buttonStepNumber[0].classList.remove('step__number-selected')
        global.buttonStepNumber[1].classList.add('step__number-selected')
        global.buttonStepNumber[2].classList.remove('step__number-selected')
        global.buttonStepNumber[3].classList.remove('step__number-selected')

        global.form.parentNode.parentNode.classList.add('first-step')
        global.form.parentNode.parentNode.classList.remove('second-step')
        global.form.parentNode.parentNode.classList.remove('third-step')
        global.form.parentNode.parentNode.classList.remove('fourth-step')

        global.form.parentNode.setAttribute('id', 'select__plan')
        global.form.innerHTML = `<article class="form__text">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        </article>
        <article class="form__content">
        <section class="choosing__plan">
            <article class="plan plan-arcade">
                <input type="radio" name="plan" id="arcade" checked>
                <label for="arcade">
                    <img src="./assets/icons/arcade.svg" alt="icon">
                    <div class="plan__text-wrapper">
                        <h2 class="heading">Arcade</h2>
                        <p class="price">$<span class="price__number">9</span>/<span class="price__plan">mo</span></p>
                        <span class="yearly__free"></span>
                    </div>
                </label>
            </article>
            <article class="plan plan-advanced">
                <input type="radio" name="plan" id="advanced">
                <label for="advanced">
                    <img src="./assets/icons/advanced.svg" alt="icon">
                    <div class="plan__text-wrapper">
                        <h2 class="heading">Advanced</h2>
                        <p class="price">$<span class="price__number">12</span>/<span class="price__plan">mo</span></p>
                        <span class="yearly__free"></span>
                    </div>
                </label>
            </article>
            <article class="plan plan-pro">
                <input type="radio" name="plan" id="pro">
                <label for="pro">
                    <img src="./assets/icons/pro.svg" alt="icon">
                    <div class="plan__text-wrapper">
                        <h2 class="heading">Pro</h2>
                        <p class="price">$<span class="price__number">15</span>/<span class="price__plan">mo</span></p>
                        <span class="yearly__free"></span>
                    </div>
                </label>
            </article>
        </section>
        <section class="billing">
            <article class="billing__content">
                <label for="monthly-radio" class="choose__billing" id="monthly" style="color: #022959;">Monthly</label>
                <div class="radios">
                    <input type="radio" name="chosing__billing-radio" id="monthly-radio" checked>
                    <input type="radio" name="chosing__billing-radio" id="yearly-radio">
                </div>
                <label for="yearly-radio" class="choose__billing" id="yearly">Yearly</label>
            </article>
        </section>
        </article>`

        global.previousStep.textContent = 'Go Back'
        
        global.nextStep.classList.remove('confirmButton')
        global.nextStep.classList.add('nextStep')

        global.nextStep.textContent = 'Next Step'
        
        global.selectInfoYearlyFree = [...document.querySelectorAll('.yearly__free')]
        global.selectInfoBillingInputsRadio = [...document.querySelectorAll('input[name="chosing__billing-radio"]')]
        global.selectInfoBillingPlanRadios = [...document.querySelectorAll('input[name="plan"]')]
        global.selectInfoBillingText = [...document.querySelectorAll('.choose__billing')]
        global.selectInfoPriceNumbers = [...document.querySelectorAll('.price__number')]
        global.selectInfoPricePlan = [...document.querySelectorAll('.price__plan')]

        selectInfo()
    } else if(global.currentPage === 2) {
        global.buttonStepNumber[0].classList.remove('step__number-selected')
        global.buttonStepNumber[1].classList.remove('step__number-selected')
        global.buttonStepNumber[2].classList.add('step__number-selected')
        global.buttonStepNumber[3].classList.remove('step__number-selected')

        global.form.parentNode.parentNode.classList.add('first-step')
        global.form.parentNode.parentNode.classList.remove('second-step')
        global.form.parentNode.parentNode.classList.remove('third-step')
        global.form.parentNode.parentNode.classList.remove('fourth-step')

        global.form.parentNode.setAttribute('id', 'select__service')
        global.form.innerHTML = `<article class="form__text">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        </article>
        <article class="form__content">
        <label class="chooseService checkbox-checked" for="service">
            <article class="chooseServiceWrapper">
                <input type="checkbox" name="service" id="service" checked>
                <div class="chooseServiceText">
                    <h2>Online service</h2>
                    <p>Access to multiplayer games</p>
                </div>
            </article>
            <p class="chooseServicePrice">+$<span class="chooseServicePriceNumber">${localStorage.getItem('planId') === 'monthly-radio' ? '1' : '10'}</span>/<span class="chooseServicePricePlan">${localStorage.getItem('planId') === 'monthly-radio' ? 'mo' : 'yr'}</span></p>
        </label>
        <label class="chooseService" for="storage">
            <article class="chooseServiceWrapper">
                <input type="checkbox" name="storage" id="storage">
                <div class="chooseServiceText">
                    <h2>Larger storage</h2>
                    <p>Extra 1TB of cloud save</p>
                </div>
            </article>
            <p class="chooseServicePrice">+$<span class="chooseServicePriceNumber">${localStorage.getItem('planId') === 'monthly-radio' ? '2' : '20'}</span>/<span class="chooseServicePricePlan">${localStorage.getItem('planId') === 'monthly-radio' ? 'mo' : 'yr'}</span></p>
        </label>
        <label class="chooseService" for="profile">
            <article class="chooseServiceWrapper">
                <input type="checkbox" name="profile" id="profile">
                <div class="chooseServiceText">
                    <h2>Customizable profile</h2>
                    <p>Custom theme on your profile</p>
                </div>
            </article>
            <p class="chooseServicePrice">+$<span class="chooseServicePriceNumber">${localStorage.getItem('planId') === 'monthly-radio' ? '2' : '20'}</span>/<span class="chooseServicePricePlan">${localStorage.getItem('planId') === 'monthly-radio' ? 'mo' : 'yr'}</span></p>
        </label>
        </article>`

        global.previousStep.textContent = 'Go Back'

        global.nextStep.classList.remove('confirmButton')
        global.nextStep.classList.add('nextStep')

        global.nextStep.textContent = 'Next Step'

        global.checkboxes = [...document.querySelectorAll('form#select__service input[type="checkbox"')]
        global.checkboxesPrice = [...document.querySelectorAll('form#select__service p.chooseServicePrice')]
        selectService()
    } else if(global.currentPage === 3) {
        global.buttonStepNumber[0].classList.remove('step__number-selected')
        global.buttonStepNumber[1].classList.remove('step__number-selected')
        global.buttonStepNumber[2].classList.remove('step__number-selected')
        global.buttonStepNumber[3].classList.add('step__number-selected')

        global.form.parentNode.parentNode.classList.remove('first-step')
        global.form.parentNode.parentNode.classList.remove('second-step')
        global.form.parentNode.parentNode.classList.remove('third-step')
        global.form.parentNode.parentNode.classList.add('fourth-step')

        global.form.parentNode.setAttribute('id', 'summary')

        global.form.innerHTML = `
        <article class="form__text">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming..</p>
        </article>
        <article class="form__content">
            <section class="form__content-wrapper">
                <div class="form__wrapper-background">
                    <section class="flex plan">
                        <div>
                            <h3>${localStorage.getItem('plan')}</h3>
                            <button class='change' type="button">Change</button>
                        </div>
                        <h4>${localStorage.getItem('choosedPriceWithEnding')}</h4>
                    </section>
                    <section class="flex service">
                        <p>${localStorage.getItem('serviceChecked') === 'true' ? 'Online service' : ''}</p>
                        <p class="price">${localStorage.getItem('serviceCheckedPriceWithEnding')}</p>
                    </section>
                    <section class="flex storage">
                        <p>${localStorage.getItem('storageChecked') === 'true' ? 'Larger storage' : ''}</p>
                        <p class="price">${localStorage.getItem('storageCheckedPriceWithEnding')}</p>
                    </section>
                    <section class="flex profile">
                        <p>${localStorage.getItem('profileChecked') === 'true' ? 'Customizable profile' : ''}</p>
                        <p class="price">${localStorage.getItem('profileCheckedPriceWithEnding')}</p>
                    </section>
                </div>
                <p class="total flex"><span class="text">Total (per ${localStorage.getItem('planId') === 'monthly-radio' ? 'month' : 'year'})</span><span class="total__price">$${Number(localStorage.getItem('choosedPrice')) + Number(localStorage.getItem('serviceCheckedPrice')) + Number(localStorage.getItem('storageCheckedPrice')) + Number(localStorage.getItem('profileCheckedPrice'))}${localStorage.getItem('planId') === 'monthly-radio' ? '/mo' : '/yr'}</span></p>
            </section>
        </article>`
        
        if(document.querySelector('form#summary section.flex.service p.price').textContent === '' && document.querySelector('form#summary section.flex.storage p.price').textContent === '' && document.querySelector('form#summary section.flex.profile p.price').textContent === '') {
            document.querySelector('form#summary section.flex.plan').classList.remove('border')
            document.querySelector('form#summary section.flex.storage').style.marginTop = '0px'
            document.querySelector('form#summary section.flex.profile').style.marginTop = '0px'
        } else {
            document.querySelector('form#summary section.flex.plan').classList.add('border')
            document.querySelector('form#summary section.flex.storage').style.marginTop = document.querySelector('form#summary section.flex.service p.price').textContent === '' ? '0px' : '10px'
            document.querySelector('form#summary section.flex.profile').style.marginTop = document.querySelector('form#summary section.flex.storage p.price').textContent === '' || document.querySelector('form#summary section.flex.profile p.price').textContent === '' ? '0px' : '10px'
        }

        global.nextStep.classList.add('confirmButton')
        global.nextStep.classList.remove('nextStep')

        global.nextStep.textContent = 'Confirm'

        global.changeButton = document.querySelector('form#summary button.change')
        changeButtonClicked()
    } else if(global.currentPage === 4) {
        global.form.parentNode.setAttribute('id', 'thankYou')

        global.form.innerHTML = `
        <img src="./assets/icons/done.svg" class="done">
        <h1>Thank you, ${localStorage.getItem('name')}!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>`

        document.querySelector('article.buttons').remove()
    }
}

function changeButtonClicked() {
    global.changeButton.addEventListener('click', () => {
        global.currentPage = 1
        checkingPage()

        global.nextStep.textContent = 'Come Back'
    })
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function logDataFromLocalStorage() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phoneNumber = localStorage.getItem('phoneNumber');

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
}

global.nextStep.disabled = true;

function validateName(name) {
    return name.trim().length > 0;
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validatePhoneNumber(phone) {
    if(phone.match(/\+(\d{1,4})(\s|\-)(\d{1,4})(\s|\-)(\d{1,4})(\s|\-)(\d{1,4})/) || phone.match(/\+\d{6,16}/) || phone.match(/\d{6,16}/) || phone.match(/(\d{1,4})(\s|\-)(\d{1,4})(\s|\-)(\d{1,4})(\s|\-)(\d{1,4})/)) {
        return true
    } else {
        return false
    }
};

function updateErrorMessage(input, isValid) {
    const errorText = input.nextElementSibling;
    errorText.textContent = isValid ? '' : 'Invalid input';

    input.classList = isValid ? 'input': 'input error'
}

function checkFieldValidity(inputElement) {
    let isValid = false;
    switch (inputElement) {
        case global.nameInput:
            isValid = validateName(inputElement.value);
            break;
        case global.emailInput:
            isValid = validateEmail(inputElement.value);
            break;
        case global.phoneNumberInput:
            isValid = validatePhoneNumber(inputElement.value);
            break;
        default:
            break;
    }
    updateErrorMessage(inputElement, isValid);
}

function checkFormValidity() {
    const isNameValid = validateName(global.nameInput.value);
    const isEmailValid = validateEmail(global.emailInput.value);
    const isPhoneNumberValid = validatePhoneNumber(global.phoneNumberInput.value);

    global.nextStep.disabled = !(isNameValid && isEmailValid && isPhoneNumberValid);
}

function inputsInputEvent() {
    global.nameInput.addEventListener('input', () => {
        checkFieldValidity(global.nameInput);
        checkFormValidity();
        saveToLocalStorage('name', global.nameInput.value);
    });
    global.emailInput.addEventListener('input', () => {
        checkFieldValidity(global.emailInput);
        checkFormValidity();
        saveToLocalStorage('email', global.emailInput.value);
    });
    global.phoneNumberInput.addEventListener('input', () => {
        checkFieldValidity(global.phoneNumberInput);
        checkFormValidity();
        saveToLocalStorage('phoneNumber', global.phoneNumberInput.value);
    });
}

inputsInputEvent()

global.nextStep.addEventListener('click', () => {
    if(global.nextStep.classList.contains('confirmButton')) {
        global.currentPage++
    } else if(global.nextStep.textContent === 'Come Back') {
        global.currentPage = 3
    } else {
        logDataFromLocalStorage()
        global.currentPage++
    }
    checkingPage()
});

global.previousStep.addEventListener('click', () => {
    global.currentPage--
    checkingPage()
})

const selectInfo = () => {
    saveToLocalStorage('planId', 'monthly-radio')
    saveToLocalStorage('plan', 'Arcade')
    global.choosedPrice = [...document.querySelectorAll('input[name="plan"] + label p.price span.price__number')]
    global.choosedPriceWithEnding = [...document.querySelectorAll('input[name="plan"] + label p.price')]
    saveToLocalStorage('choosedPrice', global.choosedPrice[0].textContent)
    saveToLocalStorage('choosedPriceWithEnding', global.choosedPriceWithEnding[0].textContent)

    saveToLocalStorage('serviceCheckedPrice', `${localStorage.getItem('serviceChecked') === 'true' ? '1' : ''}`)
    saveToLocalStorage('storageCheckedPrice', `${localStorage.getItem('storageChecked') === 'true' ? '2' : ''}`)
    saveToLocalStorage('profileCheckedPrice', `${localStorage.getItem('profileChecked') === 'true' ? '2' : ''}`)

    saveToLocalStorage(`serviceCheckedPriceWithEnding`, `${localStorage.getItem('serviceChecked') === 'true' ? '+$1/mo' : ''}`)
    saveToLocalStorage('storageCheckedPriceWithEnding', `${localStorage.getItem('storageChecked') === 'true' ? '+$2/mo' : ''}`)
    saveToLocalStorage('profileCheckedPriceWithEnding', `${localStorage.getItem('profileChecked') === 'true' ? '+$2/mo' : ''}`)

    for(const radio of global.selectInfoBillingInputsRadio) {
        radio.addEventListener('click', () => {
            if(radio.getAttribute('id') === 'monthly-radio') {
                global.selectInfoBillingText[0].style.color = '#022959'
                global.selectInfoBillingText[1].style.color = '#9699AA'
    
                global.selectInfoPriceNumbers[0].textContent = '9'
                global.selectInfoPriceNumbers[1].textContent = '12'
                global.selectInfoPriceNumbers[2].textContent = '15'
    
                global.selectInfoPricePlan.forEach(pricePlan => {
                    pricePlan.textContent = 'mo'                
                });
                
                let plan = document.querySelector('input[name="plan"]:checked').getAttribute('id')

                saveToLocalStorage('plan', plan.charAt(0).toUpperCase() + plan.slice(1))
                saveToLocalStorage('choosedPrice', document.querySelector('input[name="plan"]:checked + label p.price span.price__number').textContent)
                saveToLocalStorage('choosedPriceWithEnding', document.querySelector('input[name="plan"]:checked + label p.price').textContent)

                global.selectInfoYearlyFree.forEach(yearlyFreeText => {
                    yearlyFreeText.textContent = ''
                })

                saveToLocalStorage('serviceCheckedPrice', `${localStorage.getItem('serviceChecked') === 'true' ? '1' : ''}`)
                saveToLocalStorage('storageCheckedPrice', `${localStorage.getItem('storageChecked') === 'true' ? '2' : ''}`)
                saveToLocalStorage('profileCheckedPrice', `${localStorage.getItem('profileChecked') === 'true' ? '2' : ''}`)
        
                saveToLocalStorage(`serviceCheckedPriceWithEnding`, `${localStorage.getItem('serviceChecked') === 'true' ? '+$1/mo' : ''}`)
                saveToLocalStorage('storageCheckedPriceWithEnding', `${localStorage.getItem('storageChecked') === 'true' ? '+$2/mo' : ''}`)
                saveToLocalStorage('profileCheckedPriceWithEnding', `${localStorage.getItem('profileChecked') === 'true' ? '+$2/mo' : ''}`)
            } else if(radio.getAttribute('id') === 'yearly-radio') {
                global.selectInfoBillingText[1].style.color = '#022959'
                global.selectInfoBillingText[0].style.color = '#9699AA'
    
                global.selectInfoPriceNumbers[0].textContent = '90'
                global.selectInfoPriceNumbers[1].textContent = '120'
                global.selectInfoPriceNumbers[2].textContent = '150'
    
                global.selectInfoPricePlan.forEach(pricePlan => {
                    pricePlan.textContent = 'yr'                
                });
                
                let plan = document.querySelector('input[name="plan"]:checked').getAttribute('id')

                saveToLocalStorage('plan', plan.charAt(0).toUpperCase() + plan.slice(1))
                saveToLocalStorage('choosedPrice', document.querySelector('input[name="plan"]:checked + label p.price span.price__number').textContent)
                saveToLocalStorage('choosedPriceWithEnding', document.querySelector('input[name="plan"]:checked + label p.price').textContent)

                global.selectInfoYearlyFree.forEach(yearlyFreeText => {
                    yearlyFreeText.textContent = '2 months free'
                })

                
                saveToLocalStorage('serviceCheckedPrice', `${localStorage.getItem('serviceChecked') === 'true' ? '10' : ''}`)
                saveToLocalStorage('storageCheckedPrice', `${localStorage.getItem('storageChecked') === 'true' ? '20' : ''}`)
                saveToLocalStorage('profileCheckedPrice', `${localStorage.getItem('profileChecked') === 'true' ? '20' : ''}`)
    
                saveToLocalStorage(`serviceCheckedPriceWithEnding`, `${localStorage.getItem('serviceChecked') === 'true' ? '+$10/yr' : ''}`)
                saveToLocalStorage('storageCheckedPriceWithEnding', `${localStorage.getItem('storageChecked') === 'true' ? '+$20/yr' : ''}`)
                saveToLocalStorage('profileCheckedPriceWithEnding', `${localStorage.getItem('profileChecked') === 'true' ? '+$20/yr' : ''}`)
            }
            saveToLocalStorage('planId', radio.getAttribute('id'))
        })
    }
    for(const radioPlan of global.selectInfoBillingPlanRadios) {
        radioPlan.addEventListener('click', () => {
            if(radioPlan.getAttribute('id') === 'arcade') {
                saveToLocalStorage('plan', 'Arcade')
                saveToLocalStorage('choosedPrice', global.choosedPrice[0].textContent)
                saveToLocalStorage('choosedPriceWithEnding', global.choosedPriceWithEnding[0].textContent)
            } else if(radioPlan.getAttribute('id') === 'advanced') {
                saveToLocalStorage('plan', 'Advanced')
                saveToLocalStorage('choosedPrice', global.choosedPrice[1].textContent)
                saveToLocalStorage('choosedPriceWithEnding', global.choosedPriceWithEnding[1].textContent)
            } else if(radioPlan.getAttribute('id') === 'pro') {
                saveToLocalStorage('plan', 'Pro')
                saveToLocalStorage('choosedPrice', global.choosedPrice[2].textContent)
                saveToLocalStorage('choosedPriceWithEnding', global.choosedPriceWithEnding[2].textContent)
            }
            
        })
    }
}

const selectService = () => {
    for(const checkbox of global.checkboxes) {
        saveToLocalStorage('serviceChecked', true)
        saveToLocalStorage('storageChecked', false)
        saveToLocalStorage('profileChecked', false)
        
        saveToLocalStorage('serviceCheckedPrice', `${localStorage.getItem('planId') === 'monthly-radio' ? '1' : '10'}`)
        saveToLocalStorage('storageCheckedPrice', '')
        saveToLocalStorage('profileCheckedPrice', '')

        saveToLocalStorage(`serviceCheckedPriceWithEnding`, `${localStorage.getItem('planId') === 'monthly-radio' ? '+$1/mo' : '+$10/yr'}`)
        saveToLocalStorage('storageCheckedPriceWithEnding', '')
        saveToLocalStorage('profileCheckedPriceWithEnding', '')
        checkbox.addEventListener('click', () => {
            if (checkbox.checked) {
                // global.nextStep.disabled = false
                checkbox.parentNode.parentNode.classList.add('checkbox-checked')
            } else {
                // global.nextStep.disabled = (!checkboxes[0].checked && !checkboxes[1].checked && !checkboxes[2].checked)
                checkbox.parentNode.parentNode.classList.remove('checkbox-checked')
            }
            saveToLocalStorage(`${checkbox.getAttribute('id')}CheckedPrice`, checkbox.checked ? checkbox.parentNode.parentNode.children[1].children[0].textContent : '')
            saveToLocalStorage(`${checkbox.getAttribute('id')}CheckedPriceWithEnding`, checkbox.checked ? checkbox.parentNode.parentNode.children[1].textContent : '')
            saveToLocalStorage(`${checkbox.getAttribute('id')}Checked`, checkbox.checked)
        })
    }
}