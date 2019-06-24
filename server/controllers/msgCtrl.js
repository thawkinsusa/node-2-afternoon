
const messages = [];
let messageId = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        messages.push({messageId, text, time});
        messageId++;
        res.status(200).send(messages);
    },
    read: (req, res) =>{
        res.status(200).send(messages);
    },
    update: (req, res) => {
     let {text} = req.body;
     let updateMessageId = req.param.messageId;
     let messageIndex = messages.findIndex(message => message.id == updateMessageId);

     messages[messageIndex] = {
         id: messages.id,
         text: text || messages.text,
         time: messages.time
     };
     res.status(200).send(messages)
        
    },
    
    delete:(req, res) => {
        const deleteId = req.param.id 
        messageIndex = messages.findIndex(message => message.id == deleteId)
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);       
    },
    
}
