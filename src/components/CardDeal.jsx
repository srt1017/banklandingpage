import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2>Find the best card deal <br className="sm:block hidden"/> in a few easy steps. </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Experience convenience and rewards with our range of credit cards, tailored to fit your spending habits. Plus, our user-friendly online banking platform lets you access your accounts anytime, anywhere.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%] relative z-[5]"/>
        
    </div>
  </section>
)

export default CardDeal