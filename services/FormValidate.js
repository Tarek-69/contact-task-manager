exports.checkValidate = (request) => {
  let a = 0;
  const form = {
    errorMessage: [],
    data: {
      lastName: request.lastName ?? "",
      firstName: request.firstName ?? "",
      company: request.company ?? "",
      address: request.address ?? "",
      phone: request.phone ?? "",
      email: request.email ?? "",
      sector: request.sector ?? "",
    },
  };
  // Gestions des ereurs
  if (form.data.lastName == "") {
    form.errorMessage[a] = 'Le champ "nom" ne peut-être vide';
    a++;
  }
  if (form.data.firstName == "") {
    form.errorMessage[a] = 'Le champ "prénom" ne peut-être vide';
    a++;
  }
  if (form.data.company == "") {
    form.errorMessage[a] = 'Le champ "société" ne peut-être vide';
    a++;
  }
  if (form.data.address == "") {
    form.errorMessage[a] = 'Le champ "adresse" ne peut-être vide';
    a++;
  }
  if (form.data.phone == "") {
    form.errorMessage[a] = 'Le champ "phone" ne peut-être vide';
    a++;
  }
  if (form.data.email == "") {
    form.errorMessage[a] = 'Le champ "email" ne peut-être vide';
    a++;
  }
  if (form.data.sector == "") {
    form.errorMessage[a] = 'Le champ "sector" ne peut-être vide';
    a++;
  }

  if (form.errorMessage.length == 0) {
    return form.data;
  } else {
    return form.errorMessage;
  }
};
