// src/utils/sendEmail.js

export const sendEmail = async (formData) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(response)
    if (!response.ok) {
      throw new Error(data.text || 'Error in sending email');
    }

    return data; // Return the response data
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw error; 
  }
};
