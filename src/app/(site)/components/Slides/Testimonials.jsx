import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center py-5">
      <div className="w-full bg-white px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-5 text-gray-600">
              Read the sight of <br /> our volunteers.
            </h1>
            <h3 className="lg:text-xl mb-5 font-light">
              Discover what our volunteers have to say about the Buransh
              Foundation 
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-green/30 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-green/30 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-green/30"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-green/30 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-green/30 ml-1"></span>
            </div>
          </div>
          <div className="-mx-3 gap-3 grid md:grid-cols-2 lg:grid-cols-3 masonry">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full h-full">
                <Link href="/testimonials">
                  <p className="block w-full rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 h-full hover:shadow-md transition-shadow">
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          {testimonial.name}
                        </h6>
                        <p className="text-xs text-gray-500">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm line-clamp-3">
                        {testimonial.message
                          .replace(/<[^>]+>/g, "")
                          .substring(0, 100)}
                        ...
                      </p>
                      <span className="text-blue-500 text-xs">Read More</span>
                    </div>
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    message: `From a young age, I felt an indescribable joy in helping others—a serotonin rush that.`,
    name: "Riya",
    designation: "Volunteer",
    image: "/assets/user.png",
  },
  {
    id: 2,
    message: `बुरांश फाउंडेशन से जुड़ना मेरे लिए बहुत गर्व की बात है। मैं इस संस्था के संस्थापक श्री गिरीश चंद्र.`,
    name: "Renu Ji",
    designation: "Volunteer",
    image: "/assets/user.png",
  },
  {
    id: 3,
    message: `Buransh Foundation helps people by using all their resources to make small and effective changes.`,
    name: "Pooja Paintola",
    designation: "Volunteer",
    image: "/assets/user.png",
  },
  {
    id: 4,
    message: `Growing up in a small village in Uttarakhand, I’ve seen both the beauty of our culture and the struggles.`,
    name: "Diwakar Paintola",
    designation: "Volunteer",
    image: "/assets/user.png",
  },
  {
    id: 5,
    message: `उत्तराखंड के लिए मेरा सपना: मैंने अपने जीवन में उत्तराखंड को बदलते हुए देखा है। हमारे पहाड़ तो अटल हैं, लेकिन हमारी संस्कृति धीरे-धीरे मिट रही है।`,
    name: "DD Bhatt",
    designation: "Volunteer",
    image: "/assets/user.png",
  },
];



export default Testimonials;
