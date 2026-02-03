'use server'

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email');
  
  const apiKey = process.env.BUTTONDOWN_API_KEY;

  if (!apiKey) {
    console.error("Missing Buttondown API Key");
    return { success: false, error: "Configuration Error" };
  }

  if (!email || typeof email !== 'string') {
    return { success: false, error: "Invalid email" };
  }

  try {
    const response = await fetch('https://api.buttondown.com/v1/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${apiKey}`,
      },
      body: JSON.stringify({
        email: email,
        type: 'regular',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // 409 means already subscribed - still a "success" from user perspective
      if (response.status === 409) {
        return { success: true };
      }
      console.error("Buttondown API Error:", data);
      return { success: false };
    }

    return { success: true };
  } catch (e) {
    console.error("Fetch Exception:", e);
    return { success: false };
  }
}
