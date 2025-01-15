import { Button, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { RiUser3Fill } from "react-icons/ri";
import { assets } from "../../assets/assets";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const formData = {
      name,
      email,
    };

    console.log(formData)
    e.target.name.value=''
    e.target.email.value=''
  };

  return (
    <section style={{ backgroundImage: `url(${assets.GymImage})` }} className="relative bg-cover bg-center h-full py-20 md:py-32 px-3 sm:px-10 md:px-16 lg:px-20">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
      <div className="relative flex flex-col md:flex-row lg:gap-10 justify-between">
        {/* Left Side - Text */}
        <div className=" mb-8 lg:mb-0 md:w-1/2">
          <h2 className="text-3xl font-bold text-white mb-4 font-prata">
            Stay Updated with TrueFit
          </h2>
          <p className="text-gray-300">
            Get the latest updates, fitness tips, and exclusive offers delivered
            to your inbox.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="name" className="text-white" value="Your Name" />
                </div>
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  icon={RiUser3Fill}
                  color="blue"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="email4" className="text-white" value="Your email" />
                </div>
                <TextInput
                  id="email4"
                  name="email"
                  type="email"
                  icon={HiMail}
                  color="blue"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
            </div>

            <Button color="blue" type="submit">Subscribe Now</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
