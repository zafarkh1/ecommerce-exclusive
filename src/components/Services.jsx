import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine, RiVerifiedBadgeFill } from "react-icons/ri";

const items = [
  {
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
    icon: <TbTruckDelivery />,
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
    icon: <RiCustomerServiceLine />,
  },
  {
    title: "MONEY BACK GUARANTEE",
    desc: "We reurn money within 30 days",
    icon: <RiVerifiedBadgeFill />,
  },
];

function Services() {
  return (
    <div className="container mx-auto lg:mb-16 mb-12">
      <p className="text-red-700 flex items-center gap-4 lg:text-lg">
        <span className="bg-red-700 h-8 w-3 rounded-sm"></span>
        <span className="font-semibold">Services</span>
      </p>
      <h2 className="lg:text-4xl text-2xl font-medium lg:mt-4 lg:mb-9 mt-3 mb-7 text-center lg:text-left">
        Our services
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {items.map((item, index) => (
          <div className="flex flex-col lg:gap-4 gap-2 items-center">
            <div className="bg-gray-400 text-4xl rounded-full p-4">
              {item.icon}
            </div>
            <h3 className="lg:text-2xl text-base font-bold">{item.title}</h3>
            <p className="lg:text-base text-sm text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
