import '../all-templates/template-one.css'


export class TemplateOne {
    static returnOne(pdfData: any): string {
        const fullName = [
            pdfData.personal.firstName, pdfData.personal.middleName, pdfData.personal.lastName
        ].filter(x => x?.trim()).join(' ')
        const contactDetails = [
            pdfData.personal.contact.toString(), pdfData.personal.email, pdfData.personal.location, pdfData.personal.age.toString()
        ].filter(x => x?.trim()).join(' | ')
        let html = ''



        const runOutput = (dataPdf: any) => {
            delete dataPdf.applyFor
            delete dataPdf.image
            delete dataPdf.personal
            for (const key in dataPdf) {
                let val = dataPdf[key]
                if (
                    (!val || (Array.isArray(val) && val.length === 0)) ||
                    (typeof val === 'object' && !Array.isArray(val) && Object.keys(val).length === 0 || null)
                ) continue;
                switch (key) {
                    case 'education':

                        html += `
      <div class='education'>
        <h4>Education History</h4>
        <br>
        ${val.map((value: any, ind: number) => `
          <div key=${ind} class='educationSection'>
            <div class='left'>
              ${value.degree || ''}
              ${value.course || ''}
              ${value.grade || ''}
            </div>
            <div class='right'>
              ${value.university || ''}
              ${value.institute || ''}
              ${value.location || ''} 
              ${value.start ? value.start.slice(0, 4) : ''} -
              ${value.end ? value.end.slice(0, 4) : ''}
            </div>
            ${value.misc || ''}
          </div>
        `).join('')}
        <hr style="border: 1px solid #ccc; margin: 20px 0;">
      </div>
    `;
                        break;

                    case 'work':
                        html += `
      <div class='work'>
        <h4>Work History</h4>
        <br>
        ${val.map((value: any, ind: number) => `
          <div key=${ind} class='workSection'>
            <div class='left'>
              ${value.jobTitle || ''}
              ${value.start ? value.start.slice(0, 4) : ''} -
              ${value.end ? value.end.slice(0, 4) : ''}
            </div>
            <div class='right'>
              ${value.companyName || ''}
              ${value.location || ''} 
            </div>
            ${value.misc || ''}
          </div>
        `).join('')}
        <hr style="border: 1px solid #ccc; margin: 20px 0;">
      </div>
    `;
                        break;
                    case 'skill':
                        html += `
      <div class='skill'>
        <h4>Expertise</h4>
        <br>
        ${val.map((value: any, ind: number) => `
          <div key=${ind} class='skillSection'>
            <div class='left'>
              ${value.skill || ''}
            </div>
            <div class='right'>
              ${value.misc || ''}
            </div>
          </div>
        `).join('')}
        <hr style="border: 1px solid #ccc; margin: 20px 0;">
      </div>
    `;
                        break;
                    case 'summary':
                        html += `
      <div class='summary'>
        <h4>Summary</h4>
        <p>${val}</p>
        <hr style="border: 1px solid #ccc; margin: 20px 0;">
      </div>
    `;
                        break;
                    case 'interest':
                        html += `
      <div class='interest'>
        <h4>Interest</h4>
        <br>
        ${val.map((value: any, ind: number) => `
          <div key=${ind} class='interestSection'>
            <div class='left'>
              ${value || ''}
            </div>
          </div>
        `).join('')}
        <hr style="border: 1px solid #ccc; margin: 20px 0;">
      </div>
    `;
                        break;
                    case 'project':
                        html += `
      <div class='project'>
        <h4>Projects</h4>
        <br>
        ${val.map((value: any, ind: number) => `
          <div key=${ind} class='projectSection'>
                ${value.title || ''}
                ${value.url || ''}
                ${value.tech || ''}
                ${value.misc || ''}
          </div>
        `).join('')}
        <hr style="border: 1px solid #ccc; margin: 20px 0;">
      </div>
    `;
                        break;
                    case 'award':
                        html += `
      <div class='award'>
        <h4>Awards & Certificates</h4>
        <br>
        ${val.map((value: any, ind: number) => `
          <div key=${ind} class='awardSection'>
            <div class='left'>
              ${value.title || ''}
              ${value.credential || ' '} 
            </div>
            <div class='right'>
              ${value.issuer || ''}
               ${value.date ? value.date.toString().slice(0, 4) : ''} 
            </div>
            ${value.misc || ''}
          </div>
        `).join('')}
        <hr style="border: 1px solid #ccc; margin: 20px 0;">
      </div>
    `;
                        break;
                    case 'social':
                        html += `
      <div class='social'>
        <h4>Socials</h4>
        <br>
        ${val.map((value: any, ind: number) => `
          <div key=${ind} class='socialSection'>
            <div class='left'>
              ${value.name || ''}
            </div>
            <div class='right'>
              ${value.link || ''}
            </div>
          </div>
        `).join('')}
        <hr style="border: 1px solid #ccc; margin: 20px 0;">
      </div>
    `;
                        break;

                    default:
                        break;
                }
            }
        }

        return `
      <html>
      <head>
        <link rel="stylesheet" href="../all-templates/template-one.css" />
        <title>CV</title>
  <style>
  body {
    font-family: ${pdfData.font || 'Georgia'}, serif;
    background: #fff;
    color: #222;
    padding: 40px 60px;
    font-size: 13px;
    line-height: 1.5;
  }

  h2 {
    font-size: 24px;
    margin: 0 0 10px;
    font-weight: 700;
    color: #111;
  }

  h4 {
    margin: 25px 0 10px;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 2px solid #444;
    padding-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .top {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    gap: 15px;
  }

  .image img {
    max-width: 80px;
    border-radius: 6px;
  }

  .personal {
    flex: 1;
  }

  .summary p {
    margin-top: 6px;
  }

  .section {
    margin-bottom: 15px;
  }

  .educationSection,
  .workSection,
  .skillSection,
  .interestSection,
  .projectSection,
  .awardSection,
  .socialSection {
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
    border-bottom: 1px dashed #ccc;
  }

  .left {
    width: 48%;
    font-weight: 500;
  }

  .right {
    width: 48%;
    text-align: right;
    font-style: italic;
  }

  label {
    font-weight: 600;
    font-size: 13px;
    margin-top: 6px;
    display: block;
  }

  #output {
    margin-top: 20px;
  }

  hr {
    border: none;
    border-top: 2px solid #444;
    margin: 20px 0;
  }

  @media print {
    body {
      padding: 10px;
    }

    .educationSection,
    .workSection,
    .skillSection,
    .interestSection,
    .projectSection,
    .awardSection,
    .socialSection {
      page-break-inside: avoid;
    }
  }
    @media print {
      @page {
        margin: 0;
        size: auto;
      }

      body {
        margin: 50px;
        padding: 50px;
      }

      header, footer {
        display: none !important; /* Optional: hide header/footer elements */
      }
    }
</style>




      </head>
      <body>
      <div class='top'>
      ${pdfData.image ?
                `<div class='image'>
      <img src=${pdfData.image} alt='image' />
      </div>`: ''
            }
  
        <div class='personal'>
          <h2>${fullName} </h2>
        
          <p>${contactDetails}</p>
          <hr>
          ${pdfData.applyingFor ?
                `<label> Appling For: ${pdfData.applyingFor} </label>` : ' '
            }
          
          <hr style="border: 1px solid #ccc; margin: 20px 0;">
        </div>
        </div>
        <div class='restOfCV'>
        
        ${runOutput(pdfData)}
        <div id='output'>
          ${html}
        </div>
        </div>
    <script> window.onload =()=> window.print();  </script>
        </body>
        </html>
            `;
    }
}
