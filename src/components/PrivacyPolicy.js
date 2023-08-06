import React, { useEffect, useState } from 'react'

const PrivacyPolicy = () => {
    const [isVisible, setIsVisible] = useState(false);

  const privacypolicyref = React.useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(privacypolicyref.current);
      }
    });

    observer.observe(privacypolicyref.current);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="privacy-policy">
      <img
        src="https://demo2wpopal.b-cdn.net/triply/wp-content/uploads/2020/11/breadcrumb-bg.jpg"
        alt="visa"
      />
      <div className="w-[1200px] mx-auto leading-8 fade-in-text">
        <h1 className="text-[#FEA216] text-center mt-[10px] privacy-policy-top">
          Privacy Policy for Red Letter Holidays
        </h1>
        <div className="text-[#7F6D66] mt-[15px] privacy-policy-top">
          <p>
            Red Letter Holidays is an online travel platform that offers
            information on various destinations around the world, including
            recommendations for hotels, vacation rentals, travel packages,
            cruises, and more. Our website is a part of Red Letter Holidays and
            is based in Gurgaon, India.
          </p>
          <p>
            At Red Letter Holidays, we value the opinions and views of our
            visitors and strive to ensure that they are not biased. We take all
            necessary measures to ensure that any personal information shared by
            our visitors remains confidential. Before submitting any personal
            information on our website, we encourage our visitors to read this
            policy carefully to understand our privacy practices. By accessing
            and using the services offered by Red Letter Holidays, we assume
            that you accept the practices described in this privacy policy. We
            are committed to maintaining the privacy and security of our
            visitors' personal information and will take all necessary steps to
            ensure its protection.
          </p>
        </div>
        <h2 className="text-[#FEA216] text-center privacy-policy-top">Data Protection Rules</h2>
        <p className="text-[#7F6D66] mt-[10px] privacy-policy-top">
          At Red Letter Holidays, we have a policy not to disclose visitors'
          personal information with any third parties who are not affiliated
          with us. However, if any link on our website takes visitors to another
          website, we recommend that they review the privacy policy of that
          particular website too. We are committed to protecting our visitors'
          personal information and take all necessary measures to ensure that it
          remains secure and confidential. By accessing and using the services
          offered by Red Letter Holidays, we assume that visitors accept the
          practices described in this privacy policy.
        </p>
        <h2 className="text-[#FEA216] capitalize text-center privacy-policy-top">
          Why we use your personal information
        </h2>
        <ul className='privacy-policy-top'>
          <li className="text-[#7F6D66]">
            1.To ensure that your travel plans go smoothly, we will verify your
            reservations with the relevant service providers. This is done to
            confirm that everything is in order and to avoid any unexpected
            issues during your trip. Rest assured that we will take care of this
            step so that you can have a worry-free travel experience.
          </li>
          <li className="text-[#7F6D66] mt-[10px]">
            2.We understand the importance of receiving timely updates on your
            travel plans, which is why we offer the option to send booking
            confirmations through various messaging services, including SMS and
            WhatsApp. This allows you to stay up-to-date with your itinerary and
            ensures that you have all the necessary information for a seamless
            travel experience. You can choose the messaging service that works
            best for you, and we'll take care of the rest.
          </li>
          <li className="text-[#7F6D66] mt-[10px]">
            3.We value our customers' feedback and strive to improve our
            products and services based on their suggestions. Therefore, we
            encourage our customers to share their reviews and opinions about
            their experiences with us, including any suggestions they may have
            for improvements. This helps us to better understand our customers'
            needs and preferences, and to provide them with the best possible
            service. We welcome all feedback and are committed to continuously
            improving our offerings to ensure that our customers have the best
            possible experience with us.
          </li>
          <li className="text-[#7F6D66] mt-[10px]">
            4.We love celebrating special occasions with our customers and
            believe in making them feel valued. That's why we offer a special
            gift or offer to our customers on their birthdays or anniversaries.
            It's our way of showing our appreciation and thanking them for
            choosing us as their travel provider. So, don't forget to let us
            know when your special day is coming up, and we'll be happy to offer
            you a personalized gift or special offer to make your day even more
            memorable.
          </li>
        </ul>
        <div
          className={`fade-in-section ${isVisible ? "is-visible" : ""} privacy-policy-top`}
          ref={privacypolicyref}
        >
          <h2 className="text-[#FEA216] capitalize text-center">
            How long do we keep your personal information?
          </h2>
          <p className="text-[#7F6D66] mt-[10px]">
            At Red Letter Holidays, we understand the importance of protecting
            your personal information and will only retain it on our servers for
            as long as is reasonably necessary to fulfill the purposes outlined
            in our privacy policy. In some cases, we may need to retain your
            personal information for longer periods of time, such as when we are
            legally or regulatory required to do so, including tax or accounting
            requirements. Once your personal data is no longer needed for the
            purposes outlined in our privacy policy, we will take appropriate
            measures to securely delete it or store it in a way that ensures it
            will no longer be used by our business. We take the security and
            privacy of your personal information seriously and are committed to
            ensuring it is handled in accordance with the highest standards of
            data protection.
          </p>
          <h2 className="text-[#FEA216] capitalize text-center">
            Changes to Privacy Policy
          </h2>
          <p className="text-[#7F6D66] mt-[10px]">
            Red Letter Holidays reserves the sole rights to add/modify the
            private policy at any time. Although we update our visitors such
            changes through emails, but we still recommend visitors of our site
            to read the private policy periodically before using the site. In
            case of any information on data protection, you can always write to
            us at: hello@redletterholidays.com we would be glad to help you as
            soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy