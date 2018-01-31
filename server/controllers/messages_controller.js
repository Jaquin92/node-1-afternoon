let messages = [];
let id = 0;

module.exports = {
  create: function(req, res, next) {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).json(messages);
  },
  Read: function(req, res, next) {
    return res.json(messages);
  },
  Update: function(req, res, next) {
    const updateID = req.params.id;
    const mIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[mIndex];

    messages[mIndex] = {
      id: messages[mIndex].id,
      text: req.body.text || messages[mIndex].text,
      time: message.time
    };
    res.status(200).json(messages);
  },

  Destroy: function(req, res, next) {
    const ID = req.params.id;
    const mIndex = messages.findIndex(message => message.id == ID);
    messages.splice(mIndex, 1);

    res.status(200).json(messages);
  }
};
