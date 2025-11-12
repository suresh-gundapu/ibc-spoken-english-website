import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function POST(request: Request) {
  try {
    // 1. ఫామ్ నుండి వచ్చిన డేటాను చదవడం
    const data = await request.json();

    // 2. మీ Google Form వివరాలు
    // మీ లింక్ నుండి బేస్ URL ను తీసుకున్నాం
    const GOOGLE_FORM_ACTION_URL =
      'https://docs.google.com/forms/d/e/1FAIpQLSd9tXW5pacyMONy0JyY2G_3WoXDikTRQhWIydUJVqIhLHLFeg/formResponse';

    // 3. డేటాను Google Form ఫార్మాట్‌లోకి మార్చడం
    const formData = new URLSearchParams();
    formData.append('entry.421939955', data.name); // మీ Name Entry ID
    formData.append('entry.1056672547', data.email); // మీ Email Entry ID
    formData.append('entry.586291239', data.phone); // మీ Phone Entry ID
    formData.append('entry.715718467', data.message); // మీ Message Entry ID

    // 4. Google Form కి డేటాను పంపడం
    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // 5. వెబ్‌సైట్‌కు 'Success' అని చెప్పడం
    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error) {
    console.error(error);
    // 6. ఏదైనా తప్పు జరిగితే 'Error' అని చెప్పడం
    return NextResponse.json({ message: 'Error submitting form' }, { status: 500 });
  }
}