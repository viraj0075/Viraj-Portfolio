import emailjs from 'emailjs-com';

export const sendEmail = (templateParams) => {
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const userID = import.meta.env.VITE_USER_ID;

  return emailjs.send(serviceID, templateID, templateParams, userID);
};
