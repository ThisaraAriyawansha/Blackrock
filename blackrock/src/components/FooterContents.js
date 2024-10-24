import React from 'react';
import './CSS/FooterContents.css';

const LegalDisclaimer = () => {
  return (
    <div className="legal-disclaimer-container">
      <p>© 2024 BlackRock, Inc. All rights reserved.</p>

      <p>
        This material is intended for information purposes only and does not constitute investment advice, a recommendation or an offer or solicitation to purchase or sell any securities, funds or strategies to any person in any jurisdiction in which an offer, solicitation, purchase or sale would be unlawful under the securities laws of such jurisdiction. The opinions expressed are subject to change without notice. Reliance upon information in this material is at the sole discretion of the reader. Investing involves risks.
      </p>

      <p>
        This document is marketing material: Before investing, please read the Prospectus and the PRIIPs KID available on www.blackrock.com/it, which contain a summary of investors' rights.
      </p>

      <p><strong>In the UK and Non-European Economic Area (EEA) countries:</strong> this is issued by BlackRock Investment Management (UK) Limited, authorized and regulated by the Financial Conduct Authority. Registered office: 12 Throgmorton Avenue, London, EC2N 2DL. Tel: +44 (0)20 7743 3000. Registered in England and Wales No. 2020394. Your protection telephone calls are usually recorded.</p>
      
      {/* Add other regional disclaimers in similar format */}
      
      <p>©2024 BlackRock, Inc. All Rights Reserved. BLACKROCK and iShares are a trademark of BlackRock, Inc. or its subsidiaries in the United States and elsewhere. All other trademarks are those of their respective owners.</p>

      <p>MKTGH0924E/M-3891343</p>
    </div>
  );
}

export default LegalDisclaimer;