import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from '../components/Button'


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card `} >
  <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
    <img src={icon} alt="icon" className='w-1/2 h-1/2 object-contain'/>
  </div>
  <div className='flex-1 flex flex-col ml-3'>
  <h4 className='text-white font-poppins font-semibold text-lg'>{title}</h4>
  <p className={`${styles.paragraph} font-poppins font-normal text-lg`}>{content}</p>
  </div>

  </div>
)


const Business = () => {
  return (
    <section id='features' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h4 className={styles.heading2}>You do the business, <br className='sm:block hidden'/> we’ll handle the money.</h4>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
    <Button styles='mt-10'/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
    {features.map(( feature, index ) => (
      <FeatureCard key={feature.id} {...feature} index={index} />
    ))}
    </div>
      
    </section>
  )
}

export default Business