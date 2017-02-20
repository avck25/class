(function () {
    "use strict";

    function get(id) {
        return document.getElementById(id);
    }

    var theTable = get('contacts'),
        contacts = [],
        dialog = get('dialog'),
        firstNameInput = get('firstName'),
        lastNameInput = get('lastName'),
        emailInput = get('email'),
        phoneInput = get('phone'),
        addContactForm = get('addContactForm');

    function addContact(contact) {
        contacts.push(contact);

        if (contacts.length === 1) {
            theTable.deleteRow(1);
        }

        var row = theTable.insertRow(),
            firstNameCell = row.insertCell(),
            lastNameCell = row.insertCell(),
            emailCell = row.insertCell(),
            phoneCell = row.insertCell();

        firstNameCell.innerHTML = contact.firstName;
        lastNameCell.innerHTML = contact.lastName;
        emailCell.innerHTML = contact.email;
        phoneCell.innerHTML = contact.phone;
    }

    get('addContact').addEventListener('click', function () {
        //addContact();
        dialog.style.display = "inline-block";
    });

    function hideDialog() {
        dialog.style.display = "none";
        /*firstNameInput.value = '';
        lastNameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';*/
        addContactForm.reset();
    }

    addContactForm.addEventListener('submit', function (event) {
        var contact = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };
        addContact(contact);
        hideDialog();
        event.preventDefault();
    });

    get('cancel').addEventListener('click', function () {
        hideDialog();
    });
} ());