import BreadCrumb from "../../components/utilities/BreadCrumb"
import Input from './../../components/utilities/Input';
import Accordion from "./Accordion";



const Contact = () => {

  let pathname = window.location.href;
  let patharray = pathname.split("/");
  let finalpath = patharray[patharray.length - 1]


  const AccordionSections = [
    {
      title: "Germany Office",
      content: "575 Crescent Ave. Quakertown, PA 18951",
      phone: '+432 533 12 523',
      domain: 'info@domain.com',
      time: 'Mon - Fri: 9am - 6pm'
    },
    {
      title: "Slovakia Office",
      content: "575 Crescent Ave. Quakertown, PA 18951",
      phone: '+432 533 12 523',
      domain: 'info@domain.com',
      time: 'Mon - Fri: 9am - 6pm'
    },
    {
      title: "Lithuania Office",
      content: "575 Crescent Ave. Quakertown, PA 18951",
      phone: '+432 533 12 523',
      domain: 'info@domain.com',
      time: 'Mon - Fri: 9am - 6pm'
    },

  ]


  return (
    <section>
      <div className="max-w-container mx-auto">
        <div className="py-[125px]">
          <h3 className="text-[49px] text-[#262626] font-bold font-dm ">Contact</h3>
          <BreadCrumb lastPath={finalpath} />
        </div>
        {/* Form Part Start Here */}
        <h3 className="font-dm text-[39px] text-[#262626] leading-normal font-bold">Fill up a Form</h3>
        <div className="w-[780px] mb-[140px] mt-[42px] flex flex-col gap-y-[23px]">

          <div className="flex flex-col">
            <label className="font-dm text-[#262626] text-base font-bold leading-[23px]" htmlFor="name">Name</label>
            <Input className="border-b border-[#F0F0F0] outline-none py-3" type="text" placeholder="Your Name" />
          </div>

          <div className="flex flex-col">
            <label className="font-dm text-[#262626] text-base font-bold leading-[23px]" htmlFor="name">Email</label>
            <Input className="border-b border-[#F0F0F0] outline-none py-3" type="email" placeholder="Your Email" />
          </div>

          <div className="flex flex-col">
            <label className="font-dm text-[#262626] text-base font-bold leading-[23px]" htmlFor="name">Message</label>
            <textarea className="border-b border-[#F0F0F0] outline-none py-3 h-[138px]  resize-none" placeholder="Your message here" ></textarea>
          </div>

          <button className="bg-[#262626] text-white text-base font-bold font-dm py-[16px] px-[85px] w-max mt-[7px]">Post</button>

        </div>

        {/* Google Map Start Here */}
        <div className="mb-[140px] relative">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.235660871933!2d90.41719612364712!3d23.810217628629648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b31d5ca839%3A0xe3e833b2d455d5ec!2sNadda%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1704307775233!5m2!1sen!2sbd" width="100%" height="572" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          {/* Accordion in Google Map */}
          <div className="h-[450px] w-[400px] bg-white absolute left-20 top-20 py-[30px] px-[20px]">
            <Accordion sections={AccordionSections} />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
