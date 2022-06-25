const fs = require("fs");
module.exports = {
  storeClient: (req, res) => {
    const { email, tel } = req.body;
    try {
      var emailsRegistered = fs.readFileSync("database/register_email.json");

      emailsRegistered = JSON.parse(emailsRegistered);

      emailsRegistered.push({ email: email, tel: tel });

      emailsRegistered = JSON.stringify(emailsRegistered);

      fs.writeFileSync("database/register_email.json", emailsRegistered);

      return res.status(200).send("Registro salvo!");
    } catch (e) {

      return res.status(400).send(e);
    }
  },
  register: (req, res) => {
    console.log(req.body)
    const { name, surname, email, password, address, cep, tel } = req.body;

    try {
      var clients = fs.readFileSync("database/clients.json");
      clients = JSON.parse(clients);

      if (clients.length > 0) {
        if (clients.filter((el) => el.email == email).length>0) {
          return res.status(400).send("Cliente já cadastrado!");
      }
    }

    clients.push({
        name: name,
        surname: surname,
        email: email,
        password: password,
        address: address,
        cep: cep,
        tel: tel,
      });

      clients = JSON.stringify(clients);

      fs.writeFileSync("database/clients.json", clients);

      return res.status(200).send("Usuário cadastrado com sucesso!");


    } catch (e) {
    console.log(e)
      return res.status(400).send(e);
    }
  },
  login: (req, res) => {
    const { email, password } = req.body;
    // try {
      var clients = fs.readFileSync("database/clients.json");
      clients = JSON.parse(clients);

      var login = clients.find((el) => el.email == email);
      if (login && login.password == password) {
          return res.status(200).json(login);
      } else {
          console.log("teste")
          return res.status(400).json({error:"Usuário/senha incorretos"});
      }
    // } catch (e) {
    //   return res.sendStatus(400).send(e);
    // }
  }
};
