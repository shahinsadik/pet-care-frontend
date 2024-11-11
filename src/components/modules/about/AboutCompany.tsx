import { Image } from "@nextui-org/image";

const AboutCompany = () => {
  return (
    <div className="mt-20 mb-10 lg:mx-14 mx-8">
      <div className="grid lg:grid-cols-2  gap-7">
        <div>
          <h1 className="text-3xl font-bold text-teal-500">
            PET CARE COMPANY IN BANGLADESH
          </h1>
          <p className="lg:mt-5 sm:mt-3 text-justify">
          Pet Care Tips & Stories is a go-to platform for pet owners, offering expert advice and engaging stories on pet wellness, from nutrition to grooming. It features practical guides, a supportive community, and premium content options. With interactive tools like commenting, upvoting, and advanced search, users can easily access tailored advice and connect with fellow pet lovers for a comprehensive pet care experience.
          </p>
        </div>
        <div>
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/assets/About-company.jpg"
          />
        </div>
      </div>
      {/* mission and vision of the company */}
      <div className="my-5">
        <h1 className="text-2xl font-bold text-teal-500">OUR MISSION</h1>
        <p className="text-justify">
        Our Mission at Pet Care Tips & Stories is to empower pet owners with the knowledge and resources they need to provide the best care for their furry companions. We are dedicated to offering expert advice, insightful stories, and a supportive community to help pets live healthier, happier lives. Our mission is to create a trusted platform where pet owners can learn, connect, and share their journeys, ensuring every pet receives the love and care they deserve.
        </p>
      </div>
      <div className="my-5">
        <h1 className="text-2xl font-bold text-teal-500">OUR VISION</h1>
        <p className="text-justify">
        Our Vision at Pet Care Tips & Stories is to become the leading online platform for pet owners, fostering a community where every pet is understood, loved, and cared for. We envision a world where pet owners have access to expert advice, inspiring stories, and a supportive network to make informed decisions about their pets' health and happiness. Through continuous learning, innovation, and compassion, we strive to enhance the bond between pets and their owners, creating a future where pets thrive and live their best lives.
        </p>
      </div>
    </div>
  );
};

export default AboutCompany;
