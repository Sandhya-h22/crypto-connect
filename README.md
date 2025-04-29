# DECLARATION

This is to certify that:
(i) This report comprises our original work carried out towards the degree of Bachelor of Technology in Computer Science and Engineering at the Indian Institute of Information Technology (IIIT), Surat, and has not been submitted elsewhere for any other degree.
(ii) Due acknowledgment has been made in the text to all other material used.

Signature of Student

______________________
(Jash Kapoor)

______________________
(Darshan Dixit)

# ACKNOWLEDGEMENTS

I would like to express my sincere gratitude to my project supervisor, Mrs. Jiby Babin, for her invaluable guidance, continuous support, and insightful feedback throughout the development of this project. Her expertise and encouragement were instrumental in helping me overcome challenges and achieve my goals.

I am deeply thankful to the Department of Computer Science and Engineering at the Indian Institute of Information Technology, Surat, for providing me with the necessary resources, infrastructure, and knowledge base required for the successful completion of this project. The academic environment fostered by the institute has been crucial for my learning and overall growth.

I would also like to acknowledge the contribution of my peers and friends, who provided constructive criticism and helpful suggestions that improved various aspects of the project. Their willingness to test the platform and share feedback has been invaluable.

Finally, I extend my heartfelt thanks to my family for their unwavering support, patience, and encouragement throughout my academic journey. Their belief in my abilities has been a constant source of motivation and strength.

# ABSTRACT

Timeless Elegance is a modern e-commerce platform designed to provide users with a seamless shopping experience for premium watches and accessories. The project addresses the growing demand for specialized online retail platforms that combine aesthetic appeal with functional efficiency. Built using Next.js, React, and various modern web technologies, the platform features responsive design, product categorization, shopping cart functionality, secure checkout processes, and administrative capabilities.

The project implements a clean, intuitive interface that enhances user engagement while ensuring optimal performance across devices. Through thoughtful architecture and component-based development, Timeless Elegance demonstrates how modern web technologies can be leveraged to create a sophisticated e-commerce solution that balances visual appeal with technical excellence. This project showcases the application of software engineering principles to develop a practical, user-centric digital commerce platform.

# Contents

-   Certificate .................................................................................................................. 2
-   Declaration ................................................................................................................ 3
-   Acknowledgements .................................................................................................. 4
-   Abstract .................................................................................................................... 5
-   Symbols .................................................................................................................... 8
-   List of Figures ......................................................................................................... 9-14
-   **1 Introduction** ................................................................................. 15
    -   1.1 Project Introduction ................................................................................... 15
    -   1.2 Existing Solutions ...................................................................................... 15
    -   1.3 Issues with Existing Version ...................................................................... 16
    -   1.4 Problems to Tackle ..................................................................................... 17
-   **2 Tools and Technologies** .......................................................... 19
    -   2.1 Programming Languages ........................................................................... 19
        -   2.1.1 Typescript ............................................................................ 19
    -   2.2 Technologies ............................................................................................. 20
        -   2.2.1 Backend Technologies and Libraries .................................. 20
        -   2.2.2 Frontend Technologies and Libraries .................................. 20
        -   2.2.3 Build Systems ...................................................................... 21
        -   2.2.4 Database and In-memory Stores ......................................... 21
    -   2.3 Tools ............................................................................................................ 22
-   **3 Proposed Systems** ........................................................................ 23
    -   3.1 Proposed Solution for Application Centralizing Brand Influencer Workflow…………….. 23
        -   3.1.1 Problem – No Billing and Payout System .......................... ………………..23
        -   3.1.2 Problem – Lack of Authentic Social Media Account Analytics …………..23
        -   3.1.3 Problem – No Mechanism to Ensure Strict Adherence to Terms on Promoted Posts..……………………………………………………………………………………………………...23
        -   3.1.4 Problem – Slow Cold Starts, Bad Response Times, Inefficiently Handled Load ………………………………………………………………………………………………………………........... 24
        -   3.1.5 Problem – Frontend Feature Addition Requires Implementing 3 Programming Languages – Resulting in Redundancy ………........................... 24
    -   3.2 Dependencies ......................................................................................................... 24
        -   3.2.1 Dependencies within Application Modules ..................................... 24
        -   3.2.2 Dependencies on Third Party Providers .............................….………..24
    -   3.3 Requirements ......................................................................................................... 24
        -   3.3.1 Software Requirements ................................................................... 25
        -   3.3.2 Infrastructure Requirements ........................................................... 26
-   **4 System Design** ......................................................................... 27
    -   4.1 Existing Architectural Design ............................................................................... 27
    -   4.2 Drawbacks of Existing Architecture ........................................................ 28
    -   4.3 Improvised Architecture ......................................................................... 28
    -   4.4 Code Level Structure ............................................................................... 29
-   **5 Implementation** ........................................................................ 30
    -   5.1 Migrating Django Codebase to a Full Stack Typescript MonoRepo with Parallel Cluster Processes ...................................................................................................... 30
        -   5.1.1 Implementation ............................................................................ 30
    -   5.2 Billing System ..................................................................................................... 30
        -   5.2.1 Working ....................................................................................... 30
        -   5.2.2 Implementation ........................................................................... 31
    -   5.3 Promotion Posts and Campaign Analytics via Facebook Graph API Integration ....................................................................................................................... 31
        -   5.3.1 Working ....................................................................................... 31
        -   5.3.2 Implementation ........................................................................... 31
-   **6 Testing and Experimental Results** ........................................ 32-37
-   **7 Conclusion and Future Scope** ................................................ 38-40
    -   7.1 Conclusion ......................................................................................................... 38
    -   7.2 Future Work ....................................................................................................... 39
