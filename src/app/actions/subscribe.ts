'use server'

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email');
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        groups: [groupId], // Adds them to "Newsletter Subscribers" immediately
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to subscribe');
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}
