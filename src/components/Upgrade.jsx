import { motion } from 'framer-motion';
import { fadeBlock } from '../utils/motion';

import updateImage from '../assets/img-upgrade.png'; // Assuming this is the correct path to your image


const svg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>

const Upgrade = () => {
  return (
      <section id='upgrade' className="container mx-auto flex flex-col md:flex-row items-center justify-between my-32">
        {/* Left Section: Content */}
        <motion.div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <h2 className="text-2xl text-tertiary mb-4">Upgrade</h2>
          <h1 className="text-4xl mb-6">Upgrade Your Storage Layer</h1>
          <p className="text-lg text-accent mb-8">
            Get faster, safer, more affordable cloud object storage with no central point of failure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-accent">
            <div className="flex items-center text-lg">
              <span className="text-white mr-2">{svg}</span>
              <span>100% Secure</span>
            </div>
            <div className="flex items-center text-lg">
              <span className="text-white mr-2">{svg}</span>
              <span>A Fraction of the Cost</span>
            </div>
            <div className="flex items-center text-lg">
              <span className="text-white mr-2">{svg}</span>
              <span>More Durable</span>
            </div>
            <div className="flex items-center text-lg">
              <span className="text-white mr-2">{svg}</span>
              <span>Easier to Use</span>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div className="md:w-1/2 flex justify-center md:justify-end">
          <figure className="max-w-full h-auto">
            <img 
              src={updateImage} 
              alt="A dashboard showing cryptocurrency data and storage upgrades" 
              className="rounded-lg shadow-2xl"
            />
          </figure>
        </motion.div>
      </section>
  );
};

export default Upgrade;