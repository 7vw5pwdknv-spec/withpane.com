'use server'

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email');
  
  // Ensure variables are present
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey || !groupId) {
    console.error("Missing MailerLite Environment Variables");
    return { success: false, error: "Configuration Error" };
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: email,
        groups: [groupId], 
        status: 'active' // This ensures they are active immediately
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("MailerLite API Error:", data);
      return { success: false };
    }

    return { success: true };
  } catch (e) {
    console.error("Fetch Exception:", e);
    return { success: false };
  }
}
