import React from "react";
import ServicesPageContent from "../../components/common/ServicesPageContent";

export default function Index() {
  const content = {
    bannerContent: {
      title: "Cyber Security",
      description:
        "Cyber security involves protecting computer systems, networks, and data from digital attacks, ensuring the confidentiality, integrity, and availability of information.",
      bannerStyle: "banner-bg-cs",
    },
    paragraph:
      "Cyber security is the practice of safeguarding computer systems, networks, and data from malicious attacks and unauthorized access. It encompasses a range of strategies and technologies designed to protect against threats such as malware, ransomware, phishing, and hacking. Effective cyber security ensures the confidentiality, integrity, and availability of information, which is critical in today's digital age where cyber threats are increasingly sophisticated and pervasive. Organizations must implement robust security measures, including firewalls, encryption, multi-factor authentication, and regular security audits, to protect sensitive data and maintain trust with customers and stakeholders. Continuous education and awareness are also essential in fostering a security-conscious culture and mitigating risks associated with human error.",
  };
  return <ServicesPageContent key={Index} item={content} />;
}
