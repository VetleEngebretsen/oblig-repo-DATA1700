let billetter = [];

function kjopBillett() {
    let ut = "<table><tr>" + "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";

    // Definerer og henter valuen til film, antall, fornavn, etternavn, telefon og mail
    let film = document.getElementById('film').value;
    let antall = document.getElementById('antall').value;
    let fnavn = document.getElementById('fnavn').value;
    let enavn = document.getElementById('enavn').value;
    let telefon = document.getElementById('telefon').value;
    let email = document.getElementById('email').value;

    // Validering
    if (film === "Velg film her") {
        document.getElementById('filmError').textContent = "Vennligst velg en film";
        return;
    } else {
        document.getElementById('filmError').textContent = "";
    }

    if (antall === "" || antall <= 0) {
        document.getElementById('antallError').textContent = "Antall må være minst 1";
        return;
    } else {
        document.getElementById('antallError').textContent = "";
    }

    if (fnavn === "") {
        document.getElementById('fnavnError').textContent = "Vennligst skriv inn fornavnet ditt";
        return;
    } else {
        document.getElementById('fnavnError').textContent = "";
    }

    if (enavn === "") {
        document.getElementById('enavnError').textContent = "Vennligst skriv inn etternavnet ditt";
        return;
    } else {
        document.getElementById('enavnError').textContent = "";
    }

    if (telefon === "") {
        document.getElementById('telefonError').textContent = "Vennligst skriv inn telefonnummeret ditt";
        return;
    } else if (!nummerValid(telefon)) {
        document.getElementById('telefonError').textContent = "Vennligst skriv gyldig telefonnummer (8 siffer)";
        return;
    } else {
        document.getElementById('telefonError').textContent = "";
    }

    if (email === "") {
        document.getElementById('emailError').textContent = "Vennligst skriv inn e-postadressen din";
        return;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = "Ugyldig e-postadresse";
        return;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Oppretter billettobjekt
    let billett = {
        film: film,
        antall: antall,
        fnavn: fnavn,
        enavn: enavn,
        telefon: telefon,
        email: email
    };

    // Legg til billetten i listen
    billetter.push(billett);

    // Oppdaterer tabellen / skriver ut billetten
    for (let p of billetter) {
    ut += "<tr>";
    ut += "<td>" + p.film + "</td><td>" + p.antall + "</td><td>" + p.fnavn + "</td><td>" + p.enavn + "</td>" +
        "<td>" + p.telefon + "</td><td>" + p.email + "</td>";
    ut += "</tr>";
    }

    // Oppdaterer visningen
    document.getElementById('billettListe').innerHTML = ut;

    // Tømmer inputfeltene
    document.getElementById('film').value = "Velg film her";
    document.getElementById('antall').value = "";
    document.getElementById('fnavn').value = "";
    document.getElementById('enavn').value = "";
    document.getElementById('telefon').value = "";
    document.getElementById('email').value = "";
}

// Sletter visningen av billettene
function slettAlleBilletter() {
    billetter = [];
    document.getElementById('billettListe').innerHTML = "";
}

function isValidEmail(email) {
    // e-post validering - gjør at brukeren må ha med alfakrøll og punktum
    return /\S+@\S+\.\S+/.test(email);
}

function nummerValid(telefon) {
    // telefon validering - gjør at brukeren må ha 8 siffer 
    return telefon.match(/\d/g).length === 8;
}