/* global $, pcs*/

(function () {
    "use strict";

    var theTableBody = $('#contacts tbody'),
        contacts = [],
        dialog = $('#dialog'),
        firstNameInput = $('#firstName'),
        lastNameInput = $('#lastName'),
        emailInput = $('#email'),
        phoneInput = $('#phone'),
        addContactForm = $('#addContactForm');

    theTableBody.click(function (event) {
        if (event.target.nodeName === 'BUTTON') {
            console.log('Delete was clicked');
            var tr = $(event.target).closest('tr'),
                id = tr.data('id');
            $.post('deleteContact.php', { id: id }, function () {
                tr.remove();
                var index = contacts.findIndex(function (elem) { return elem.id === id; });
                contacts.splice(index, 1);
                console.log('deleted - contacts', contacts.length);
            }).fail(function (jqXHR) {
                console.log('Error:', jqXHR);
                pcs.messagebox.show('Error: ' + jqXHR.responseText);
            });
        }
    });

    function addContactToTable(contact) {
        if (contacts.find(function (c) {
            return c.id === contact.id;
        })) {
            return;
        }

        contacts.push(contact);

        if (contacts.length === 1) {
            theTableBody.empty();
        }

        $(
            '<tr>' +
            '<td>' + contact.firstName + '</td>' +
            '<td>' + contact.lastName + '</td>' +
            '<td>' + contact.email + '</td>' +
            '<td>' + contact.phone + '</td>' +
            '<td><button>delete</button></td>' +
            '</tr>'
        ).appendTo(theTableBody)
            .data('id', contact.id);
        /*.find('button').click(function () {
            console.log('Delete was clicked on ', contact, $(this).closest('tr'), 'contacts', contacts.length);
            var that = this;
            $.post('deleteContact.php', { id: contact.id }, function () {
                $(that).closest('tr').remove();
                var index = contacts.findIndex(function (elem) { return elem.id === contact.id; });
                contacts.splice(index, 1);
                console.log('deleted - contacts', contacts.length);
            }).fail(function (jqXHR) {
                console.log('Error:', jqXHR);
                pcs.messagebox.show('Error: ' + jqXHR.responseText);
            });
        });*/
    }

    $('#addContact').click(function () {
        dialog.show();
    });

    function hideDialog() {
        dialog.hide();
        addContactForm[0].reset();
    }

    addContactForm.submit(function (event) {
        var contact = {
            firstName: firstNameInput.val(),
            lastName: lastNameInput.val(),
            email: emailInput.val(),
            phone: phoneInput.val()
        };
        $.post('addContact2.php', JSON.stringify(contact), function (id) {
            contact.id = id;
            addContactToTable(contact);
        }).fail(function (jqXHR, a, b) {
            console.log('Error:', jqXHR, a, b);
            pcs.messagebox.show('Error: ' + jqXHR.responseText);
        });
        hideDialog();
        event.preventDefault();
    });

    $('#cancel').click(function () {
        hideDialog();
    });

    function load() {
        /*$.get('contacts.data', function (loadedContactsString) {
            console.log(loadedContactsString);
            var loadedContacts = JSON.parse(loadedContactsString);
            loadedContacts.forEach(function (contact) {
                addContact(contact);
            });*/
        /*$.getJSON('contacts.data', function (loadedContacts) {
            console.log(loadedContacts);
            loadedContacts.forEach(function (contact) {
                addContact(contact);
            });*/
        $.getJSON('getContacts.php', function (loadedContacts) {
            console.log(loadedContacts);
            loadedContacts.forEach(function (contact) {
                addContactToTable(contact);
            });
        }).fail(function (jqxhr) {
            alert(jqxhr.statusText);
        });
    }

    load();
    setInterval(load, 5000);
} ());