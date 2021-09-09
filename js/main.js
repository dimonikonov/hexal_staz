function Sprawdz(form) {
    
    if(form.imie.value == '') {
        alert('Pole "Name" musi być wypełnione!');
        form.imie.focus();
        return false;
    }

    if(form.email.value == '') {
        alert('Pole "Email" musi być wypełnione!');
        form.email.focus();
        return false;
    }

    if(form.subject.value == '') {
        alert('Pole "Subject" musi być wypełnione!');
        form.subject.focus();
        return false;
    }

    if(form.text.value == '') {
        alert('Pole "Message" musi być wypełnione!');
        form.text.focus();
        return false;
    }

    return true;
}