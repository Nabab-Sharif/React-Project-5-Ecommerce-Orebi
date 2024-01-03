import { useState } from "react";


const Accordion = ({ sections }) => {

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  }


  return (
    <>
      <div className="flex flex-col gap-y-[57px]">
        {
          sections.map((section, index) => (

            <div key={index} className="">

              <div className="flex justify-between items-center">
                <p className="text-[#262626] text-[16px] font-bold font-dm leading-[23px] mb-[20px]">{section.title}</p>
                <button onClick={() => toggleSection(index)} className="text-[20px] text-[#262626] font-bold">
                  {activeSection === index ? '+' : '-'}
                </button>
              </div>

              {
                activeSection === index &&
                <>
                  <p className="text-[#767676] text-[16px] font-dm font-normal leading-[40px]">{section.content} <br />
                    {section.phone}
                    <br />
                    {section.domain}
                    <br />
                    {section.time}
                  </p>
                </>
              }
            </div>

          ))
        }
      </div>


    </>
  )
}

export default Accordion
