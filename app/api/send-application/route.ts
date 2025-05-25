import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log("Received application submission:", body)

    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: "SGIP Application <noreply@californiastateprogram.com>",
      to: ["californiasolar2025@gmail.com"],
      subject: "New SGIP Application Submitted",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b7afc;">New SGIP Application Received</h2>
          
          <h3>Property Information</h3>
          <p><strong>Property Type:</strong> ${body.propertyType || "Not provided"}</p>
          <p><strong>Occupancy Type:</strong> ${body.occupancyType || "Not provided"}</p>
          <p><strong>HOA Property:</strong> ${body.hoa || "Not provided"}</p>
          <p><strong>Existing Solar:</strong> ${body.existingSolar || "Not provided"}</p>
          <p><strong>Existing Battery:</strong> ${body.existingBattery || "Not provided"}</p>
          
          <h3>Address</h3>
          <p><strong>Street Address:</strong> ${body.streetAddress || "Not provided"}</p>
          <p><strong>Address Line 2:</strong> ${body.addressLine2 || "Not provided"}</p>
          <p><strong>City:</strong> ${body.city || "Not provided"}</p>
          <p><strong>State:</strong> ${body.state || "CA"}</p>
          <p><strong>ZIP Code:</strong> ${body.zipCode || "Not provided"}</p>
          <p><strong>County:</strong> ${body.county || "Not provided"}</p>
          
          <h3>Host Customer Information</h3>
          <p><strong>Name:</strong> ${body.firstName || "Not provided"} ${body.lastName || "Not provided"}</p>
          <p><strong>Date of Birth:</strong> ${body.month || "Not provided"}/${body.day || "Not provided"}/${body.year || "Not provided"}</p>
          <p><strong>Phone:</strong> ${body.areaCode || "Not provided"}-${body.prefix || "Not provided"}-${body.lineNumber || "Not provided"}</p>
          <p><strong>Email:</strong> ${body.email || "Not provided"}</p>
          <p><strong>Primary Language:</strong> ${body.language || "Not provided"}</p>
          
          <h3>Utility Information</h3>
          <p><strong>Utility Company:</strong> ${body.utilityCompany || "Not provided"}</p>
          <p><strong>Has Utility Bill:</strong> ${body.utilityBill || "Not provided"}</p>
          <p><strong>Has Green Button Data:</strong> ${body.greenButton || "Not provided"}</p>
          <p><strong>Household Size:</strong> ${body.householdSize || "Not provided"}</p>
          
          <h3>Income Types</h3>
          <p><strong>Selected Income Types:</strong> ${body.incomeTypes ? body.incomeTypes.join(", ") : "Not provided"}</p>
          
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This application was submitted on ${new Date().toLocaleString()} from the California Free Solar Program website.
          </p>
        </div>
      `,
    })

    console.log("Admin email send result:", adminEmail)

    // Send confirmation email to applicant
    if (body.email) {
      const confirmationEmail = await resend.emails.send({
        from: "California Free Solar Program <noreply@californiastateprogram.com>",
        to: [body.email],
        subject: "SGIP Application Received - Next Steps",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #3b7afc; color: white; padding: 20px; text-align: center;">
              <h1>Application Received!</h1>
            </div>
            
            <div style="padding: 20px;">
              <p>Dear ${body.firstName || "Applicant"},</p>
              
              <p>Thank you for submitting your application for California's Free Solar & Battery Program through the Self-Generation Incentive Program (SGIP).</p>
              
              <h3 style="color: #3b7afc;">What Happens Next?</h3>
              <ol>
                <li><strong>Application Review (2-4 weeks):</strong> Our team will review your application and verify your eligibility for the program.</li>
                <li><strong>Site Assessment (1-2 weeks):</strong> If eligible, we'll schedule a property assessment to design your solar and battery system.</li>
                <li><strong>Permitting (2-6 weeks):</strong> We'll handle all permitting requirements with your local jurisdiction.</li>
                <li><strong>Installation (1-3 days):</strong> Professional contractors will install your solar panels and battery system at no cost to you.</li>
                <li><strong>Inspection & Connection (1-4 weeks):</strong> Final inspection and utility connection to activate your system.</li>
              </ol>
              
              <h3 style="color: #3b7afc;">Important Information</h3>
              <ul>
                <li>Keep this email for your records</li>
                <li>We may contact you for additional documentation</li>
                <li>The entire process typically takes 2-4 months</li>
                <li>You will pay nothing out of pocket for this program</li>
              </ul>
              
              <div style="background-color: #f0f5ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h4 style="color: #3b7afc; margin-top: 0;">Questions?</h4>
                <p style="margin-bottom: 0;">
                  Call us at <strong>+1 916-917-2432</strong><br>
                  Email: californiasolar2025@gmail.com<br>
                  Hours: Mon-Fri 8am-6pm PT
                </p>
              </div>
              
              <p>Thank you for choosing clean energy and helping California reach its renewable energy goals!</p>
              
              <p>Best regards,<br>
              California Free Solar Program Team</p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666;">
              <p>This is an automated message. Please do not reply to this email.</p>
              <p>California Free Solar Program | SGIP Application System</p>
            </div>
          </div>
        `,
      })
      console.log("Confirmation email send result:", confirmationEmail)
    } else {
      console.log("No applicant email provided, skipping confirmation email.")
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      adminEmailId: adminEmail.data?.id,
    })
  } catch (error) {
    console.error("Error sending emails:", error)
    return NextResponse.json({ success: false, message: "Failed to submit application" }, { status: 500 })
  }
}
