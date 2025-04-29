<div align="center">
  <h1 style="color: #4285F4;">🌟 CRYPTO-CONNECT PROJECT 🌟</h1>
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Status: Completed">
  <img src="https://img.shields.io/badge/Technology-Blockchain-blue" alt="Technology: Blockchain">
  <img src="https://img.shields.io/badge/Department-CSE-orange" alt="Department: CSE">
</div>

<hr style="border: 2px solid #4285F4;">

## <span style="color: #34A853;">📜 DECLARATION</span>

<div style="padding: 20px; border-left: 4px solid #FBBC05;">
This is to certify that:

(i) This report comprises our original work carried out towards the degree of Bachelor of Technology in Computer Science and Engineering at the Indian Institute of Information Technology (IIIT), Surat, and has not been submitted elsewhere for any other degree.

(ii) Due acknowledgment has been made in the text to all other material used.
</div>

<div align="right">
  <p><strong>Signature of Student</strong></p>
  <p>______________________</p>
  <p><em>(Shreyansh Vishwakarma)</em></p>
</div>

## <span style="color: #EA4335;">🙏 ACKNOWLEDGEMENTS</span>

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px;">
I would like to express my sincere gratitude to my project supervisor, Mrs. Jiby Babin, for her invaluable guidance, continuous support, and insightful feedback throughout the development of this project. Her expertise and encouragement were instrumental in helping me overcome challenges and achieve my goals.

I am deeply thankful to the Department of Computer Science and Engineering at the Indian Institute of Information Technology, Surat, for providing me with the necessary resources, infrastructure, and knowledge base required for the successful completion of this project. The academic environment fostered by the institute has been crucial for my learning and overall growth.

I would also like to acknowledge the contribution of my peers and friends, who provided constructive criticism and helpful suggestions that improved various aspects of the project. Their willingness to test the platform and share feedback has been invaluable.

Finally, I extend my heartfelt thanks to my family for their unwavering support, patience, and encouragement throughout my academic journey. Their belief in my abilities has been a constant source of motivation and strength.
</div>

## <span style="color: #4285F4;">📊 ABSTRACT</span>

<div style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
Timeless Elegance is a modern e-commerce platform designed to provide users with a seamless shopping experience for premium watches and accessories. The project addresses the growing demand for specialized online retail platforms that combine aesthetic appeal with functional efficiency. Built using Next.js, React, and various modern web technologies, the platform features responsive design, product categorization, shopping cart functionality, secure checkout processes, and administrative capabilities.

The project implements a clean, intuitive interface that enhances user engagement while ensuring optimal performance across devices. Through thoughtful architecture and component-based development, Timeless Elegance demonstrates how modern web technologies can be leveraged to create a sophisticated e-commerce solution that balances visual appeal with technical excellence. This project showcases the application of software engineering principles to develop a practical, user-centric digital commerce platform.
</div>

## <span style="color: #34A853;">📋 Contents</span>

<table>
  <tr>
    <td>Certificate</td>
    <td align="right">2</td>
  </tr>
  <tr>
    <td>Declaration</td>
    <td align="right">3</td>
  </tr>
  <tr>
    <td>Acknowledgements</td>
    <td align="right">4</td>
  </tr>
  <tr>
    <td>Abstract</td>
    <td align="right">5</td>
  </tr>
  <tr>
    <td>Symbols</td>
    <td align="right">8</td>
  </tr>
  <tr>
    <td>List of Figures</td>
    <td align="right">9-14</td>
  </tr>
</table>

<details>
  <summary><b>📘 1. Introduction</b> (pg. 15)</summary>
  <ul>
    <li>1.1 Project Introduction (pg. 15)</li>
    <li>1.2 Existing Solutions (pg. 15)</li>
    <li>1.3 Issues with Existing Version (pg. 16)</li>
    <li>1.4 Problems to Tackle (pg. 17)</li>
  </ul>
</details>

