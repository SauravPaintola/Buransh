"use client";

import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";

// Array of testimonials
const testimonials = [
  {
    message: `"<span class='text-lg'>From a young age, I felt an indescribable joy in helping others—a serotonin rush that warmed my heart and shaped who I am. Giving is a part of my soul and personality and brings me immense fulfillment. When I learned about the Buransh Foundation, I knew it was the perfect platform to channel my passion.</span><br/><br/>
    <span class='text-lg'>Joining the foundation was like finding a home for my dreams. It gave me a purpose to work for the betterment of students, women, and the villages where our roots lie. Our culture, heritage, and the voices of those who need empowerment must no longer remain hidden. Together, we can lift the veil and create a brighter, more inclusive future.</span><br/><br/>
    <b class='text-lg'>I urge everyone to reconnect with their roots and embrace the beauty of where we come from—it’s a story worth sharing, and a legacy worth preserving.</b>"`,
    name: "Riya",
    designation: "Volunteer",
    image: "/assets/user.png",
  },
  {
    message: `"<span class='text-lg'>बुरांश फाउंडेशन से जुड़ना मेरे लिए बहुत गर्व की बात है। मैं इस संस्था के संस्थापक श्री गिरीश चंद्र पैंतोला जी का हार्दिक धन्यवाद करना चाहूंगी कि उन्होंने मुझे बुरांश फाउंडेशन से जुड़ने की प्रेरणा दी और इस फाउंडेशन के माध्यम से समाज के लिए कुछ करने का अवसर प्रदान किया। मैं हमेशा से चाहती थी कि मैं भी समाज के लिए कुछ कर सकूं लेकिन कभी ऐसा अवसर या मंच नहीं मिला।</span><br/><br/>
    <span class='text-lg'>हमारे समाज में कई लोग अभावग्रस्त हैं, जरूरतमंद हैं। इसके साथ ही कई प्रकार की व्याधियां समाज में फैली हुई है जिनके प्रति समाज को जागरूक करने की आवश्यकता है। मुझे विश्वास है कि संस्था के माध्यम से हम एक टीम गठित करते हुए निस्वार्थ भाव से समाज की सेवा करने में सफल होंगे।</span><br/><br/>
    <b class='text-lg'>मैं युवा पीढ़ी से अपील करना चाहती हूं कि आप हमारी इस संस्था से जुडें और समाज को एक दिशा देने में अपनी महत्वपूर्ण भूमिका का निर्वहन करें। हार्दिक धन्यवाद।</b>"`,
    name: "Renu Ji",
    designation: "Director",
    image: "https://via.placeholder.com/150", 
  },
  {
    message: `"<span class='text-lg'>Buransh Foundation helps people by using all their resources to make small and effective changes. The foundation is working for Uttarakhand’s culture, education, health, and environment preservation, providing better opportunities to women and children and bringing positive change in society.</span><br/><br/>
    <span class='text-lg'>The work of the Buransh Foundation is truly inspiring. The work the Foundation is doing especially for women and children is commendable. I feel proud to be a part of this foundation.</span><br/><br/>
    <b class='text-lg'>I want to appeal to everyone through this Foundation that you all should support us in enriching and strengthening the culture of Uttarakhand and in environmental protection, student welfare, and women empowerment. Make your contribution.</b>"`,
    name: "Pooja Paintola",
    designation: "Volunteer",
    image: "https://via.placeholder.com/150",
  },
  {
    message: `"<span class='text-lg'>Growing up in a small village in Uttarakhand, I’ve seen both the beauty of our culture and the struggles of our people. My brother has always been my biggest inspiration, teaching me the value of staying connected to our roots. But it breaks my heart to see the younger generation drifting away from our traditions.</span><br/><br/>
    <span class='text-lg'>I’ve experienced the challenges firsthand—studying in a village with limited resources and opportunities. When I moved to the city, I realized how important the right support is, but I also saw how easily our traditional values are forgotten in the rush for progress.</span><br/><br/>
    <b class='text-lg'>A single person can bring perspective, but a large population can bring an actual change. We need your help. Please connect with us and become a part of us. Become a part of our beautiful state.</b>"`,
    name: "Diwakar Paintola",
    designation: "Director",
    image: "https://via.placeholder.com/150",
  },
  {
    message: `"<span class='text-lg'>उत्तराखंड के लिए मेरा सपना
    मैंने अपने जीवन में उत्तराखंड को बदलते हुए देखा है। हमारे पहाड़ तो अटल हैं, लेकिन हमारी संस्कृति धीरे-धीरे मिट रही है। यह देखना दिल तोड़ देता है। मैं उत्तराखंड आंदोलन का हिस्सा था, रामपुर तिराहा कांड के दौरान मैं अपनी टीम के साथ कुमाऊं से दिल्ली के रामलीला मैदान तक पहुंचा। वह संघर्ष भरा वक्त था, पर आज भी लगता है कि हमारी असली लड़ाई बाकी है—अपनी जड़ों और पहचान को बचाने की।</span><br/><br/>
    <span class='text-lg'>जब बुरांश फाउंडेशन का विचार सामने आया और इसके संस्थापक गिरीश चंद्र पैंतौला जी के विजन को साकार करने का अवसर मिला, तो मैंने इसे खुशी और गर्व के साथ स्वीकार किया। यह मेरे लिए अपने राज्य के लिए कुछ बड़ा और सकारात्मक करने का सुनहरा मौका था।</span><br/><br/>
    <b class='text-lg'>आपका सहयोग जरूरी है
    यह यात्रा अकेले नहीं हो सकती। मैं चाहता हूं कि आप भी इस सपने का हिस्सा बनें। अपनी भागीदारी, समय, विचार, या समर्थन के साथ, आप उत्तराखंड के इस बदलाव को संभव बना सकते हैं। चलिए, साथ मिलकर अपने राज्य को एक नई दिशा देते हैं और इसे इसकी पूरी क्षमता तक पहुंचाते हैं।</b>"`,
    name: "DD Bhatt",
    designation: "Volunteer",
    image: "https://via.placeholder.com/150",
  },
];

const TestimonialPage = () => {
  return (
    <div className="min-h-screen w-full lg:mt-0">
      <Carousel
        className="rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 border rounded-full z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4 border rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
          {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full h-screen flex flex-col items-start justify-center gap-4 px-8 lg:px-16"
          >
            <h1
              className="text-lg text-gray-600 leading-relaxed text-left w-full gap-5"
              dangerouslySetInnerHTML={{ __html: testimonial.message }}
            />
            <div className="flex items-center gap-4">
              <div className="rounded-full w-12 h-12 border shadow-sm overflow-hidden">
                <img src={"./assets/user.png"} alt={testimonial.name} />
              </div>
              <div className="flex flex-col tracking-wider">
                <label className="text-gray-600 font-bold text-base">
                  {testimonial.name}
                </label>
                <label className="text-gray-400 font-normal text-sm">
                  {testimonial.designation}
                </label>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default TestimonialPage;
