
export interface TermsSection {
  title: string;
  paragraphs: string[];
}

export const termsContent = {
  brand: 'Shia Humsafar',

  // Replace these placeholders with verified company details
  // before publishing the Terms.
  companyLegalName: '[Full registered company name]',
  registeredOffice: '[Registered office address]',
  supportEmail: '[Customer support email]',
  grievanceOfficer: '[Grievance Officer name]',
  grievanceEmail: '[Grievance email address]',

  screenTitle: 'Terms & Conditions',

  status: 'draft' as 'draft' | 'final',
  effectiveDate: '' as string,

  hero: {
    title: 'Terms & Conditions',
    intro:
      'Please read these terms carefully. They explain the rules, responsibilities and conditions governing your use of Shia Humsafar.',
  },

  draftBanner: {
    title: 'Draft for legal review',
    body:
      'These Terms are a proposed draft and are not yet final or effective. They must be reviewed and approved by the company’s legal counsel before publication and member acceptance.',
  },

  membership: {
    eyebrow: 'Important information',
    heading: 'Membership terms',
    intro:
      'These terms govern registration, matchmaking services, member conduct, subscriptions, payments, account restrictions and your relationship with Shia Humsafar.',
  },

  sections: [
    {
      title: '1. Acceptance and scope of these terms',
      paragraphs: [
        'These Terms & Conditions ("Terms") govern access to and use of the Shia Humsafar website, mobile applications, features and related services (collectively, the "Platform"), operated by [Full registered company name] ("Company", "we", "us" or "our").',
        'By registering, creating an account, accessing or using the Platform, or purchasing a subscription, you acknowledge that you have read and understood these Terms and agree to be legally bound by them.',
        'If you do not agree to these Terms, you must not register, access or use the Platform. If you have already registered, you should discontinue use and follow the available account-closure process.',
        'These Terms must be read together with our Privacy Policy, Community Guidelines, Safety Guidelines, Subscription and Payment disclosures, and any additional terms presented for particular features or services. In the event of a conflict, applicable law will prevail.',
      ],
    },

    {
      title: '2. Nature and purpose of the service',
      paragraphs: [
        'Shia Humsafar is a community-focused matrimonial and matchmaking platform intended to help eligible adults discover potential marriage partners, view profiles, express interest and communicate through available Platform features.',
        'The Platform provides technology and communication facilities. Unless expressly stated otherwise in a separate written agreement, the Company does not act as a legal representative, marriage guarantor, personal agent, investigator or authorised representative of any member.',
        'The Company does not arrange, approve, certify or guarantee any marriage, relationship, engagement, compatibility, response, meeting or successful outcome.',
        'Use of the Platform is voluntary. Members are solely responsible for deciding whether to contact, communicate with, meet, pursue a relationship with or marry another member.',
      ],
    },

    {
      title: '3. Eligibility and age requirements',
      paragraphs: [
        'You must be at least 18 years old and must meet the applicable legal minimum age for marriage in the jurisdiction in which you intend to marry. You must also be legally capable of entering into a binding agreement and using the Platform.',
        'You must not register or use the Platform if you are legally prohibited from doing so, are using another person’s identity without permission, or are otherwise ineligible under applicable law.',
        'The Platform is not intended for minors. The Company may restrict or terminate accounts where it reasonably believes that a member is underage or has provided misleading age information.',
        'If you create or manage a profile on behalf of another adult, you must obtain that person’s informed and express permission. You must accurately disclose that the profile is managed by a parent, guardian or other authorised person, as applicable.',
        'A person managing another adult’s profile must not make decisions, communicate commitments or disclose information on that person’s behalf beyond the authority actually granted by them.',
      ],
    },

    {
      title: '4. Registration, accounts and profile accuracy',
      paragraphs: [
        'You agree to provide accurate, complete, current and truthful information during registration and throughout your membership, including your name, age, date of birth, marital status, education, occupation, location, photographs and other profile information requested by the Platform.',
        'You must promptly correct information that becomes inaccurate, outdated or misleading. You must not impersonate another person, create duplicate or fraudulent accounts, use misleading photographs, falsify marital status or misrepresent any material personal information.',
        'You are responsible for maintaining the confidentiality of your password, OTPs, authentication credentials and account access. You must not share authentication codes or knowingly permit unauthorised persons to access your account.',
        'You are responsible for activities carried out through your account to the extent caused by your actions, negligence, failure to protect credentials or authorised sharing of access. Notify the Company promptly if you suspect unauthorised access.',
        'The Company may request reasonable information or documents to verify account details, investigate suspected fraud, protect members or comply with legal obligations. Any collection and handling of verification information will be governed by the Privacy Policy and applicable law.',
      ],
    },

    {
      title: '5. Member conduct and prohibited activities',
      paragraphs: [
        'Members must communicate honestly, respectfully and responsibly. You must respect other members’ personal boundaries, decisions, privacy and right to decline communication or a relationship.',
        'You must not harass, threaten, stalk, intimidate, blackmail, defame, exploit, discriminate against or repeatedly contact a member who has declined further communication.',
        'You must not upload, transmit or distribute obscene, sexually exploitative, abusive, threatening, hateful, unlawful, defamatory, fraudulent or otherwise prohibited content.',
        'You must not use the Platform for scams, financial solicitation, loans, investment offers, commercial advertising, unauthorised promotions, phishing, money laundering, unlawful transactions or any purpose unrelated to genuine matrimonial use.',
        'You must not request, collect, misuse, sell, publish or distribute another member’s photographs, contact details, identity documents, financial information, private messages or other personal information without lawful authority and appropriate permission.',
        'You must not scrape, copy, harvest, reverse engineer, interfere with, overload, damage, circumvent security controls or attempt unauthorised access to the Platform, its systems, databases, software or other members’ accounts.',
        'The Company may investigate suspected violations, preserve relevant information where legally permitted, restrict access, remove content, suspend accounts or take other appropriate action in accordance with these Terms and applicable law.',
      ],
    },

    {
      title: '6. Profiles, verification and member responsibility',
      paragraphs: [
        'Profiles and information displayed on the Platform are generally supplied by members or persons authorised to manage their profiles. The Company does not independently create or warrant every statement made by a member.',
        'Any verification badge, document check, photograph review, phone verification, profile review or other verification feature indicates only the particular check described by the Company. It must not be treated as a guarantee of a person’s identity, character, marital status, background, intentions, financial position or suitability.',
        'Verification methods may be limited, automated, incomplete or subject to technical and operational constraints. The Company may update or withdraw verification features and criteria from time to time.',
        'Members must independently verify information that is important to their decision to pursue a relationship or marriage. This may include identity, marital status, family background, employment, education, location and other relevant information.',
        'The Company is not responsible for false statements, omissions, misrepresentations or conduct by members merely because their profiles are displayed or because they have completed a verification step. This does not exclude any responsibility that cannot legally be excluded.',
      ],
    },

    {
      title: '7. Content, photographs and intellectual property',
      paragraphs: [
        'You retain ownership of content that you lawfully create and upload, subject to the rights of third parties and the licences granted under these Terms.',
        'By uploading photographs, profile details, text, messages or other material, you grant the Company a non-exclusive, worldwide, royalty-free licence to host, store, reproduce, display, transmit, format, moderate and process that content only as reasonably necessary to operate, secure, maintain and provide the Platform and its features, subject to the Privacy Policy and applicable law.',
        'This licence does not transfer ownership of your content to the Company. The Company will not use private member photographs or profile content in external promotional campaigns unless it has a separate lawful basis and any consent required by applicable law.',
        'You confirm that you own or have all necessary rights and permissions to upload and share your content. You must not upload content that infringes copyright, trademark, privacy, publicity or other rights.',
        'The Platform’s software, source code, design, branding, logos, graphics, text, user interface, databases and other Company-owned materials are protected by intellectual property laws. You may not copy, modify, distribute, commercially exploit or create derivative works from them without prior written permission.',
        'The Company may remove, restrict or disable access to content that it reasonably believes violates these Terms, applicable law, another person’s rights or member safety requirements.',
      ],
    },

    {
      title: '8. Subscription plans, paid features and payments',
      paragraphs: [
        'The Platform may offer free features and paid membership plans, premium features, add-ons or other paid services. The specific features, subscription duration, price, applicable taxes, payment frequency, restrictions and renewal conditions will be displayed before purchase.',
        'By purchasing a paid plan, you authorise the applicable payment provider or app store to charge the amount disclosed at checkout using your selected payment method.',
        'A subscription provides access only to the features and benefits expressly included in the selected plan. A paid subscription does not guarantee a particular number of matches, profile views, responses, conversations, meetings, compatibility results, engagement, marriage or any other personal outcome.',
        'Unless expressly stated otherwise at the time of purchase, subscriptions are personal to the purchasing account, non-transferable, non-assignable and non-exchangeable. They cannot be transferred to another member, another account or another person, converted into cash or sold to a third party.',
        'Subscriptions cannot be combined, exchanged or extended except where the Company expressly offers such an option or applicable law requires otherwise.',
        'Where a plan includes recurring billing or automatic renewal, the renewal frequency, applicable price and cancellation method will be disclosed before purchase. You are responsible for managing renewal settings through the payment channel used for the purchase.',
        'The Company may revise prices and subscription plans prospectively. Any change affecting an existing recurring subscription will be communicated and implemented subject to applicable law and the relevant payment platform’s requirements.',
        'You are responsible for ensuring that your payment information is valid and that sufficient funds are available. Failed, reversed, disputed or unauthorised transactions may result in delayed activation, suspension of paid features or a request to resolve the payment issue.',
      ],
    },

    {
      title: '9. Cancellation, refunds and no money-back guarantee',
      paragraphs: [
        'Shia Humsafar does not provide a money-back guarantee for matchmaking outcomes, compatibility, member responses, profile visibility, relationship progress, engagement or marriage. The Company does not promise that a member will find a suitable match or receive a particular result from using a paid plan.',
        'Except where a refund is required by applicable law, the relevant app store or payment provider’s mandatory rules, or is approved by the Company under an expressly published refund policy, subscription fees are non-refundable once the paid subscription has been activated.',
        'A member’s decision to stop using the Platform, dissatisfaction with the number or quality of profiles, failure to receive responses, inability to find a suitable match, change of personal circumstances or failure to use all subscription benefits does not by itself create an entitlement to a refund or compensation.',
        'Unused subscription time, unused benefits, profile views, interests, messages or other unused paid features will not ordinarily be refunded, exchanged, transferred or converted into cash, subject to applicable law.',
        'If you purchased a subscription through Google Play, Apple App Store or another third-party platform, cancellation and refund requests may need to be submitted directly through that platform and will be subject to its applicable billing and refund rules.',
        'Uninstalling the application, logging out, deactivating a profile or deleting an account does not automatically cancel a recurring subscription or stop future billing. You must separately cancel recurring billing through the payment channel where you originally purchased the subscription.',
        'Where a member voluntarily deletes their account or profile before the end of a paid subscription period, the associated subscription benefits may become inaccessible and unused benefits will not ordinarily be restored, extended, transferred or refunded. This is subject to any refund or other entitlement required by applicable law or the relevant payment platform.',
        'The Company may review genuine cases involving duplicate payments, failed transactions, unauthorised transactions, technical errors or failure to provide a purchased service. Any refund, reversal or adjustment in such cases will be handled in accordance with applicable law and payment-provider rules.',
        'Nothing in this section excludes or limits a consumer’s mandatory statutory rights or prevents a refund where the Company is legally required to provide one.',
      ],
    },

    {
      title: '10. Account deletion, deactivation and data retention',
      paragraphs: [
        'You may request account deletion or use the account-deletion facility made available by the Platform. The Company may take reasonable steps to verify the request and prevent unauthorised deletion.',
        'Account deletion is intended to remove or disable your profile and associated account access. It does not automatically cancel a subscription purchased through an app store, payment provider or other external billing channel. You must separately cancel any active recurring subscription.',
        'Once an account is deleted, you may lose access to your profile, messages, interests, saved information, matches, subscription features and other account-related benefits. Where technically and legally permissible, deleted account information will be handled in accordance with the Privacy Policy and applicable data-protection law.',
        'Voluntary account deletion does not ordinarily entitle you to a refund, restoration, transfer or extension of unused subscription benefits. Any mandatory legal or payment-platform rights remain unaffected.',
        'The Company may retain limited information after account deletion where necessary to comply with legal obligations, resolve disputes, enforce these Terms, prevent fraud, maintain security, establish or defend legal claims or meet other lawful purposes.',
        'Information retained for a lawful purpose will be protected and retained only for the applicable period and in accordance with the Privacy Policy and relevant legal requirements.',
        'Where a member only wishes to stop using the Platform temporarily, the member should consider available deactivation or visibility controls instead of permanent deletion, if such controls are offered.',
      ],
    },

    {
      title: '11. Privacy and personal information',
      paragraphs: [
        'Your use of the Platform involves the processing of personal information, which may include profile details, photographs, contact information, account information, communications, payment-related information and verification information.',
        'The Company processes personal information in accordance with its Privacy Policy, applicable data-protection laws and the permissions or consents obtained from you.',
        'The Privacy Policy explains the categories of information collected, purposes of processing, sharing arrangements, retention practices, security measures and the rights and choices available to members.',
        'You must use another member’s information only for legitimate matrimonial communication and must not disclose, publish, sell, distribute or misuse that information without lawful authority and appropriate permission.',
        'You should not share passwords, OTPs, bank account details, payment credentials, identity documents or other highly sensitive information with another member through the Platform.',
        'No provision of these Terms authorises the Company to process personal information in a manner prohibited by applicable data-protection law.',
      ],
    },

    {
      title: '12. Safety, meetings and third-party interactions',
      paragraphs: [
        'Online interactions involve risks. Members must exercise independent judgment and reasonable precautions when communicating with or meeting another member.',
        'The Company recommends that members verify important information independently, avoid sharing financial information, never transfer money to a person merely because of an online relationship, meet initially in public places and inform a trusted person about meeting arrangements.',
        'Members should be cautious of requests involving money, gifts, loans, investments, travel expenses, emergency assistance, identity documents, passwords or confidential information.',
        'The Company does not control the conduct of members outside the Platform and cannot guarantee the safety, honesty, identity or intentions of any person. This does not remove the Company’s obligations to take measures required by applicable law.',
        'You can use available blocking and reporting features to report suspicious accounts, harassment, impersonation, fraud, inappropriate content or unwanted contact.',
        'The Company may review reports, investigate suspected violations and take appropriate action. The timing and outcome of an investigation may depend on available information, seriousness, legal requirements and operational circumstances.',
        'If you face immediate danger, contact the relevant local emergency services or law-enforcement authorities. The Platform is not an emergency-response service.',
      ],
    },

    {
      title: '13. Suspension, restriction and termination',
      paragraphs: [
        'The Company may investigate, restrict, suspend or terminate an account, remove content, limit access to features or take other appropriate action where it reasonably believes that a member has breached these Terms, provided false information, engaged in fraud, threatened another member’s safety, misused personal information, violated applicable law or created a risk to the Platform or its members.',
        'The Company may take immediate protective action where reasonably necessary to address suspected fraud, security threats, unlawful activity, serious misconduct or risks to member safety.',
        'Where appropriate and legally permissible, the Company may provide notice of the action and information about available review or appeal mechanisms. The Company is not required to disclose confidential security information, another member’s private information or details whose disclosure is prohibited by law.',
        'The Company may also restrict access where required by a court, government authority, payment provider, app store or other competent authority.',
        'Suspension or termination for a member’s breach does not automatically create an entitlement to a refund of subscription fees or unused benefits, except where required by applicable law or the relevant payment platform’s rules.',
        'You may discontinue use of the Platform and request account closure at any time, subject to the account-deletion, subscription-cancellation and data-retention provisions of these Terms.',
      ],
    },

    {
      title: '14. Platform availability, changes and maintenance',
      paragraphs: [
        'The Company will make reasonable efforts to maintain the availability and proper functioning of the Platform. However, uninterrupted, error-free or continuous availability cannot be guaranteed.',
        'The Platform may be temporarily unavailable due to maintenance, updates, technical failures, network interruptions, cyber incidents, third-party service failures, legal requirements or circumstances beyond the Company’s reasonable control.',
        'The Company may add, modify, suspend or discontinue features, subscription plans, eligibility criteria, technical requirements or other aspects of the Platform for operational, commercial, security or legal reasons.',
        'Where a material change affects an existing paid service, the Company will handle the change in accordance with applicable law, the applicable purchase terms and relevant payment-platform requirements.',
        'The Company does not guarantee that every feature will remain available indefinitely or that the Platform will be compatible with every device, operating system or network.',
      ],
    },

    {
      title: '15. Disclaimers and limitation of liability',
      paragraphs: [
        'The Platform is provided as a technology-based matchmaking service. To the extent permitted by law, the Company does not warrant that the Platform will result in a successful match, relationship, engagement or marriage, or that member-provided information will always be accurate, complete or current.',
        'The Company is not responsible for independent decisions, statements, representations, omissions or conduct of members, including conduct occurring outside the Platform, except to the extent that liability arises from the Company’s own acts or omissions for which it is legally responsible.',
        'To the maximum extent permitted by applicable law, the Company will not be liable for indirect, incidental, special or consequential losses arising from a member’s use of or inability to use the Platform, including loss of opportunity, relationship outcomes, expected matches or anticipated benefits.',
        'To the extent permitted by law, the Company’s aggregate liability arising from a particular paid subscription claim will not exceed the subscription fees actually paid by the affected member to the Company for the relevant subscription during the three months immediately preceding the event giving rise to the claim.',
        'The above limitations do not apply to liability that cannot lawfully be excluded or limited, including applicable statutory consumer rights, fraud, wilful misconduct or other liability that applicable law requires the Company to bear.',
        'Nothing in these Terms excludes liability for the Company’s own legally actionable negligence, failure to perform a contractual obligation or breach of applicable data-protection obligations where such exclusion is prohibited by law.',
      ],
    },

    {
      title: '16. Member indemnity and responsibility',
      paragraphs: [
        'To the extent permitted by applicable law, you agree to be responsible for losses, claims, liabilities and reasonable legal expenses arising directly from your unlawful conduct, fraud, infringement of third-party rights, unauthorised use of the Platform or material breach of these Terms.',
        'This provision applies only to the extent that the relevant loss was caused by your acts or omissions. It does not require you to indemnify the Company for the Company’s own negligence, wilful misconduct, unlawful conduct or breach of obligations that cannot legally be transferred to you.',
        'The Company reserves the right to take appropriate legal action where a member’s conduct causes harm to the Company, another member or a third party.',
      ],
    },

    {
      title: '17. Third-party services and payment platforms',
      paragraphs: [
        'The Platform may integrate with or link to third-party services, including payment gateways, app stores, authentication providers, hosting providers, communication services and external websites.',
        'Third-party services are governed by their own terms, privacy policies and operational rules. The Company does not control all third-party services and is not responsible for their independent acts or omissions, except where applicable law provides otherwise.',
        'Your use of an app store or third-party payment service may require you to comply with that provider’s additional billing, cancellation, refund and account requirements.',
        'A link to an external website or service does not necessarily constitute endorsement, approval or a guarantee by the Company.',
      ],
    },

    {
      title: '18. Grievances and member support',
      paragraphs: [
        'Members may contact the Company using the support and grievance channels displayed on the Platform.',
        'For grievances relating to the Platform, member accounts, payments, content or other service matters, please contact the designated Grievance Officer using the contact information published by the Company.',
        'The Company will acknowledge and process grievances within the timelines and procedures prescribed by applicable law. Where the Information Technology Rules apply, the Company will comply with the relevant grievance acknowledgement and resolution requirements.',
        'The Company may request relevant details, transaction references, screenshots or other reasonably necessary information to investigate a complaint. Members should avoid sending passwords, OTPs or unnecessary sensitive information.',
        'Grievance Officer: [Grievance Officer name]. Email: [Grievance email address]. Registered office: [Registered office address].',
      ],
    },

    {
      title: '19. Changes to these Terms',
      paragraphs: [
        'The Company may revise these Terms to reflect changes in law, regulatory requirements, Platform features, business operations, security practices or member services.',
        'The latest version will be published on the Platform with its effective date. Where a change is material, the Company will provide notice through an appropriate method, such as an in-app notification, email or other legally recognised communication method.',
        'Where required by law, the Company will obtain renewed consent or provide members with an opportunity to accept or reject revised terms before continuing to use affected services.',
        'If you do not agree to revised Terms, you should discontinue use of the Platform and may request account closure. Any active subscription must be separately cancelled through the applicable payment channel and will be handled under the applicable purchase terms and law.',
      ],
    },

    {
      title: '20. Governing law and dispute resolution',
      paragraphs: [
        'These Terms are governed by the laws of India, subject to any mandatory consumer-protection, data-protection or other statutory rights applicable to a member in their jurisdiction.',
        'Members are encouraged to contact the Company through its grievance mechanism first so that concerns can be reviewed and, where appropriate, resolved.',
        'Nothing in these Terms prevents a member from approaching a competent consumer commission, court, regulatory authority or other forum available under applicable law.',
        'Subject to mandatory legal jurisdiction and consumer rights, disputes relating to these Terms will be subject to the jurisdiction of competent courts in [City, State, India].',
      ],
    },

    {
      title: '21. General provisions',
      paragraphs: [
        'If any provision of these Terms is held invalid, unlawful or unenforceable, that provision will be interpreted or limited to the minimum extent necessary, and the remaining provisions will continue to apply to the extent legally permissible.',
        'A failure or delay by the Company in exercising a right under these Terms does not constitute a waiver of that right.',
        'You may not assign, transfer or delegate your account, subscription or rights under these Terms to another person without the Company’s prior written permission, subject to applicable law.',
        'The Company may assign or transfer its rights and obligations in connection with a lawful restructuring, merger, acquisition or transfer of business, subject to applicable law and protection of member rights.',
        'These Terms, together with the policies and additional terms expressly incorporated into them, constitute the agreement between you and the Company concerning use of the Platform.',
        'Nothing in these Terms creates an employment, partnership, agency, joint venture or representative relationship between a member and the Company.',
      ],
    },
  ] as TermsSection[],

  footer: {
    eyebrow: 'Privacy, trust and safer connections',
    safetyTitle: 'Safety Centre',
    safetySubtitle: 'Guidance for responsible and safer matrimonial connections',
  },

  closing: {
    body: 'A meaningful connection begins with honesty, respect and informed decisions.',
    footer: 'Shia Humsafar · Terms & Conditions',
  },
};
