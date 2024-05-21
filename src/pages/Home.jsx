import Banner from '../components/Banner'
import Focus from '../components/Focus'
import iconchat from '../assets/icon-chat.png'
import iconmoney from '../assets/icon-money.png'
import iconsecurity from '../assets/icon-security.png'


function Home() {
  return (
    <main>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Focus title="You are our #1 priority" alt="Chat Icon" paragraph="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." img={iconchat} />
        <Focus title="More savings means higher rates" alt="Chat Icon" paragraph="The more you save with us, the higher your interest rate will be!" img={iconmoney}/>
        <Focus title="Security you can trust" alt="Chat Icon" paragraph="We use top of the line encryption to make sure your data and money is always safe." img={iconsecurity}/>
      </section>
    </main>
  )
}

export default Home