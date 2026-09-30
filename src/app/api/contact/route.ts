import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const COMPANY_RECIPIENT = 'expressridesandsafaris@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      phoneNumber,
      email,
      serviceRequired,
      travelDate,
      pickupLocation,
      message,
    } = body;

    // Validate essential fields
    if (!fullName || !phoneNumber || !travelDate) {
      return Response.json(
        { error: 'Full name, phone number, and travel date are required.' },
        { status: 400 }
      );
    }

    const submissionTime = new Date().toLocaleString('en-KE', {
      timeZone: 'Africa/Nairobi',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    // Check if Gmail SMTP credentials are configured in environment
    const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER || COMPANY_RECIPIENT;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

    // Construct Mailto fallback link
    const mailtoSubject = encodeURIComponent(`Inquiry for ${serviceRequired} - ${fullName}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email || 'Not provided'}\nService: ${serviceRequired}\nDate: ${travelDate}\nPickup: ${pickupLocation}\nNotes: ${message || 'None'}\n\nSent from website contact form.`
    );
    const mailtoUrl = `mailto:${COMPANY_RECIPIENT}?subject=${mailtoSubject}&body=${mailtoBody}`;

    if (gmailAppPassword) {
      // Set up Nodemailer Gmail SMTP transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      // HTML Email Template for the Company Desk
      const companyHtmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
            .header { background: #0B0F17; color: #ffffff; padding: 28px 32px; border-bottom: 3px solid #D97706; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px; }
            .header p { margin: 6px 0 0 0; font-size: 13px; color: #F59E0B; font-weight: 600; text-transform: uppercase; }
            .content { padding: 32px; }
            .field-row { margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid #f1f5f9; }
            .field-row:last-child { border-bottom: none; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b; font-weight: 700; margin-bottom: 4px; }
            .value { font-size: 15px; font-weight: 600; color: #0f172a; }
            .message-box { background: #f8fafc; border-left: 4px solid #D97706; padding: 14px 18px; border-radius: 0 8px 8px 0; margin-top: 8px; font-size: 14px; color: #334155; line-height: 1.5; white-space: pre-wrap; }
            .action-bar { margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; display: flex; gap: 12px; }
            .btn { display: inline-block; padding: 12px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; text-align: center; }
            .btn-call { background: #D97706; color: #ffffff !important; }
            .btn-whatsapp { background: #25D366; color: #000000 !important; }
            .footer { background: #f8fafc; padding: 18px 32px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>New Booking &amp; Reservation Inquiry</h1>
              <p>Express Ride &amp; Safaris Kenya</p>
            </div>
            <div class="content">
              <div class="field-row">
                <div class="label">Client Full Name</div>
                <div class="value">${fullName}</div>
              </div>
              <div class="field-row">
                <div class="label">Phone / WhatsApp Number</div>
                <div class="value"><a href="tel:${phoneNumber}" style="color: #D97706; text-decoration: none;">${phoneNumber}</a></div>
              </div>
              ${email ? `
              <div class="field-row">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #D97706; text-decoration: none;">${email}</a></div>
              </div>` : ''}
              <div class="field-row">
                <div class="label">Service Required</div>
                <div class="value" style="color: #D97706; font-size: 16px;">${serviceRequired}</div>
              </div>
              <div class="field-row">
                <div class="label">Travel / Pickup Date</div>
                <div class="value">${travelDate}</div>
              </div>
              <div class="field-row">
                <div class="label">Preferred Location / City</div>
                <div class="value">${pickupLocation}</div>
              </div>
              <div class="field-row">
                <div class="label">Client Notes &amp; Special Requests</div>
                <div class="message-box">${message || 'No additional notes specified.'}</div>
              </div>
              <div class="field-row">
                <div class="label">Inquiry Timestamp</div>
                <div class="value" style="font-size: 12px; color: #64748b; font-weight: normal;">${submissionTime}</div>
              </div>

              <div class="action-bar">
                <a href="tel:${phoneNumber}" class="btn btn-call">Call Client</a>
                <a href="https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}" class="btn btn-whatsapp">Chat on WhatsApp</a>
              </div>
            </div>
            <div class="footer">
              Express Ride &amp; Safaris Kenya &bull; Bamburi, Mombasa &bull; Notification System
            </div>
          </div>
        </body>
        </html>
      `;

      // Dispatch email to Express Ride & Safaris
      await transporter.sendMail({
        from: `"Express Ride & Safaris" <${gmailUser}>`,
        to: COMPANY_RECIPIENT,
        replyTo: email || undefined,
        subject: `[New Inquiry] ${serviceRequired} - ${fullName}`,
        text: `New Inquiry from ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email || 'N/A'}\nService: ${serviceRequired}\nDate: ${travelDate}\nLocation: ${pickupLocation}\nNotes:\n${message || 'None'}\n\nTime: ${submissionTime}`,
        html: companyHtmlContent,
      });

      // If user provided email, send them a confirmation copy
      if (email && email.includes('@')) {
        try {
          const clientHtmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
                .card { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; }
                .header { background: #0B0F17; color: #ffffff; padding: 24px; border-bottom: 3px solid #D97706; text-align: center; }
                .header h1 { margin: 0; font-size: 18px; font-weight: 800; }
                .content { padding: 28px; line-height: 1.6; }
                .badge { display: inline-block; background: #fef3c7; color: #92400e; font-weight: 700; padding: 4px 10px; border-radius: 6px; font-size: 12px; }
                .summary { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 18px 0; }
                .summary p { margin: 6px 0; font-size: 13px; }
                .footer { background: #f8fafc; padding: 16px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
              </style>
            </head>
            <body>
              <div class="card">
                <div class="header">
                  <h1>Express Ride &amp; Safaris Kenya</h1>
                </div>
                <div class="content">
                  <p>Dear <strong>${fullName}</strong>,</p>
                  <p>Thank you for reaching out to <strong>Express Ride &amp; Safaris Kenya</strong>! We have received your inquiry and our reservations team is already reviewing vehicle and driver availability.</p>
                  
                  <div class="summary">
                    <p><strong>Service Requested:</strong> ${serviceRequired}</p>
                    <p><strong>Travel / Pickup Date:</strong> ${travelDate}</p>
                    <p><strong>Pickup Location:</strong> ${pickupLocation}</p>
                  </div>

                  <p>A member of our team will contact you shortly via phone or WhatsApp at <strong>${phoneNumber}</strong> to provide you with the best rates and booking confirmation.</p>
                  
                  <p style="margin-top: 20px;">
                    Need urgent assistance? Reach our 24/7 hotline directly at <a href="tel:0793612412" style="color: #D97706; font-weight: bold;">0793612412</a> or chat on WhatsApp at <a href="https://wa.me/254748769876" style="color: #25D366; font-weight: bold;">0748769876</a>.
                  </p>
                </div>
                <div class="footer">
                  Head Office: Bamburi, Mombasa, Kenya &bull; Nairobi Hub
                </div>
              </div>
            </body>
            </html>
          `;

          await transporter.sendMail({
            from: `"Express Ride & Safaris" <${gmailUser}>`,
            to: email,
            subject: `Inquiry Confirmation: ${serviceRequired} - Express Ride & Safaris`,
            html: clientHtmlContent,
          });
        } catch (clientMailErr) {
          console.warn('Could not dispatch customer receipt copy:', clientMailErr);
        }
      }

      return Response.json({
        success: true,
        emailSent: true,
        message: 'Your inquiry has been sent to expressridesandsafaris@gmail.com.',
        mailto: mailtoUrl,
      });
    } else {
      // SMTP credentials not yet provided in environment (e.g. initial setup)
      console.log('--- NEW INQUIRY RECEIVED (SMTP Pending Configuration) ---');
      console.log({ fullName, phoneNumber, email, serviceRequired, travelDate, pickupLocation, message });
      console.log('---------------------------------------------------------');

      return Response.json({
        success: true,
        emailSent: false,
        requiresSmtpConfig: true,
        message: 'Inquiry received. Our dispatch team will follow up promptly.',
        mailto: mailtoUrl,
      });
    }
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return Response.json(
      {
        error: 'Failed to process inquiry. Please contact us directly via phone or WhatsApp.',
        details: error?.message,
      },
      { status: 500 }
    );
  }
}