<details>
  <summary><b>🛠️ 2. Tools and Technologies</b> (pg. 19)</summary>
  <ul>
    <li>2.1 Programming Languages (pg. 19)
      <ul>
        <li>2.1.1 Typescript (pg. 19)</li>
      </ul>
    </li>
    <li>2.2 Technologies (pg. 20)
      <ul>
        <li>2.2.1 Backend Technologies and Libraries (pg. 20)</li>
        <li>2.2.2 Frontend Technologies and Libraries (pg. 20)</li>
        <li>2.2.3 Build Systems (pg. 21)</li>
        <li>2.2.4 Database and In-memory Stores (pg. 21)</li>
      </ul>
    </li>
    <li>2.3 Tools (pg. 22)</li>
  </ul>
</details>

<details>
  <summary><b>💡 3. Proposed Systems</b> (pg. 23)</summary>
  <ul>
    <li>3.1 Proposed Solution for Application Centralizing Brand Influencer Workflow (pg. 23)
      <ul>
        <li>3.1.1 Problem – No Billing and Payout System (pg. 23)</li>
        <li>3.1.2 Problem – Lack of Authentic Social Media Account Analytics (pg. 23)</li>
        <li>3.1.3 Problem – No Mechanism to Ensure Strict Adherence to Terms on Promoted Posts (pg. 23)</li>
        <li>3.1.4 Problem – Slow Cold Starts, Bad Response Times, Inefficiently Handled Load (pg. 24)</li>
        <li>3.1.5 Problem – Frontend Feature Addition Requires Implementing 3 Programming Languages – Resulting in Redundancy (pg. 24)</li>
      </ul>
    </li>
    <li>3.2 Dependencies (pg. 24)
      <ul>
        <li>3.2.1 Dependencies within Application Modules (pg. 24)</li>
        <li>3.2.2 Dependencies on Third Party Providers (pg. 24)</li>
      </ul>
    </li>
    <li>3.3 Requirements (pg. 24)
      <ul>
        <li>3.3.1 Software Requirements (pg. 25)</li>
        <li>3.3.2 Infrastructure Requirements (pg. 26)</li>
      </ul>
    </li>
  </ul>
</details>

<details>
  <summary><b>🏗️ 4. System Design</b> (pg. 27)</summary>
  <ul>
    <li>4.1 Existing Architectural Design (pg. 27)</li>
    <li>4.2 Drawbacks of Existing Architecture (pg. 28)</li>
    <li>4.3 Improvised Architecture (pg. 28)</li>
    <li>4.4 Code Level Structure (pg. 29)</li>
  </ul>
</details>

<details>
  <summary><b>⚙️ 5. Implementation</b> (pg. 30)</summary>
  <ul>
    <li>5.1 Migrating Django Codebase to a Full Stack Typescript MonoRepo with Parallel Cluster Processes (pg. 30)
      <ul>
        <li>5.1.1 Implementation (pg. 30)</li>
      </ul>
    </li>
    <li>5.2 Billing System (pg. 30)
      <ul>
        <li>5.2.1 Working (pg. 30)</li>
        <li>5.2.2 Implementation (pg. 31)</li>
      </ul>
    </li>
    <li>5.3 Promotion Posts and Campaign Analytics via Facebook Graph API Integration (pg. 31)
      <ul>
        <li>5.3.1 Working (pg. 31)</li>
        <li>5.3.2 Implementation (pg. 31)</li>
      </ul>
    </li>
  </ul>
</details>

<details>
  <summary><b>🧪 6. Testing and Experimental Results</b> (pg. 32-37)</summary>
</details>

<details>
  <summary><b>🔍 7. Conclusion and Future Scope</b> (pg. 38-40)</summary>
  <ul>
    <li>7.1 Conclusion (pg. 38)</li>
    <li>7.2 Future Work (pg. 39)</li>
  </ul>
</details>

<div align="center">
  <p>Developed with ❤️ by <b>Shreyansh Vishwakarma</b></p>
  <p>© 2025 All Rights Reserved</p>
</div>
