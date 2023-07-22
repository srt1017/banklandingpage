/* eslint-disable react/no-unescaped-entities */
import { apple, bill, google } from "../assets"
import styles, { layout } from "../style"

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" /> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      At Hoobank, we understand that each individual's financial journey is unique, which is why we offer a range of personalized banking solutions to suit your needs. Whether you're saving for a dream vacation, planning for your child's education, or looking to grow your wealth, we've got you covered.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="app store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
        <img src={google} alt="google store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
      </div>
    </div>
  </section>
)

export default Billing