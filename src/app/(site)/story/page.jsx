import Head from "next/head";
import React from "react";

const StoryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-brown-500 via-yellow-100 to-light-green-500 py-12 px-6 flex items-center justify-center pt-20">
      <Head>
        <title>बुरांश फाउंडेशन: समाज सेवा की प्रेरक कहानी</title>
        <meta
          name="description"
          content="बुरांश फाउंडेशन की प्रेरक कहानी पढ़ें, जो समाज सेवा के प्रति समर्पित है। यह कहानी विशेष रूप से श्रीमती हरूली देवी जी के जीवन से प्रेरित है।"
        />
        <meta
          name="keywords"
          content="बुरांश फाउंडेशन, समाज सेवा, प्रेरणा, सामाजिक कार्य, उत्तराखंड, सामाजिक जिम्मेदारी, पुस्तक दान, शिक्षक कक्षाएं"
        />
        <meta
          property="og:title"
          content="बुरांश फाउंडेशन: समाज सेवा की प्रेरक कहानी"
        />
        <meta
          property="og:description"
          content="बुरांश फाउंडेशन की प्रेरक कहानी, जो समाज सेवा और शिक्षा के क्षेत्र में काम करती है।"
        />
        <meta
          property="og:url"
          content="https://www.buranshfoundation.in/story" // Replace with the actual story page URL
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.buranshfoundation.in/logo.jpg" // Replace with an appropriate image URL
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="बुरांश फाउंडेशन: समाज सेवा की प्रेरक कहानी"
        />
        <meta
          name="twitter:description"
          content="बुरांश फाउंडेशन की प्रेरक कहानी, जो समाज सेवा में योगदान करती है।"
        />
        <meta
          name="twitter:image"
          content="https://www.buranshfoundation.in/logo.jpg" // Replace with an appropriate image URL
        />
      </Head>

      <div className="max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-brown-800 py-4">
            बुरांश फाउंडेशन: समाज सेवा की प्रेरक कहानी
          </h1>

          {/* Section with images */}
          <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 w-full ">
              <img
                src="/assets/amma.jpg" // Replace with the actual image path
                alt="Inspiring Person"
                className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md"
              />
              <p className="text-lg text-gray-800 leading-relaxed md:w-1/2">
                यूं तो समाज के प्रति सेवा का भाव मुझे विरासत में मिला है। अपने
                परिवार में विशेष रूप से मुझे अपनी दादी स्वर्गीय श्रीमती हरूली
                देवी जी के व्यक्तित्व ने बहुत प्रभावित किया। बहुत कम संसाधनों के
                साथ जीवन व्यापन करने के बावजूद, समाज के ज़रूरतमंद लोगों की
                यथासंभव मदद करने की उनकी भावना ने मुझे सामाजिक शिक्षा देते हुए
                समाज के प्रति संवेदनशील बनाया।
              </p>
            </div>
          </div>

          <div className="gap-2">
            <p className="text-lg text-gray-800 leading-relaxed ">
              किसी महान दार्शनिक ने भी कहा है कि हर व्यक्ति के जीवन में उसके
              दोहरे उत्तरदायित्व होते हैं: एक उसके स्वयं और उसके परिवार के
              प्रति, और दूसरा उत्तरदायित्व समाज और अपने लोगों के प्रति। यदि किसी
              व्यक्ति को जीवन में यह दोनों उत्तरदायित्व निभाने का अवसर मिले तो
              यह बड़े सौभाग्य की बात है।
            </p>
            <p className="text-lg text-gray-800 leading-relaxed ">
              एक ओर हमारे समाज ने पिछले कई वर्षों में खूब प्रगति की है, किंतु
              विकास की अंधी दौड़ और आधुनिकीकरण की छद्म होड़ ने हमारे मानवीय,
              नैतिक, सांस्कृतिक और मौलिक पतन को बढ़ावा दिया है। इन गिरावटों को
              देखकर मन अत्यंत खिन्न हो जाता था। मन में विचार आता था कि समाज के
              सुधार हेतु कुछ प्रयास करूं।
            </p>
          </div>
          {/* Blockquote with image inside */}
          <div className="mb-6">
            <blockquote className="bg-pink-50 p-6 rounded-lg shadow-md italic border-l-4 border-pink-500">
              <img
                src="/assets/pustakdan.jpg" // Replace with the actual image path
                alt="Community Work"
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <p>
                सांध्य रवि ने कहा मेरा काम अब लेगा कौन ....!
                <br />
                रह गया सुनकर जगत सारा निरुत्तर मौन।
                <br />
                फिर एक माटी के दीये ने कहा विनम्रता के साथ,
                <br />
                जितना हो सकेगा मैं करूंगा नाथ।।
              </p>
            </blockquote>
          </div>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            इन पंक्तियों ने मुझे ऊर्जा से भर दिया, और मैंने सोचा कि नन्हा सा
            दीपक बनने की कोशिश ज़रूर करूंगा। मैंने छोटे-छोटे सामाजिक कार्य शुरू
            किए, जैसे गरीब बच्चों के पुस्तकालय खोलने हेतु पुस्तक दान अभियान,
            निशुल्क शिक्षक कक्षाएं चलाना, विभिन्न जागरूकता अभियान, बाल
            कार्यशालाएं आदि।
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            आगे चलकर मुझे आभास हुआ कि अपनी समाजोपयोगी मुहिम को जन-जन तक पहुंचाने
            के लिए एक उपयुक्त मंच की आवश्यकता है। मैंने अपना यह विचार राज्य
            आंदोलनकारी और हमारे प्रेरणा स्रोत श्री दुर्गा दत्त भट्ट जी, समाज
            सेविका श्रीमती रेनू तिवारी जी एवं इंजीनियर श्री दिवाकर जी के समक्ष
            रखा। आप सभी ने मेरे इस विचार को अनुमोदन दिया और बुरांश फाउंडेशन का
            पंजीकरण हुआ।
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            मैं युवा पीढ़ी से अपील करता हूं कि वे बुरांश फाउंडेशन के साथ जुड़कर
            समाज के प्रति अपने कर्तव्यों का पालन करते हुए एक छोटा सा दीपक बनने
            का प्रयास ज़रूर करें, क्योंकि अंधेरा मिटाने को एक दीपक ही काफ़ी है।
          </p>
          <p className="text-lg text-gray-800 text-right font-semibold mt-8">
            - श्रीमान गिरीश पैंतोला
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
