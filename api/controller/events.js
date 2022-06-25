const fs = require("fs");
module.exports = {
  getEvents: (req, res) => {
    try {
      var events = fs.readFileSync("database/events.json");
      events = JSON.parse(events);

      res.status(200).send(events);
    } catch (e) {
      res.status(400).send(e);
    }
  },
};
