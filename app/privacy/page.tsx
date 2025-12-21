"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: `When you join U.T.M, we may collect personal information such as your name, email address, username, and any other information you voluntarily provide.

We may also automatically collect limited technical data related to your use of the platform, such as device type, browser type, and operating system, for analytics and security purposes.

Additionally, we may collect information when you communicate with us through emails, messages, or any other forms of interaction.

-Payment Information:

All payments are securely processed by Whop, a third-party payment platform.
U.T.M does not store, process, or have access to users’ full credit or debit card details.

Payment processing is subject to Whop’s own Privacy Policy and Terms of Service.`,
    },
    {
      title: "How We Use Your Information",
      content: `We may use the information we collect for various purposes, including but not limited to:

• Operating and maintaining U.T.M and its features.
• Managing memberships and user access.
• Communicating with you regarding your account or subscription.
• Improving educational content and user experience.
• Monitoring platform usage and preventing misuse.
• Complying with applicable legal obligations and protecting our rights.`,
    },
    {
      title: "How We Share Your Information (We do not sell or rent your personal information)",
      content: `We may share limited information only under the following circumstances:

• With service providers (such as Whop) strictly for operational purposes.
• With your consent or when you voluntarily share information within the community.
• When required by law or to enforce our policies and protect our rights.`,
    },
    {
      title: "Your Choices",
      content: `You have certain options regarding the personal information we collect, including:

• Choosing not to provide some types of information, understanding that this may limit access to certain features of U.T.M.
• Requesting updates or corrections to your personal information by contacting us.
• Opting out of promotional communications by following the instructions included in such messages.`,
    },
    {
      title: "Data Security",
`We implement reasonable administrative and technical measures to protect your information from unauthorized access, loss, or misuse.

However, no online platform can guarantee absolute security. By using U.T.M, you acknowledge that data transmission occurs at your own risk.`,
    },
    {
      title: "Children's Privacy",
      content: `U.T.M is not intended for individuals under the age of 18, and we do not knowingly collect personal information from minors.

If you are under 18, please do not provide any personal information on the platform.`,
    },
    {
      title: "Changes to This Privacy Policy",
      content: `We may update or modify this Privacy Policy from time to time, and any changes will be posted on this page.

By continuing to use U.T.M after such changes are applied, you acknowledge and accept the updated Privacy Policy.`,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
        
          
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
          
          <p className="text-base text-gray-600 mb-8">
            This Privacy Policy explains how University of Trading MA ("U.T.M", "we", "us", or "our") collects, uses, and shares personal information from users ("you", "your") of our educational trading community.
          </p>

          <div className="mb-8 bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <p className="text-base text-gray-700">
              By accessing or using U.T.M, you acknowledge and agree to the terms outlined in this Privacy Policy.
            </p>
          </div>

          <div className="text-base text-gray-700 leading-relaxed space-y-8">
            {sections.map((section, index) => (
              <div key={section.title}>
                <h2 className="font-semibold text-lg mb-3 text-gray-900">{index + 1}. {section.title}</h2>
                <p className="whitespace-pre-wrap">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <h2 className="font-semibold text-lg mb-3 text-gray-900">Contact Us</h2>
            <p className="text-base text-gray-700">
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:{" "}
              <a href="mailto:support@universityoftradingma.com" className="text-blue-600 underline hover:text-blue-800">
                support@universityoftradingma.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
