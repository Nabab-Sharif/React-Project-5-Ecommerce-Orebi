import BreadCrumb from "../../components/utilities/BreadCrumb"


const CheckoutPage = () => {
  let pathname = window.location.href;
  let pathArray = pathname.split("/");
  let finalPath = pathArray[pathArray.length - 1];


  return (
    <>
      <section className="pt-[124px] pb-[140px]">
        <div className="max-w-container mx-auto">
          <div>
            <h3 className="text-[49px] text-[#262626] font-bold font-dm capitalize mb-[11px]">Checkout</h3>
            <BreadCrumb lastPath={finalPath} />
          </div>
        </div>
      </section>
    </>
  )
}

export default CheckoutPage
