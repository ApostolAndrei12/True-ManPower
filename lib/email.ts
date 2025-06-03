// Email service configuration
export interface EmailData {
  to: string
  subject: string
  html: string
  from?: string
}

export interface ContactFormData {
  companyName?: string
  contactName?: string
  industry?: string
  workersNeeded?: string
  phone: string
  email: string
  message?: string
  preferredContact?: string
  urgency?: string
  formType: 'contact' | 'hiring' | 'job-application' | 'quick-quote'
}

export interface JobApplicationData {
  fullName: string
  email: string
  phone: string
  experience: string
  preferredIndustry: string
  expectedSalary: string
  availability: string
  message?: string
}

// Email templates
export const createContactEmailTemplate = (data: ContactFormData): string => {
  const isRomanian = true // You can pass this as parameter if needed
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1f2937; }
        .value { margin-top: 5px; padding: 8px; background: white; border-radius: 4px; border-left: 4px solid #2563eb; }
        .footer { margin-top: 20px; padding: 15px; background: #e5e7eb; border-radius: 8px; font-size: 12px; color: #6b7280; }
        .urgent { background-color: #fef2f2; border-left-color: #ef4444; }
        .priority-high { border-left-color: #f59e0b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🌟 ${data.formType === 'hiring' ? 'Cerere Nouă pentru Angajatori' : data.formType === 'job-application' ? 'Aplicație Nouă pentru Job' : 'Contact Nou'} - True ManPower®</h2>
          <p>Formular completat: ${new Date().toLocaleString('ro-RO')}</p>
        </div>
        
        <div class="content">
          ${data.formType === 'hiring' ? `
            <div class="field">
              <div class="label">📢 Tip Solicitare:</div>
              <div class="value">Angajator - Căutare Forță de Muncă</div>
            </div>
            
            ${data.companyName ? `
            <div class="field">
              <div class="label">🏢 Numele Companiei:</div>
              <div class="value">${data.companyName}</div>
            </div>
            ` : ''}
            
            ${data.contactName ? `
            <div class="field">
              <div class="label">👤 Persoana de Contact:</div>
              <div class="value">${data.contactName}</div>
            </div>
            ` : ''}
            
            ${data.industry ? `
            <div class="field">
              <div class="label">🏭 Industria:</div>
              <div class="value">${data.industry}</div>
            </div>
            ` : ''}
            
            ${data.workersNeeded ? `
            <div class="field">
              <div class="label">👥 Numărul de Muncitori Necesari:</div>
              <div class="value ${parseInt(data.workersNeeded) > 20 ? 'priority-high' : ''}">${data.workersNeeded} ${parseInt(data.workersNeeded) > 20 ? '(Cerere Mare)' : ''}</div>
            </div>
            ` : ''}
            
            ${data.urgency ? `
            <div class="field">
              <div class="label">⏰ Urgența:</div>
              <div class="value ${data.urgency === 'urgent' ? 'urgent' : ''}">${data.urgency === 'urgent' ? 'URGENTĂ (1-2 săptămâni)' : data.urgency === 'normal' ? 'Normală (2-4 săptămâni)' : 'Planificată (1-3 luni)'}</div>
            </div>
            ` : ''}
          ` : data.formType === 'job-application' ? `
            <div class="field">
              <div class="label">📢 Tip Solicitare:</div>
              <div class="value">Candidat - Aplicație pentru Job</div>
            </div>
          ` : `
            <div class="field">
              <div class="label">📢 Tip Solicitare:</div>
              <div class="value">Contact General</div>
            </div>
          `}
          
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${data.email}</div>
          </div>
          
          <div class="field">
            <div class="label">📱 Telefon:</div>
            <div class="value">${data.phone}</div>
          </div>
          
          ${data.preferredContact ? `
          <div class="field">
            <div class="label">📞 Metoda Preferată de Contact:</div>
            <div class="value">${data.preferredContact === 'phone' ? 'Telefon' : 'Email'}</div>
          </div>
          ` : ''}
          
          ${data.message ? `
          <div class="field">
            <div class="label">💬 Mesaj:</div>
            <div class="value">${data.message}</div>
          </div>
          ` : ''}
        </div>
        
        <div class="footer">
          <p><strong>True ManPower® S.R.L.</strong> - Agenție de Recrutare Internațională</p>
          <p>📞 +40 799 870 326 | 📧 office@truemanpower.ro</p>
          <p>🌐 truemanpower.ro</p>
          <hr style="margin: 10px 0;">
          <p>⚠️ <strong>Acțiuni Recomandate:</strong></p>
          <ul>
            <li>${data.formType === 'hiring' ? '📞 Contactați clientul în maxim 2 ore pentru consultația inițială' : '📞 Contactați candidatul în maxim 24 ore'}</li>
            <li>📋 Pregătiți documentația specifică industriei</li>
            <li>📅 Programați o întâlnire detaliată</li>
            ${data.urgency === 'urgent' ? '<li>🚨 <strong>PRIORITATE MAXIMĂ</strong> - Cerere urgentă!</li>' : ''}
          </ul>
        </div>
      </div>
    </body>
    </html>
  `
}

export const createJobApplicationEmailTemplate = (data: JobApplicationData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #059669, #047857); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f0fdf4; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1f2937; }
        .value { margin-top: 5px; padding: 8px; background: white; border-radius: 4px; border-left: 4px solid #059669; }
        .footer { margin-top: 20px; padding: 15px; background: #e5e7eb; border-radius: 8px; font-size: 12px; color: #6b7280; }
        .priority { background-color: #fef3c7; border-left-color: #f59e0b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🎯 Aplicație Nouă pentru Job - True ManPower®</h2>
          <p>Candidat nou înregistrat: ${new Date().toLocaleString('ro-RO')}</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">👤 Numele Complet:</div>
            <div class="value">${data.fullName}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${data.email}</div>
          </div>
          
          <div class="field">
            <div class="label">📱 Telefon:</div>
            <div class="value">${data.phone}</div>
          </div>
          
          <div class="field">
            <div class="label">🏭 Industria Preferată:</div>
            <div class="value">${data.preferredIndustry}</div>
          </div>
          
          <div class="field">
            <div class="label">⚡ Experiența:</div>
            <div class="value">${data.experience}</div>
          </div>
          
          <div class="field">
            <div class="label">💰 Salariul Așteptat:</div>
            <div class="value">${data.expectedSalary}</div>
          </div>
          
          <div class="field">
            <div class="label">📅 Disponibilitate:</div>
            <div class="value ${data.availability === 'immediate' ? 'priority' : ''}">${data.availability === 'immediate' ? '⚡ IMEDIAT (Prioritate)' : data.availability}</div>
          </div>
          
          ${data.message ? `
          <div class="field">
            <div class="label">💬 Mesaj Suplimentar:</div>
            <div class="value">${data.message}</div>
          </div>
          ` : ''}
        </div>
        
        <div class="footer">
          <p><strong>True ManPower® S.R.L.</strong> - Agenție de Recrutare Internațională</p>
          <p>📞 +40 799 870 326 | 📧 office@truemanpower.ro</p>
          <hr style="margin: 10px 0;">
          <p>⚠️ <strong>Următorii Pași:</strong></p>
          <ul>
            <li>📞 Contactați candidatul în 24h pentru pre-screening</li>
            <li>📋 Verificați experiența și calificările</li>
            <li>📝 Adăugați în baza de date de candidați</li>
            <li>🔍 Căutați job-uri potrivite disponibile</li>
            ${data.availability === 'immediate' ? '<li>🚨 <strong>PRIORITATE</strong> - Candidat disponibil imediat!</li>' : ''}
          </ul>
        </div>
      </div>
    </body>
    </html>
  `
}

// Simulate email sending (in production, you would use actual email service)
export const sendEmail = async (emailData: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // In production, replace this with actual email service like SendGrid, AWS SES, etc.
    console.log('📧 Email would be sent to:', emailData.to)
    console.log('📧 Subject:', emailData.subject)
    console.log('📧 Content:', emailData.html)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return {
      success: true,
      message: 'Email trimis cu succes!'
    }
  } catch (error) {
    console.error('Email sending error:', error)
    return {
      success: false,
      message: 'Eroare la trimiterea email-ului. Vă rugăm să ne contactați direct.'
    }
  }
}

export const sendContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  const emailData: EmailData = {
    to: 'office@truemanpower.ro',
    subject: `${formData.formType === 'hiring' ? '🏢 CERERE ANGAJATOR' : formData.formType === 'job-application' ? '🎯 APLICAȚIE CANDIDAT' : '📧 CONTACT'} - ${formData.companyName || formData.email}`,
    html: createContactEmailTemplate(formData),
    from: 'noreply@truemanpower.ro'
  }
  
  return await sendEmail(emailData)
}

export const sendJobApplication = async (applicationData: JobApplicationData): Promise<{ success: boolean; message: string }> => {
  const emailData: EmailData = {
    to: 'office@truemanpower.ro',
    subject: `🎯 APLICAȚIE JOB - ${applicationData.fullName} - ${applicationData.preferredIndustry}`,
    html: createJobApplicationEmailTemplate(applicationData),
    from: 'noreply@truemanpower.ro'
  }
  
  return await sendEmail(emailData)
}